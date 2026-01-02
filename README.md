# Homeschooled but Normal...ish

A clean, modern personal website for author Michael Ramey, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Generate placeholder images (if not already done)
node scripts/generate-placeholders.js

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📁 Project Structure

```
hbnWebsite/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage (main entry)
│   ├── globals.css        # Global styles
│   └── quiz/              # Lead magnet quiz (HIDDEN)
│       ├── layout.tsx     # Quiz metadata (noindex)
│       ├── page.tsx       # Quiz questions
│       └── result/[type]/ # Result pages
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Books.tsx          # Books section
│   ├── BookCard.tsx       # Individual book card
│   ├── Bio.tsx            # Biography section
│   ├── BlogTeaser.tsx     # Blog coming soon section
│   ├── Speaking.tsx       # Speaking engagements section
│   └── Footer.tsx         # Footer
├── content/               # Editable content
│   └── siteContent.ts     # **EDIT ALL CONTENT HERE**
├── public/
│   └── images/            # Image assets
└── scripts/
    └── generate-placeholders.js  # Creates placeholder images
```

## ✏️ Editing Content

**All website content is in one file:** `content/siteContent.ts`

This includes:
- Hero text and images
- Book descriptions and Amazon links
- Biography paragraphs
- Speaking section content
- Footer information
- Navigation items

Simply edit this file and save - the changes will appear immediately in development mode.

### Example: Updating Book Links

```typescript
// In content/siteContent.ts
books: {
  items: [
    {
      // ...
      buttonLink: "https://www.amazon.com/your-actual-book-link",
    },
  ],
}
```

## 🖼️ Replacing Images

Placeholder images are generated automatically. To use your actual images:

1. Prepare your images (see recommended sizes below)
2. Replace the files in `public/images/` keeping the same filenames
3. Optionally optimize images using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - ImageOptim (Mac)

### Required Images

| Filename | Recommended Size | Purpose |
|----------|-----------------|---------|
| `hero-books.jpg` | 1600×900 | Colorful books hero image |
| `michael-headshot.jpg` | 400×400 | Square headshot |
| `book-1.jpg` | 400×600 | Book cover: Social Skills |
| `book-2.jpg` | 400×600 | Book cover: Homeschooling 101 |
| `book-3.jpg` | 400×600 | Book cover: On a Budget |
| `bio-photo.jpg` | 600×800 | Biography portrait |
| `speaking-1.jpg` | 800×600 | Speaking photo 1 |
| `speaking-2.jpg` | 800×600 | Speaking photo 2 |
| `speaking-3.jpg` | 800×600 | Speaking photo 3 |
| `og-image.jpg` | 1200×630 | Social media preview |

## 🏗️ Building for Production

### Static Export (Recommended for most hosting)

```bash
npm run export
```

This creates a fully static site in the `out/` directory that can be hosted anywhere (Netlify, Vercel, GitHub Pages, Hostinger, etc.).

### Standard Next.js Build

```bash
npm run build
npm start
```

Use this if your hosting provider supports Node.js servers.

## 🌐 Deployment Options

### Option 1: Hostinger (Static)

1. Run `npm run export`
2. Upload the `out/` folder contents to your Hostinger public_html directory
3. Done!

### Option 2: Vercel (Easiest)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Option 3: Netlify

1. Run `npm run export`
2. Drag and drop the `out/` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your Git repository for auto-deploys

### Option 4: GitHub Pages

```bash
npm run export
# Push the out/ folder to gh-pages branch
```

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
}
```

Or customize Tailwind colors in `tailwind.config.ts`.

### Typography

The site uses system fonts by default. To add custom fonts:

1. Add font files to `public/fonts/` or use Google Fonts
2. Update `app/layout.tsx` or `globals.css`

### Layout & Spacing

Components use Tailwind utility classes. Common spacing values:
- Section padding: `py-24` (top/bottom)
- Container max width: `max-w-5xl`
- Content max width: `max-w-3xl`

## 🔍 SEO & Meta Tags

SEO metadata is configured in `app/layout.tsx` and pulls from `content/siteContent.ts`.

Includes:
- Page title & description
- OpenGraph tags (Facebook, LinkedIn)
- Twitter Card tags
- Semantic HTML structure

### Adding Google Analytics

Add to `app/layout.tsx` in the `<head>`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Responsive text sizing
- Alt text on all images

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Images:** next/image with optimization
- **Deployment:** Static export compatible

## 🎯 Lead Magnet Quiz

A hidden quiz page is available at `/quiz` that segments visitors by their primary homeschooling concern and delivers personalized book recommendations.

**Access:** [http://localhost:3000/quiz](http://localhost:3000/quiz)

**Documentation:** See [QUIZ-SETUP.md](QUIZ-SETUP.md) for full details on:
- Quiz flow and scoring logic
- Email integration setup (ConvertKit)
- PDF lead magnets
- Email sequences
- Making the quiz public

**Status:** Fully functional frontend, requires email service integration for lead capture.

## 📝 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run export     # Build and export static site
npm run lint       # Run ESLint
```

## 🐛 Troubleshooting

### Images not showing

- Ensure filenames in `public/images/` match exactly those in `content/siteContent.ts`
- Check file extensions (.jpg vs .jpeg vs .png)
- Clear browser cache

### Build errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port already in use

```bash
# Change port
npm run dev -- -p 3001
```

## 📧 Support

For questions about the website, contact:
- Email: Ramey@homeschooledbutnormalish.com

## 📄 License

© 2025 Homeschooled But Normalish. All rights reserved.

---

Built with ❤️ using Next.js

# Force rebuild
