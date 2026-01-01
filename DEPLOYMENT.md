# Deployment Guide

This site is built as a static export, making it compatible with virtually any hosting provider.

## Pre-Deployment Checklist

- [ ] Replace all placeholder images in `public/images/`
- [ ] Update Amazon book links in `content/siteContent.ts`
- [ ] Update contact email in `content/siteContent.ts`
- [ ] Test build locally: `npm run build`
- [ ] Review the site in the `out/` directory

## Deployment Options

### Option 1: Hostinger (Your Current Host)

Hostinger supports static sites through their File Manager or FTP.

**Steps:**

1. Build the site:
   ```bash
   npm run build
   ```

2. The static site will be in the `out/` directory

3. Upload to Hostinger:
   - **Via File Manager:**
     - Log into Hostinger control panel
     - Open File Manager
     - Navigate to `public_html` (or your domain's directory)
     - Delete old files (backup first!)
     - Upload all files from `out/` directory
   
   - **Via FTP:**
     - Use FileZilla or another FTP client
     - Connect with your Hostinger FTP credentials
     - Navigate to `public_html`
     - Upload all files from `out/` directory

4. Visit your domain to verify

**Important:** Make sure your domain points to the directory where you uploaded the files.

### Option 2: Vercel (Recommended for Easy Updates)

Vercel is made by the Next.js team and offers the easiest deployment.

**Steps:**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Sign up at https://vercel.com

3. Click "Import Project"

4. Select your GitHub repository

5. Vercel auto-detects Next.js and deploys

6. Get a free `.vercel.app` domain or connect your custom domain

**Benefits:**
- Automatic deployments on git push
- Free SSL certificate
- CDN included
- Preview deployments for branches

### Option 3: Netlify

Similar to Vercel with a drag-and-drop option.

**Steps:**

1. Build the site:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop

3. Drag the `out/` folder onto the page

4. Get a free `.netlify.app` domain or connect custom domain

**Or with Git:**

1. Push code to GitHub

2. Sign up at https://netlify.com

3. Click "New site from Git"

4. Connect your repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### Option 4: GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. Build the site:
   ```bash
   npm run build
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d out"
     }
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in your repo settings
   - Go to Settings > Pages
   - Source: gh-pages branch

6. Your site will be at `https://yourusername.github.io/hbnWebsite`

### Option 5: AWS S3 + CloudFront

For those who want full control and AWS infrastructure.

**Steps:**

1. Build the site:
   ```bash
   npm run build
   ```

2. Create an S3 bucket

3. Enable static website hosting

4. Upload `out/` contents to bucket

5. (Optional) Set up CloudFront CDN

6. Configure custom domain with Route 53

## Custom Domain Setup

### For Vercel/Netlify:

1. Go to your project settings
2. Add custom domain
3. Update your DNS records as instructed:
   - Usually an A record or CNAME
4. SSL certificate is automatic

### For Hostinger:

Your domain should already be configured. Just upload the files to the correct directory.

### For GitHub Pages:

1. Add a `CNAME` file to your `public/` directory with your domain
2. Update your domain's DNS:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Environment Variables

This site doesn't use environment variables by default, but if you need them:

### For Vercel/Netlify:

Add in the dashboard under Settings > Environment Variables

### For Static Hosting:

Environment variables must be set at build time:

```bash
NEXT_PUBLIC_ANALYTICS_ID=your-id npm run build
```

Then access in code:
```typescript
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
```

## SSL/HTTPS

- **Vercel/Netlify:** Automatic free SSL
- **Hostinger:** Usually included, check your control panel
- **GitHub Pages:** Automatic with custom domains
- **AWS:** Configure through ACM + CloudFront

## Updating the Site

### With Git-based hosting (Vercel/Netlify):

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. Site auto-deploys in 1-2 minutes

### With manual hosting (Hostinger/FTP):

1. Make changes locally
2. Run `npm run build`
3. Upload new `out/` directory contents
4. Clear browser cache to see changes

## Performance Tips

1. **Optimize images** before uploading:
   - Use WebP format when possible
   - Compress with TinyPNG or Squoosh
   - Target < 200KB per image

2. **Enable caching** (if your host allows):
   - Set long cache headers for images
   - Use CDN if available

3. **Monitor performance**:
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Test on mobile devices

## Troubleshooting

### 404 errors on routes

This shouldn't happen with a single-page site, but if you add pages:
- Ensure your host supports SPA routing
- Add a `_redirects` file (Netlify) or `vercel.json` (Vercel)

### Images not loading

- Check file paths are correct
- Ensure images are in `public/images/`
- Verify filenames match exactly (case-sensitive)

### Site not updating

- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check you uploaded to correct directory
- Verify DNS propagation (can take 24-48 hours)

## Rollback

If something goes wrong:

1. **Git-based hosting:** Revert the commit and push
2. **Manual hosting:** Re-upload your backup files

Always keep a backup of your working `out/` directory!

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Docs: https://docs.netlify.com
- Hostinger Support: https://www.hostinger.com/tutorials

---

Good luck with your deployment! 🚀

