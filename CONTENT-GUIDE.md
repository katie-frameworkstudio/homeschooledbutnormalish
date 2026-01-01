# Content Editing Guide

## Quick Reference

**All content is in ONE file:** `content/siteContent.ts`

This guide shows you exactly what to edit and where.

## Updating Amazon Book Links

Find the `books` section in `content/siteContent.ts`:

```typescript
books: {
  items: [
    {
      id: "social-skills",
      // ... other fields ...
      buttonLink: "https://www.amazon.com/your-actual-link-here", // ← EDIT THIS
    },
    {
      id: "homeschooling-101",
      // ... other fields ...
      buttonLink: "https://www.amazon.com/your-actual-link-here", // ← EDIT THIS
    },
    {
      id: "budget",
      // ... other fields ...
      buttonLink: "https://www.amazon.com/your-actual-link-here", // ← EDIT THIS
    },
  ],
}
```

## Updating Contact Email

Find the `footer` section:

```typescript
footer: {
  name: "Michael Ramey",
  email: "your-email@example.com", // ← EDIT THIS
  copyright: "© 2025 Homeschooled But Normalish",
}
```

## Updating Hero Text

Find the `hero` section:

```typescript
hero: {
  image: "/images/hero-books.jpg",
  imageAlt: "Colorful Books",
  title: "Homeschooled but Normal...ish", // ← Main heading
  subtitle: "I'm Michael Ramey and I was homeschooled K-12.", // ← Subheading
  supportingText: "Your supporting text here", // ← Additional text
  // ...
}
```

## Updating Biography

Find the `bio` section:

```typescript
bio: {
  title: "Normal...ish",
  subtitle: "But far from Average",
  content: [
    "First paragraph here...", // ← Each string is a paragraph
    "Second paragraph here...",
    "Third paragraph here...",
    // Add or remove paragraphs as needed
  ],
}
```

## Updating Book Descriptions

Find the `books.items` array:

```typescript
books: {
  items: [
    {
      id: "social-skills",
      title: "A Homeschooler's Guide to Building Social Skills", // ← Book title
      description: "Your book description here...", // ← Description text
      buttonText: "Shop on Amazon", // ← Button label
      buttonLink: "https://amazon.com/...", // ← Amazon URL
    },
    // ... more books
  ],
}
```

## Updating Speaking Section

Find the `speaking` section:

```typescript
speaking: {
  title: "Speaking Engagements",
  headline: "Your headline here...", // ← Main headline
  statement: [
    "First paragraph...", // ← Each string is a paragraph
    "Second paragraph...",
    "Third paragraph...",
    "Fourth paragraph...",
  ],
}
```

## Updating Blog Teaser Items

Find the `blog` section:

```typescript
blog: {
  title: "My Normal...ish Blog",
  comingSoon: true, // ← Set to false when blog is live
  teaserItems: [
    "First bullet point", // ← Edit these
    "Second bullet point",
    "Third bullet point",
    "Fourth bullet point",
  ],
}
```

## Updating Navigation Menu

Find the `nav` section:

```typescript
nav: {
  items: [
    { label: "Home", href: "#hero" },
    { label: "Books", href: "#books" },
    { label: "About", href: "#bio" },
    { label: "Blog", href: "#blog" },
    { label: "Speaking", href: "#speaking" },
    { label: "More", href: "#footer" },
    // Add or remove items as needed
  ],
}
```

## Updating SEO Metadata

Find the `meta` section at the top:

```typescript
meta: {
  title: "Homeschooled but Normal...ish | Michael Ramey", // ← Browser tab title
  description: "Your SEO description here...", // ← Shows in Google results
  url: "https://homeschooledbutnormalish.com", // ← Your domain
  ogImage: "/images/og-image.jpg", // ← Social media preview image
}
```

## Image Filenames Reference

If you need to change image filenames, update these fields:

```typescript
hero: {
  image: "/images/hero-books.jpg", // ← Hero image
  headshot: "/images/michael-headshot.jpg", // ← Headshot
}

books: {
  items: [
    {
      image: "/images/book-1.jpg", // ← Book cover images
    },
    // ...
  ],
}

bio: {
  image: "/images/bio-photo.jpg", // ← Bio section photo
}

speaking: {
  images: [
    { src: "/images/speaking-1.jpg" }, // ← Speaking photos
    { src: "/images/speaking-2.jpg" },
    { src: "/images/speaking-3.jpg" },
  ],
}
```

## Tips

1. **Always use quotes** around text: `"like this"`
2. **Commas matter**: Add a comma after each item in a list
3. **Save the file** after editing
4. **Test locally** with `npm run dev` before deploying
5. **Keep backups** of your content file

## Common Mistakes

❌ **Missing quotes:**
```typescript
title: Homeschooled but Normal...ish  // WRONG
```

✅ **Correct:**
```typescript
title: "Homeschooled but Normal...ish"  // RIGHT
```

---

❌ **Missing comma:**
```typescript
items: [
  "First item"
  "Second item"  // WRONG - missing comma above
]
```

✅ **Correct:**
```typescript
items: [
  "First item",
  "Second item",  // RIGHT - comma after each item
]
```

---

❌ **Wrong path format:**
```typescript
image: "images/hero.jpg"  // WRONG - missing leading slash
```

✅ **Correct:**
```typescript
image: "/images/hero.jpg"  // RIGHT - starts with /
```

## Need Help?

If you break something:

1. Check for missing commas or quotes
2. Compare your edits to the examples above
3. Use a code editor with TypeScript support (VS Code recommended)
4. The editor will highlight errors with red squiggly lines

## Testing Your Changes

After editing:

```bash
# Start dev server
npm run dev

# Open http://localhost:3000 in your browser
# Check that your changes appear correctly
```

If you see errors, check the terminal for clues about what's wrong.

---

**Remember:** All content lives in `content/siteContent.ts` - that's the only file you need to edit for content changes!

