# Image Optimization Guide

## Current Configuration

Your Next.js config is set up to optimize images automatically:

\`\`\`javascript
images: {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [
    { hostname: "*.public.blob.vercel-storage.com" },
    { hostname: "tkyy9tub5efxttep.public.blob.vercel-storage.com" },
  ],
}
\`\`\`

## Image Best Practices

### Use Next.js Image Component
Always use `next/image` for optimized delivery:

\`\`\`jsx
import Image from "next/image"

export default function Example() {
  return (
    <Image
      src="/images/example.jpg"
      alt="Descriptive alt text for SEO"
      width={1200}
      height={630}
      priority={false} // Set to true for above-fold images
      loading="lazy" // Automatic for non-priority images
    />
  )
}
\`\`\`

### ALT Text Best Practices
- Describe the image content clearly
- Include relevant keywords naturally
- Keep under 125 characters
- Don't include "image of" or "picture of"
- Example good: "lOZ!NR team collaborating on brand design"
- Example bad: "team photo"

### Image Size Recommendations
- Hero images: 1200x630px or 16:9 ratio
- Product images: 400x400px for thumbnails
- Social media: 1200x630px for OG images
- Favicon: 192x192px minimum

### Vercel Blob Storage
All images should be stored in Vercel Blob:
1. Upload via Vercel Dashboard
2. Get public URL from Blob storage
3. Configure in Next.js images remotePatterns
4. Use full URL in Image component

### Performance Tips
- Compress images before uploading (use TinyPNG, ImageOptim)
- Use WebP or AVIF formats when possible
- Lazy load images outside viewport
- Set width/height to avoid layout shift
- Implement responsive images for different devices

### Generate Placeholder Images
For development, use placeholder service:
\`\`\`jsx
<Image
  src="/placeholder.svg?height=400&width=600"
  alt="Design agency placeholder"
  width={600}
  height={400}
/>
\`\`\`

## Current Image Formats
- `.avif` - Best compression, browser support improving
- `.webp` - Excellent compression, widely supported
- `.png` - Lossless, use for graphics
- `.jpg` - Lossy, use for photos
- `.svg` - Vector, use for logos/icons
