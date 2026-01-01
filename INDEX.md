# Documentation Index

Welcome! This is your complete guide to the Homeschooled but Normal...ish website.

## 🚀 Getting Started

**New to the project? Start here:**

1. **[QUICK-START.md](QUICK-START.md)** ⭐ START HERE
   - Get up and running in 3 minutes
   - Install, view locally, and deploy basics

2. **[PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)**
   - Complete overview of what's been built
   - Features, structure, and technical details
   - Quality checks and next steps

## 📚 Main Documentation

3. **[README.md](README.md)**
   - Full project documentation
   - Installation and usage
   - Project structure
   - Customization guide

4. **[SETUP.md](SETUP.md)**
   - Detailed setup instructions
   - Troubleshooting common issues
   - Development workflow
   - Building for production

## ✏️ Content & Editing

5. **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** ⭐ EDIT CONTENT HERE
   - Step-by-step guide to editing all content
   - How to update text, links, and images
   - Common mistakes to avoid
   - Quick reference for all sections

6. **[content/siteContent.ts](content/siteContent.ts)** ⭐ THE CONTENT FILE
   - The actual file where all content lives
   - Edit this to change any text or links on the site

## 🚀 Deployment

7. **[DEPLOYMENT.md](DEPLOYMENT.md)**
   - Complete deployment guide
   - Instructions for Hostinger, Vercel, Netlify, GitHub Pages
   - Custom domain setup
   - SSL/HTTPS configuration
   - Updating the live site

8. **[PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md)** ⭐ USE BEFORE LAUNCH
   - Complete checklist before going live
   - Images, content, testing, SEO
   - Post-launch tasks
   - Maintenance reminders

## 🖼️ Images

9. **[public/images/README.md](public/images/README.md)**
   - Required images and sizes
   - Optimization tips
   - Where to find each image on the site

10. **[scripts/generate-placeholders.js](scripts/generate-placeholders.js)**
    - Script to regenerate placeholder images
    - Run with: `node scripts/generate-placeholders.js`

## 📁 Project Files

### Core Application Files

- **[app/layout.tsx](app/layout.tsx)** - Root layout with SEO metadata
- **[app/page.tsx](app/page.tsx)** - Main homepage
- **[app/globals.css](app/globals.css)** - Global styles

### Components

- **[components/Header.tsx](components/Header.tsx)** - Navigation header
- **[components/Hero.tsx](components/Hero.tsx)** - Hero section
- **[components/Books.tsx](components/Books.tsx)** - Books section
- **[components/BookCard.tsx](components/BookCard.tsx)** - Individual book card
- **[components/Bio.tsx](components/Bio.tsx)** - Biography section
- **[components/BlogTeaser.tsx](components/BlogTeaser.tsx)** - Blog teaser
- **[components/Speaking.tsx](components/Speaking.tsx)** - Speaking section
- **[components/Footer.tsx](components/Footer.tsx)** - Footer

### Configuration Files

- **[next.config.js](next.config.js)** - Next.js configuration (static export)
- **[tailwind.config.ts](tailwind.config.ts)** - Tailwind CSS configuration
- **[tsconfig.json](tsconfig.json)** - TypeScript configuration
- **[package.json](package.json)** - Dependencies and scripts

## 🎯 Quick Links by Task

### "I want to..."

**...get started quickly**
→ [QUICK-START.md](QUICK-START.md)

**...edit the website text**
→ [CONTENT-GUIDE.md](CONTENT-GUIDE.md) then edit [content/siteContent.ts](content/siteContent.ts)

**...replace the images**
→ [public/images/README.md](public/images/README.md)

**...deploy to Hostinger**
→ [DEPLOYMENT.md](DEPLOYMENT.md) (Option 1)

**...deploy to Vercel**
→ [DEPLOYMENT.md](DEPLOYMENT.md) (Option 2)

**...check everything before launch**
→ [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md)

