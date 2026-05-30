# Don Bosco React App

A modern frontend project built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev`: Start Vite development server.
- `npm run build`: Type-check and build production assets.
- `npm run preview`: Preview the production build locally.

## Project Structure

```text
.
├── public/
│   └── images/
├── src/
│   ├── data/
│   │   └── content.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
└── vite.config.ts
```

## Build for Production

Run:

```bash
npm run build
```

The production-ready output is generated in the `dist/` directory.

## Notes

- Static assets go inside `public/`.
- Shared content/constants can be managed in `src/data/content.ts`.
- Styling can be handled through Tailwind classes and the CSS files in `src/`.
