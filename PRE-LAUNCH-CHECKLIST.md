# Pre-Launch Checklist

Use this checklist before deploying your site to ensure everything is ready.

## 📸 Images

- [ ] Replaced `hero-books.jpg` with actual colorful books photo
- [ ] Replaced `michael-headshot.jpg` with professional headshot
- [ ] Replaced `book-1.jpg` with Social Skills book cover
- [ ] Replaced `book-2.jpg` with Homeschooling 101 book cover
- [ ] Replaced `book-3.jpg` with Budget book cover
- [ ] Replaced `bio-photo.jpg` with bio section photo
- [ ] Replaced `speaking-1.jpg` with speaking photo
- [ ] Replaced `speaking-2.jpg` with speaking photo
- [ ] Replaced `speaking-3.jpg` with speaking photo
- [ ] Replaced `og-image.jpg` with social media preview image
- [ ] All images optimized (compressed) for web
- [ ] All images look good on mobile and desktop

## 📝 Content

- [ ] Updated all Amazon book links in `content/siteContent.ts`
- [ ] Verified email address is correct
- [ ] Reviewed all text for typos
- [ ] Checked all paragraphs in bio section
- [ ] Verified speaking section statement
- [ ] Confirmed copyright year is correct
- [ ] Reviewed blog teaser items

## 🔍 SEO & Meta

- [ ] Page title is correct in `content/siteContent.ts`
- [ ] Meta description is compelling (shows in Google)
- [ ] Website URL is correct
- [ ] OpenGraph image path is correct
- [ ] All images have descriptive alt text

## 🧪 Testing

- [ ] Tested site locally with `npm run dev`
- [ ] Clicked all navigation links
- [ ] Tested mobile menu (resize browser or use phone)
- [ ] Clicked all Amazon book buttons (open in new tab?)
- [ ] Tested email link in footer
- [ ] Checked site on mobile phone
- [ ] Checked site on tablet
- [ ] Checked site on desktop
- [ ] Tested smooth scrolling between sections
- [ ] Verified all images load correctly
- [ ] Checked for any console errors (F12 in browser)

## 🏗️ Build

- [ ] Ran `npm run build` successfully
- [ ] No build errors or warnings
- [ ] Checked `out/` folder exists
- [ ] Verified images are in `out/images/`

## 🚀 Deployment

- [ ] Backed up old website (if replacing existing site)
- [ ] Uploaded `out/` folder contents to hosting
- [ ] Verified site is live at your domain
- [ ] Tested live site on multiple devices
- [ ] Tested all links on live site
- [ ] Checked social media preview (share on Facebook/Twitter)
- [ ] Verified SSL certificate is active (https://)

## 🔒 Security & Performance

- [ ] HTTPS is enabled
- [ ] No sensitive information in code
- [ ] Images are optimized (not too large)
- [ ] Site loads quickly (test on slow connection)

## 📱 Social Media

- [ ] Shared site link on social media to test preview
- [ ] OpenGraph image displays correctly
- [ ] Title and description look good in preview

## ♿ Accessibility

- [ ] All images have alt text
- [ ] Can navigate with keyboard (Tab key)
- [ ] Focus states are visible
- [ ] Text has good contrast
- [ ] Headings are in logical order

## 📊 Analytics (Optional)

- [ ] Google Analytics installed (if desired)
- [ ] Facebook Pixel installed (if desired)
- [ ] Other tracking codes added (if desired)

## 🎯 Final Checks

- [ ] Domain points to correct hosting
- [ ] Email links work
- [ ] Contact information is correct
- [ ] Copyright notice is accurate
- [ ] All placeholder content removed
- [ ] Site looks professional on all devices
- [ ] No "Lorem ipsum" or test content
- [ ] All sections are in correct order

## 📧 Post-Launch

- [ ] Submitted site to Google Search Console
- [ ] Created sitemap (optional, but recommended)
- [ ] Announced launch on social media
- [ ] Sent announcement email to mailing list (if applicable)
- [ ] Updated business cards/materials with new URL (if changed)

## 🔄 Maintenance

- [ ] Saved backup of `content/siteContent.ts`
- [ ] Saved backup of all images
- [ ] Documented any custom changes
- [ ] Set reminder to update copyright year annually
- [ ] Plan for regular content updates

---

## Quick Test Commands

Before deploying, run these:

```bash
# Build the site
npm run build

# Check for any errors in the build output
# Should see: "✓ Generating static pages"

# Check the out directory exists
ls out/

# Should see: index.html, images/, _next/, etc.
```

## Launch Day!

When everything is checked:

1. ✅ Run `npm run build`
2. ✅ Upload `out/` folder to hosting
3. ✅ Visit your live site
4. ✅ Test everything one more time
5. ✅ Celebrate! 🎉

---

**Pro Tip:** Keep this checklist for future updates. You'll want to verify these items each time you make major changes.

**Remember:** It's better to launch with a few minor imperfections than to never launch at all. You can always update the site later!

Good luck! 🚀





