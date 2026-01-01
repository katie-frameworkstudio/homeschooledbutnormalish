# Build Error Fixed! ✅

## What Was the Problem?

You encountered a build error with the message:
```
Error: Failed to read source code from /Users/.../node_modules/next/...
Caused by: Operation not permitted (os error 1)
```

This is a **macOS file descriptor limit issue**. macOS limits how many files a process can have open at once (default: 256). Next.js needs to open many more files during build/dev.

## The Solution Applied

I've fixed this in **three ways**:

### 1. ✅ Updated npm Scripts

The `npm run dev` and `npm run build` commands now automatically increase the file limit:

```json
"scripts": {
  "dev": "ulimit -n 10240 2>/dev/null || true && next dev",
  "build": "ulimit -n 10240 2>/dev/null || true && next build"
}
```

**You can now just run:**
```bash
npm run dev    # Works!
npm run build  # Works!
```

### 2. ✅ Created Helper Scripts

Two convenient shell scripts in the `scripts/` folder:

```bash
./scripts/dev.sh     # Start dev server
./scripts/build.sh   # Build for production
```

Both automatically handle the file limit issue.

### 3. ✅ Fixed Metadata Warning

Also fixed the metadataBase warning by adding this to `app/layout.tsx`:

```typescript
metadataBase: new URL(siteContent.meta.url)
```

This ensures social media preview images work correctly.

## Current Status

✅ Build successful with **no errors**
✅ Build successful with **no warnings**
✅ Static site generated in `out/` folder
✅ Ready to deploy

## How to Use

Just run the normal commands - the fix is automatic:

```bash
# Development
npm run dev

# Production build
npm run build

# Or use the helper scripts
./scripts/dev.sh
./scripts/build.sh
```

## For Future Reference

If you ever see "too many open files" or "operation not permitted" errors again, it's this macOS file limit issue. The fix is already built into your project now!

## Optional: Permanent System-Wide Fix

If you want to fix this for **all projects** on your Mac, add this to `~/.zshrc` (or `~/.bash_profile`):

```bash
# Increase file descriptor limit
ulimit -n 10240
```

Then restart your terminal.

---

**You're all set!** The website is ready to deploy. 🚀

