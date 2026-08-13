# Abylin Johnson — Portfolio

A personal portfolio for my work across full-stack AI engineering, secure systems, reverse engineering, and hardware integration.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

The local Vite server prints the preview URL in the terminal.

## Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

Vite writes the production site to `dist/`.

## Deployment

The project is configured for Vercel. Import the repository and keep the detected Vite defaults:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Updating public metadata

Once the final production domain is known, add it as the canonical URL and create `public/sitemap.xml` using that exact domain.
