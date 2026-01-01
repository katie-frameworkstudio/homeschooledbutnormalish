#!/bin/bash

# Create proper image placeholders using ImageMagick or basic conversion
# This creates actual visible placeholder images

cd "$(dirname "$0")/../public/images"

# Create a simple colored placeholder for hero
cat > hero-books.jpg << 'EOF'
<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E8E8E8"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="#999999" text-anchor="middle" dominant-baseline="middle">Colorful Books Image</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="#999999" text-anchor="middle" dominant-baseline="middle">(Replace with actual photo)</text>
</svg>
EOF

# Create headshot placeholder
cat > michael-headshot.jpg << 'EOF'
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="180" fill="#E8E8E8"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="24" fill="#999999" text-anchor="middle" dominant-baseline="middle">Michael</text>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="24" fill="#999999" text-anchor="middle" dominant-baseline="middle">Headshot</text>
</svg>
EOF

# Create book covers
for i in 1 2 3; do
cat > "book-$i.jpg" << EOF
<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E8E8E8"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="32" fill="#999999" text-anchor="middle" dominant-baseline="middle">Book ${i}</text>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="20" fill="#999999" text-anchor="middle" dominant-baseline="middle">Cover Image</text>
</svg>
EOF
done

# Create bio photo
cat > bio-photo.jpg << 'EOF'
<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E8E8E8"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" fill="#999999" text-anchor="middle" dominant-baseline="middle">Bio Photo</text>
</svg>
EOF

# Create speaking photos
for i in 1 2 3; do
cat > "speaking-$i.jpg" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E8E8E8"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" fill="#999999" text-anchor="middle" dominant-baseline="middle">Speaking Photo ${i}</text>
</svg>
EOF
done

# Create OG image
cat > og-image.jpg << 'EOF'
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E8E8E8"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="#999999" text-anchor="middle" dominant-baseline="middle">Social Media Preview</text>
</svg>
EOF

echo "✅ Created placeholder images"