**...fix an error**
→ [SETUP.md](SETUP.md) (Troubleshooting section)

**...understand the project**
→ [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)

**...customize colors/fonts**
→ [README.md](README.md) (Customization section)

**...update Amazon links**
→ [CONTENT-GUIDE.md](CONTENT-GUIDE.md) (Updating Amazon Book Links)

**...change the email address**
→ [CONTENT-GUIDE.md](CONTENT-GUIDE.md) (Updating Contact Email)

## 📋 Common Tasks

### First Time Setup

1. Read [QUICK-START.md](QUICK-START.md)
2. Run `npm install`
3. Run `npm run dev`
4. View at http://localhost:3000

### Editing Content

1. Open [content/siteContent.ts](content/siteContent.ts)
2. Make your changes (see [CONTENT-GUIDE.md](CONTENT-GUIDE.md) for help)
3. Save the file
4. Refresh browser to see changes

### Replacing Images

1. Prepare images (see [public/images/README.md](public/images/README.md))
2. Optimize at https://tinypng.com/
3. Replace files in `public/images/` (keep same filenames)
4. Refresh browser to see changes

### Deploying

1. Review [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md)
2. Run `npm run build`
3. Upload `out/` folder to hosting (see [DEPLOYMENT.md](DEPLOYMENT.md))
4. Visit your live site!

## 🆘 Getting Help

### Troubleshooting

- **Dev server issues:** [SETUP.md](SETUP.md) → Troubleshooting
- **Build errors:** [SETUP.md](SETUP.md) → Troubleshooting
- **Deployment issues:** [DEPLOYMENT.md](DEPLOYMENT.md) → Troubleshooting

### Learning More

- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

### Contact

- **Website owner:** Ramey@homeschooledbutnormalish.com

## 📊 File Overview

```
Documentation Files:
├── INDEX.md (this file)          - Documentation index
├── QUICK-START.md                - 3-minute quick start
├── PROJECT-SUMMARY.md            - Complete project overview
├── README.md                     - Main documentation
├── SETUP.md                      - Setup & troubleshooting
├── CONTENT-GUIDE.md              - Content editing guide
├── DEPLOYMENT.md                 - Deployment guide
└── PRE-LAUNCH-CHECKLIST.md       - Pre-launch checklist

Application Files:
├── app/                          - Next.js application
├── components/                   - React components
├── content/                      - Content configuration
├── public/                       - Static assets
├── scripts/                      - Utility scripts
└── out/                          - Built static site (after npm run build)
```

## 🎓 Recommended Reading Order

### For First-Time Users:

1. [QUICK-START.md](QUICK-START.md) - Get it running
2. [CONTENT-GUIDE.md](CONTENT-GUIDE.md) - Learn to edit content
3. [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md) - Prepare for launch
4. [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy the site

### For Developers:

1. [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) - Understand the architecture
2. [README.md](README.md) - Technical details
3. [SETUP.md](SETUP.md) - Development workflow
4. Component files in `components/` - Review the code

### For Content Editors:

1. [CONTENT-GUIDE.md](CONTENT-GUIDE.md) - How to edit
2. [content/siteContent.ts](content/siteContent.ts) - The content file
3. [public/images/README.md](public/images/README.md) - Image requirements

## ✅ Project Status

- ✅ **Complete and ready to deploy**
- ✅ All components built and tested
- ✅ Static export working
- ✅ Documentation complete
- ✅ Placeholder images generated

## 🎯 Next Steps

1. **Replace images** in `public/images/`
2. **Update content** in `content/siteContent.ts`
3. **Test locally** with `npm run dev`
4. **Build** with `npm run build`
5. **Deploy** following [DEPLOYMENT.md](DEPLOYMENT.md)

---

**Welcome to your new website!** 🎉

Start with [QUICK-START.md](QUICK-START.md) and you'll be up and running in minutes.

Questions? See the relevant guide above or contact Ramey@homeschooledbutnormalish.com

