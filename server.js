import express from 'express';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Simple JSON file store
const CONTENT_FILE = path.join(__dirname, 'content.json');
const PUBLIC_DIR = __dirname;
const UPLOADS_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

// Multer storage for uploads
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (_req, file, cb) {
    const timestamp = Date.now();
    const safeOriginal = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
    cb(null, `${timestamp}_${safeOriginal}`);
  },
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static site and uploads
app.use('/uploads', express.static(UPLOADS_DIR));

// Serve React build in production, or public dir in development
const DIST_DIR = path.join(__dirname, 'dist');
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
} else {
  app.use(express.static(PUBLIC_DIR));
}

// Helpers
function readContent() {
  if (!fs.existsSync(CONTENT_FILE)) {
    return {};
  }
  try {
    const raw = fs.readFileSync(CONTENT_FILE, 'utf8');
    return JSON.parse(raw || '{}');
  } catch (e) {
    console.error('Failed to read content.json', e);
    return {};
  }
}

function writeContent(data) {
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Public endpoint to fetch content key-values
app.get('/content', (_req, res) => {
  res.json(readContent());
});

// Admin endpoints
app.post('/admin/content', (req, res) => {
  const updates = req.body || {};
  if (typeof updates !== 'object' || Array.isArray(updates)) {
    return res.status(400).json({ error: 'Invalid body' });
  }
  const current = readContent();
  const merged = { ...current, ...updates };
  writeContent(merged);
  res.json({ ok: true, content: merged });
});

// Upload a file and return its URL
app.post('/admin/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ ok: true, url: fileUrl });
});

