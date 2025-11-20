# Wonder Guard Website

A modern React-based website for Wonder Guard with a clean, editorial design.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the React development server (for frontend):
```bash
npm run dev
```
This will start Vite dev server on http://localhost:5173

3. Run the backend server (for CMS and API):
```bash
npm run server
```
This will start the Express server on http://localhost:3000

## Development

- Frontend: http://localhost:5173 (Vite dev server with hot reload)
- Backend API: http://localhost:3000
- Admin CMS: http://localhost:3000/admin

## Production Build

1. Build the React app:
```bash
npm run build
```

2. The built files will be in the `dist/` folder

3. Run the server:
```bash
npm run server
```

The server will automatically serve the built React app from the `dist/` folder.

## Design Features

- **Typography**: Space Grotesk for headings, DM Sans for body text
- **Editorial Layout**: Asymmetric designs, varied spacing, less "card" styling
- **Color Scheme**: Custom dark theme with teal and orange accents
- **Smooth Animations**: Fade-in effects and subtle transitions
