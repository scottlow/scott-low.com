# scott-low.com

Personal website built with Next.js 14, Tailwind CSS, and deployed on Netlify.

## Features

- **Resume-style home page** with photo, bio, and vertical timeline
- **Blog** with markdown/MDX support and automatic preview extraction
- **Ocean-inspired parallax background** with accessibility support
- **Mobile-first responsive design**
- **Lighthouse optimized** for performance, accessibility, and SEO

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) for frontmatter parsing
- [remark](https://github.com/remarkjs/remark) for markdown processing
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/scott-low.com.git
   cd scott-low.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
scott-low.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── blog/
│       ├── page.tsx        # Blog index
│       └── [slug]/
│           └── page.tsx    # Individual blog posts
├── components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ParallaxBackground.tsx
│   ├── ProfileSection.tsx
│   ├── ResumeTimeline.tsx
│   └── BlogCard.tsx
├── content/
│   └── blog/               # Markdown blog posts
├── lib/
│   ├── blog.ts             # Blog utilities
│   └── resume-data.ts      # Resume content
├── public/
│   └── images/             # Static images
└── ...config files
```

## Adding Blog Posts

Create a new markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
tags: ["tag1", "tag2"]
---

Your content here. The preview on the blog index is automatically
extracted from the first ~150 characters of your post content.
```

Supported file extensions: `.md`, `.mdx`

## Customization

### Profile & Resume

Edit `lib/resume-data.ts` to update:
- Your name and bio
- Profile image path
- Work experience timeline

### Colors

The accent color and ocean palette can be customized in `tailwind.config.ts`:

```ts
colors: {
  accent: {
    500: '#2196f3', // Primary accent
    // ... other shades
  },
  ocean: {
    light: '#e8f4f8',
    // ... other shades
  },
}
```

### External Links

Update the links in `components/Header.tsx`:
- LinkedIn URL
- GitHub URL
- Email address

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect the repository to Netlify
3. Netlify will auto-detect Next.js and use the `netlify.toml` configuration
4. Deploy!

Build settings are pre-configured:
- **Build command:** `npm run build`
- **Publish directory:** `out`

### Manual Build

```bash
npm run build
```

This generates a static export in the `out` directory.

## Accessibility

- Semantic HTML throughout
- ARIA labels for icons and interactive elements
- Respects `prefers-reduced-motion` for parallax animations
- High contrast text for readability

## Performance

Optimizations included:
- Static site generation
- Font display swap
- Minimal JavaScript bundle
- Optimized images via Next.js Image component

## Future Enhancements

Some ideas for future iterations:
- RSS feed for blog posts
- Dark mode toggle
- Reading time estimates
- Related posts suggestions
- Search functionality
- Analytics integration

## License

MIT
