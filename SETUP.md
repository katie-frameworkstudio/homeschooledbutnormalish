# Setup Guide

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate Placeholder Images

```bash
node scripts/generate-placeholders.js
```

This creates placeholder SVG images in `public/images/` that you can replace with real photos later.

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at http://localhost:3000 (or the next available port).

## Troubleshooting

### "Too many open files" error (macOS)

**✅ This is now automatically handled in the npm scripts!** The `ulimit` command is included in `npm run dev` and `npm run build`.

If you still see issues, you can:

**Option 1: Use the helper scripts**
```bash
./scripts/dev.sh    # Development server
./scripts/build.sh  # Production build
```

**Option 2: Permanent system-wide fix**
Add to your `~/.zshrc` or `~/.bash_profile`:
```bash
ulimit -n 10240
```
Then restart your terminal.

### Port already in use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Build errors

Clear Next.js cache and rebuild:

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## Editing Content

All content is centralized in `content/siteContent.ts`. Edit this file to update:

- Hero text and taglines
- Book descriptions and Amazon links
- Biography paragraphs
- Speaking section content
- Footer contact info
- Navigation menu items

Example:

```typescript
// content/siteContent.ts
export const siteContent = {
  hero: {
    title: "Your New Title Here",
    subtitle: "Your new subtitle",
    // ... etc
  },
  // ...
}
```

## Replacing Images

1. Prepare your images at the recommended sizes (see `public/images/README.md`)
2. Optimize them using:
   - https://tinypng.com/
   - https://squoosh.app/
   - ImageOptim (Mac)
3. Replace files in `public/images/` keeping the same filenames:
   - `hero-books.jpg`
   - `michael-headshot.jpg`
   - `book-1.jpg`, `book-2.jpg`, `book-3.jpg`
   - `bio-photo.jpg`
   - `speaking-1.jpg`, `speaking-2.jpg`, `speaking-3.jpg`
   - `og-image.jpg`

## Building for Production

### Static Export (Recommended)

```bash
npm run build
```

This creates a static site in the `out/` directory. Upload this to any static hosting:
- Hostinger
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- etc.

### Testing Production Build Locally

```bash
npm run build
npx serve out
```

## Deployment

### Hostinger

1. Build the site: `npm run build`
2. Upload contents of `out/` folder to your `public_html` directory via FTP or File Manager
3. Done!

### Vercel (Easiest)

1. Push code to GitHub
2. Import project at https://vercel.com
3. Deploy automatically

### Netlify

1. Build: `npm run build`
2. Drag `out/` folder to https://app.netlify.com/drop
3. Or connect GitHub repo for automatic deploys

## Customization

### Colors

Edit `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
}
```

Or use Tailwind classes in components.

### Fonts

Add custom fonts to `public/fonts/` and import in `app/layout.tsx` or `globals.css`.

### Layout

Components use Tailwind utility classes. Common patterns:
- Section padding: `py-24` (6rem top/bottom)
- Container: `max-w-5xl mx-auto`
- Content width: `max-w-3xl`

## Project Structure

```
hbnWebsite/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout + SEO
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── Books.tsx          # Books section
│   ├── BookCard.tsx       # Book card component
│   ├── Bio.tsx            # Bio section
│   ├── BlogTeaser.tsx     # Blog teaser
│   ├── Speaking.tsx       # Speaking section
│   └── Footer.tsx         # Footer
├── content/
│   └── siteContent.ts     # ⭐ EDIT CONTENT HERE
├── public/
│   └── images/            # Image assets
├── scripts/
│   └── generate-placeholders.js
├── package.json
├── next.config.js         # Next.js config
├── tailwind.config.ts     # Tailwind config
└── tsconfig.json          # TypeScript config
```

## Support

Questions? Contact: Ramey@homeschooledbutnormalish.com

