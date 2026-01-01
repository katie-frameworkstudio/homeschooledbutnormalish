# Quick Start Guide

Get your website running in 3 minutes!

## Step 1: Install Dependencies

Open Terminal and run:

```bash
cd /Users/katiestippec/Developer/hbnWebsite
npm install
```

Wait for installation to complete (~30 seconds).

## Step 2: View the Site Locally

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

You should see your website with placeholder images!

## Step 3: Replace Images

1. Open the folder: `public/images/`
2. Replace these files with your actual photos (keep the same filenames):
   - `hero-books.jpg`
   - `michael-headshot.jpg`
   - `book-1.jpg`, `book-2.jpg`, `book-3.jpg`
   - `bio-photo.jpg`
   - `speaking-1.jpg`, `speaking-2.jpg`, `speaking-3.jpg`
   - `og-image.jpg`

## Step 4: Update Content

1. Open: `content/siteContent.ts`
2. Find and update:
   - Amazon book links (search for "placeholder")
   - Email address (search for "Ramey@")
   - Any text you want to change

Save the file and refresh your browser to see changes.

## Step 5: Deploy to Hostinger

When ready to go live:

```bash
npm run build
```

This creates an `out/` folder. Upload everything inside `out/` to your Hostinger `public_html` directory via:
- File Manager (in Hostinger control panel), or
- FTP (using FileZilla or similar)

**Done!** Your site is live! 🎉

---

## Need More Help?

- **Detailed setup:** See `SETUP.md`
- **Content editing:** See `CONTENT-GUIDE.md`
- **Deployment options:** See `DEPLOYMENT.md`
- **Full overview:** See `PROJECT-SUMMARY.md`

## Troubleshooting

**"Too many open files" error?**

This should now be fixed automatically in the npm scripts. If you still see issues:

```bash
# One-time fix for your current terminal session:
ulimit -n 10240

# Or use the helper scripts:
./scripts/dev.sh    # For development
./scripts/build.sh  # For building
```

**Port 3000 in use?**

Try a different port:
```bash
npm run dev -- -p 3001
```

**Build errors?**

Clear cache and rebuild:
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

**That's it!** You're ready to go. 🚀

