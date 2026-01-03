#!/usr/bin/env node

/**
 * Generate placeholder images for the website
 * This creates simple colored SVG placeholders that can be replaced with real images later
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const placeholders = [
  { name: 'hero-books.jpg', width: 1600, height: 900, color: '#4A90E2', label: 'Hero Books' },
  { name: 'michael-headshot.jpg', width: 400, height: 400, color: '#7B68EE', label: 'Michael Headshot' },
  { name: 'book-1.jpg', width: 400, height: 600, color: '#50C878', label: 'Book 1\nSocial Skills' },
  { name: 'book-2.jpg', width: 400, height: 600, color: '#FF6B6B', label: 'Book 2\nHomeschooling 101' },
  { name: 'book-3.jpg', width: 400, height: 600, color: '#FFA07A', label: 'Book 3\nOn a Budget' },
  { name: 'bio-photo.jpg', width: 600, height: 800, color: '#9370DB', label: 'Bio Photo' },
  { name: 'speaking-1.jpg', width: 800, height: 600, color: '#20B2AA', label: 'Speaking 1' },
  { name: 'speaking-2.jpg', width: 800, height: 600, color: '#FF69B4', label: 'Speaking 2' },
  { name: 'speaking-3.jpg', width: 800, height: 600, color: '#FFD700', label: 'Speaking 3' },
  { name: 'og-image.jpg', width: 1200, height: 630, color: '#4A90E2', label: 'OG Image\nHomeschooled but Normal...ish' },
];

function generateSVG(width, height, color, label) {
  const lines = label.split('\n');
  const fontSize = Math.min(width, height) / 15;
  const lineHeight = fontSize * 1.2;
  const startY = (height - (lines.length - 1) * lineHeight) / 2;

  const textElements = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${startY + i * lineHeight}" font-family="Arial, sans-serif" font-size="${fontSize}" fill="white" text-anchor="middle" dominant-baseline="middle">${line}</text>`
    )
    .join('\n    ');

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  ${textElements}
</svg>`;
}

console.log('Generating placeholder images...\n');

placeholders.forEach(({ name, width, height, color, label }) => {
  const svg = generateSVG(width, height, color, label);
  const filePath = path.join(imagesDir, name);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Created ${name} (${width}x${height})`);
});

console.log('\n✅ All placeholder images generated successfully!');
console.log('\nReplace these files in public/images/ with your actual images.');
console.log('Keep the same filenames for the images to work correctly.\n');