// Very simple admin UI
app.get('/admin', (_req, res) => {
  res.send('<!DOCTYPE html>' +
  '<html lang="en">' +
    '<head>' +
      '<meta charset="UTF-8" />' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
      '<title>Wonder Guard Admin</title>' +
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">' +
      '<script src="https://cdn.tailwindcss.com"></script>' +
      '<style>' +
        '.section-card { transition: all 0.2s ease; }' +
        '.section-card:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }' +
        '.save-indicator { opacity: 0; transition: opacity 0.3s ease; }' +
        '.save-indicator.show { opacity: 1; }' +
        '.image-preview { max-width: 200px; max-height: 150px; object-fit: cover; border-radius: 8px; }' +
      '</style>' +
    '</head>' +
    '<body class="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">' +
      '<div class="max-w-7xl mx-auto p-6">' +
        '<div class="text-center mb-8">' +
          '<h1 class="text-4xl font-bold text-gray-800 mb-2">Wonder Guard CMS</h1>' +
          '<p class="text-gray-600">Edit your entire site content easily</p>' +
        '</div>' +

        '<div class="grid gap-6">' +
          '<!-- Hero Section -->' +
          '<div class="section-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100">' +
            '<div class="flex items-center gap-3 mb-4">' +
              '<i class="fas fa-star text-blue-600 text-xl"></i>' +
              '<h2 class="text-2xl font-bold text-gray-800">Hero Section</h2>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>' +
                '<input id="hero.title" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Early UTI Detection for Catheterized Patients"/>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Background Video</label>' +
                '<div class="flex gap-3 items-center">' +
                  '<input id="hero.video" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="/uploads/your-video.mp4"/>' +
                  '<label class="inline-flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all">' +
                    '<i class="fa fa-upload"></i>' +
                    '<span>Upload</span>' +
                    '<input id="upload-video" type="file" accept="video/*" class="hidden"/>' +
                  '</label>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="mt-4">' +
              '<label class="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>' +
              '<textarea id="hero.subtitle" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" rows="3" placeholder="Wonder Guard is a revolutionary smart biosensor system..."></textarea>' +
            '</div>' +
          '</div>' +

          '<!-- Problem Section -->' +
          '<div class="section-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100">' +
            '<div class="flex items-center gap-3 mb-4">' +
              '<i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>' +
              '<h2 class="text-2xl font-bold text-gray-800">Problem Section</h2>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>' +
                '<input id="problem.title" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="The Problem We\'re Solving"/>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>' +
                '<input id="problem.subtitle" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Urinary tract infections represent one of the most common..."/>' +
              '</div>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4 mt-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Problem Description</label>' +
                '<textarea id="problem.description" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" rows="3" placeholder="Urinary tract infections are one of the most common..."></textarea>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Image</label>' +
                '<div class="space-y-3">' +
                  '<input id="problem.image" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="/uploads/problem-image.jpg"/>' +
                  '<div class="flex gap-3 items-center">' +
                    '<label class="inline-flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">' +
                      '<i class="fa fa-upload"></i>' +
                      '<span>Upload Image</span>' +
                      '<input id="upload-problem-img" type="file" accept="image/*" class="hidden"/>' +
                    '</label>' +
                    '<img id="problem-image-preview" class="image-preview hidden" alt="Preview"/>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<!-- Solution Section -->' +
          '<div class="section-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100">' +
            '<div class="flex items-center gap-3 mb-4">' +
              '<i class="fas fa-lightbulb text-yellow-600 text-xl"></i>' +
              '<h2 class="text-2xl font-bold text-gray-800">Solution Section</h2>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>' +
                '<input id="solution.title" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Our Revolutionary Solution"/>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>' +
                '<input id="solution.subtitle" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Wonder Guard leverages cutting-edge nano-biosensor technology..."/>' +
              '</div>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4 mt-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Solution Description</label>' +
                '<textarea id="solution.description" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" rows="3" placeholder="Wonder Guard uses nano-biosensor technology..."></textarea>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Image</label>' +
                '<div class="space-y-3">' +
                  '<input id="solution.image" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="/uploads/solution-image.jpg"/>' +
                  '<div class="flex gap-3 items-center">' +
                    '<label class="inline-flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">' +
                      '<i class="fa fa-upload"></i>' +
                      '<span>Upload Image</span>' +
                      '<input id="upload-solution-img" type="file" accept="image/*" class="hidden"/>' +
                    '</label>' +
                    '<img id="solution-image-preview" class="image-preview hidden" alt="Preview"/>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<!-- News Section -->' +
          '<div class="section-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100">' +
            '<div class="flex items-center gap-3 mb-4">' +
              '<i class="fas fa-newspaper text-indigo-600 text-xl"></i>' +
              '<h2 class="text-2xl font-bold text-gray-800">News Section</h2>' +
            '</div>' +
            '<div class="mb-4">' +
              '<label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>' +
              '<input id="news.title" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Latest News & Recognition"/>' +
            '</div>' +
            '<div class="mb-4">' +
              '<label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>' +
              '<input id="news.subtitle" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Stay updated with our latest achievements..."/>' +
            '</div>' +
            '<div class="mb-4">' +
              '<p class="text-sm text-gray-600 mb-3">Edit three news cards:</p>' +
              '<div id="news-forms" class="grid md:grid-cols-3 gap-4"></div>' +
            '</div>' +
          '</div>' +

          '<!-- Contact Section -->' +
          '<div class="section-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100">' +
            '<div class="flex items-center gap-3 mb-4">' +
              '<i class="fas fa-envelope text-pink-600 text-xl"></i>' +
              '<h2 class="text-2xl font-bold text-gray-800">Contact Section</h2>' +
            '</div>' +
            '<div class="grid md:grid-cols-2 gap-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>' +
                '<input id="contact.title" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Contact Us"/>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>' +
                '<input id="contact.subtitle" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Ready to learn more about Wonder Guard?"/>' +
              '</div>' +
            '</div>' +
            '<div class="grid md:grid-cols-3 gap-4 mt-4">' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Email</label>' +
                '<input id="contact.email" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="info@wonderguard.com"/>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>' +
                '<input id="contact.phone" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="+1 (555) 123-4567"/>' +
              '</div>' +
              '<div>' +
                '<label class="block text-sm font-medium text-gray-700 mb-2">Location</label>' +
                '<input id="contact.location" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Toronto, Canada"/>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<!-- Action Buttons -->' +
          '<div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">' +
            '<div class="flex flex-col sm:flex-row gap-4 items-center justify-between">' +
              '<div class="flex items-center gap-4">' +
                '<button id="saveBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">' +
                  '<i class="fas fa-save"></i>' +
                  '<span>Save All Changes</span>' +
                '</button>' +
                '<div id="saveIndicator" class="save-indicator text-green-600 font-medium">' +
                  '<i class="fas fa-check-circle"></i> Saved!' +
                '</div>' +
              '</div>' +
              '<div class="flex gap-3">' +
                '<a href="/" target="_blank" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium shadow transition-all flex items-center gap-2">' +
                  '<i class="fas fa-eye"></i>' +
                  '<span>View Site</span>' +
                '</a>' +
                '<button id="previewBtn" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2">' +
                  '<i class="fas fa-magic"></i>' +
                  '<span>Preview Changes</span>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<script>' +
        'let saveTimeout;' +
        'const allFields = [' +
          '"hero.title", "hero.subtitle", "hero.video",' +
          '"problem.title", "problem.subtitle", "problem.description", "problem.image",' +
          '"solution.title", "solution.subtitle", "solution.description", "solution.image",' +
          '"news.title", "news.subtitle",' +
          '"contact.title", "contact.subtitle", "contact.email", "contact.phone", "contact.location"' +
        '];' +

        'function buildNewsForms() {' +
          'const container = document.getElementById("news-forms");' +
          'container.innerHTML = "";' +
          'for (let i = 0; i < 3; i++) {' +
            'const card = document.createElement("div");' +
            'card.className = "border border-gray-200 rounded-xl p-4 bg-gray-50";' +
            'card.innerHTML = ' +
              '"<div class=\\"text-sm font-medium text-gray-700 mb-3\\">News Card " + (i+1) + "</div>" +' +
              '"<label class=\\"block text-sm mb-2\\">Article URL</label>" +' +
              '"<input id=\\"news." + i + ".url\\" class=\\"w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\\" placeholder=\\"https://...\\"/>" +' +
              '"<label class=\\"block text-sm mb-2\\">Featured Image</label>" +' +
              '"<div class=\\"space-y-2 mb-3\\">" +' +
                '"<input id=\\"news." + i + ".img\\" class=\\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\\" placeholder=\\"Upload or enter URL\\"/>" +' +
                '"<div class=\\"flex gap-2 items-center\\">" +' +
                  '"<label class=\\"inline-flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-all\\">" +' +
                    '"<i class=\\"fa fa-upload\\"></i>" +' +
                    '"<span>Upload</span>" +' +
                    '"<input id=\\"upload-news-img-" + i + "\\" type=\\"file\\" accept=\\"image/*\\" class=\\"hidden\\"/>" +' +
                  '"</label>" +' +
                  '"<img id=\\"news-" + i + "-image-preview\\" class=\\"image-preview hidden\\" alt=\\"Preview\\"/>" +' +
                '"</div>" +' +
              '"</div>" +' +
              '"<label class=\\"block text-sm mb-2\\">Article Title</label>" +' +
              '"<input id=\\"news." + i + ".title\\" class=\\"w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\\" placeholder=\\"News title\\"/>" +' +
              '"<label class=\\"block text-sm mb-2\\">Publication Date</label>" +' +
              '"<input id=\\"news." + i + ".date\\" class=\\"w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\\" placeholder=\\"Jan 1, 2025\\"/>" +' +
              '"<label class=\\"block text-sm mb-2\\">Source/Publisher</label>" +' +
              '"<input id=\\"news." + i + ".source\\" class=\\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all\\" placeholder=\\"McMaster University\\"/>" +' +
              '"<label class=\\"block text-sm mb-2\\">Brief Description</label>" +' +
              '"<textarea id=\\"news." + i + ".description\\" class=\\"w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none\\" rows="2" placeholder=\\"Brief description of the news...\\"></textarea>";' +
            'container.appendChild(card);' +
          '}' +
        '}' +

        'async function loadContentIntoForm() {' +
          'const res = await fetch("/content");' +
          'const content = res.ok ? await res.json() : {};' +

          '// Fill all fields' +
          'allFields.forEach((key) => {' +
            'const el = document.getElementById(key);' +
            'if (el && content[key] !== undefined) {' +
              'el.value = content[key];' +
              '// Show image previews if they exist' +
              'if (key.includes(".image") && content[key]) {' +
                'showImagePreview(key, content[key]);' +
              '}' +
            '}' +
          '});' +

          '// Fill news' +
          'for (let i = 0; i < 3; i++) {' +
            '["url", "img", "title", "date", "source", "description"].forEach(field => {' +
              'const key = "news." + i + "." + field;' +
              'const el = document.getElementById(key);' +
              'if (el && content[key] !== undefined) {' +
                'el.value = content[key];' +
                '// Show image previews for news' +
                'if (field === "img" && content[key]) {' +
                  'showImagePreview("news-" + i + "-image", content[key]);' +
                '}' +
              '}' +
            '});' +
          '}' +
        '}' +

        'function showImagePreview(fieldId, imageUrl) {' +
          'const previewId = fieldId + "-preview";' +
          'const preview = document.getElementById(previewId);' +
          'if (preview) {' +
            'preview.src = imageUrl;' +
            'preview.classList.remove("hidden");' +
          '}' +
        '}' +

        'async function uploadFile(input, targetFieldId) {' +
          'const file = input.files && input.files[0];' +
          'if (!file) return null;' +
          'const formData = new FormData();' +
          'formData.append("file", file);' +
          'const res = await fetch("/admin/upload", { method: "POST", body: formData });' +
          'if (!res.ok) return null;' +
          'const data = await res.json();' +
          '// Update the target field' +
          'const targetField = document.getElementById(targetFieldId);' +
          'if (targetField) {' +
            'targetField.value = data.url;' +
            '// Show preview' +
            'showImagePreview(targetFieldId, data.url);' +
          '}' +
          'return data.url;' +
        '}' +

        'function wireUploads() {' +
          '// Hero video upload' +
          'const videoInput = document.getElementById("upload-video");' +
          'videoInput.addEventListener("change", async (e) => {' +
            'const url = await uploadFile(e.target, "hero.video");' +
            'if (url) videoInput.value = "";' +
          '});' +
          '// Section image uploads' +
          '["problem", "solution"].forEach(section => {' +
            'const imgInput = document.getElementById("upload-" + section + "-img");' +
            'imgInput.addEventListener("change", async (e) => {' +
              'await uploadFile(e.target, section + ".image");' +
              'imgInput.value = "";' +
            '});' +
          '});' +
          '// News image uploads' +
          'for (let i = 0; i < 3; i++) {' +
            'const imgInput = document.getElementById("upload-news-img-" + i);' +
            'imgInput.addEventListener("change", async (e) => {' +
              'await uploadFile(e.target, "news." + i + ".img");' +
              'imgInput.value = "";' +
            '});' +
          '}' +
        '}' +

        'function showSaveIndicator() {' +
          'const indicator = document.getElementById("saveIndicator");' +
          'indicator.classList.add("show");' +
          'clearTimeout(saveTimeout);' +
          'saveTimeout = setTimeout(() => indicator.classList.remove("show"), 3000);' +
        '}' +

        'async function saveContent() {' +
          'const payload = {};' +
          'allFields.forEach((key) => {' +
            'const el = document.getElementById(key);' +
            'if (el && el.value.trim() !== "") payload[key] = el.value.trim();' +
          '});' +
          'for (let i = 0; i < 3; i++) {' +
            '["url", "img", "title", "date", "source", "description"].forEach(field => {' +
              'const key = "news." + i + "." + field;' +
              'const el = document.getElementById(key);' +
              'if (el && el.value.trim() !== "") payload[key] = el.value.trim();' +
            '});' +
          '}' +
          'const res = await fetch("/admin/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });' +
          'if (res.ok) {' +
            'showSaveIndicator();' +
            'console.log("Content saved successfully");' +
          '} else {' +
            'alert("Save failed. Please try again.");' +
          '}' +
        '}' +

        'function previewChanges() {' +
          'const previewWindow = window.open("/", "_blank");' +
          'if (previewWindow) {' +
            'setTimeout(() => previewWindow.location.reload(), 1000);' +
          '}' +
        '}' +

        '(async function init(){' +
          'buildNewsForms();' +
          'wireUploads();' +
          'await loadContentIntoForm();' +
          'document.getElementById("saveBtn").addEventListener("click", saveContent);' +
          'document.getElementById("previewBtn").addEventListener("click", previewChanges);' +
        '})();' +
      '</script>' +

    '</body>' +
  '</html>');
});

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/content') || req.path.startsWith('/admin') || req.path.startsWith('/uploads')) {
    return;
  }
  const indexPath = fs.existsSync(DIST_DIR) 
    ? path.join(DIST_DIR, 'index.html')
    : path.join(PUBLIC_DIR, 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Wonder Guard CMS running on http://localhost:${PORT}`);
  console.log(`React dev server should run on http://localhost:5173 (run 'npm run dev')`);
});
