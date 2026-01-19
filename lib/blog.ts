import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  preview: string;
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Extract preview text from markdown content.
 * Strips markdown syntax and returns the first ~150 characters of prose.
 */
function extractPreview(content: string, maxLength: number = 150): string {
  // Remove frontmatter if present (shouldn't be, but just in case)
  let text = content.replace(/^---[\s\S]*?---/, '');

  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/`[^`]+`/g, '');

  // Remove images
  text = text.replace(/!\[.*?\]\(.*?\)/g, '');

  // Remove links but keep text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // Remove headings markers
  text = text.replace(/^#{1,6}\s+/gm, '');

  // Remove bold/italic markers
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/_([^_]+)_/g, '$1');

  // Remove blockquotes
  text = text.replace(/^>\s+/gm, '');

  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, '');

  // Remove list markers
  text = text.replace(/^[\s]*[-*+]\s+/gm, '');
  text = text.replace(/^[\s]*\d+\.\s+/gm, '');

  // Collapse whitespace
  text = text.replace(/\s+/g, ' ').trim();

  // Truncate to maxLength, trying to break at word boundary
  if (text.length > maxLength) {
    text = text.substring(0, maxLength);
    const lastSpace = text.lastIndexOf(' ');
    if (lastSpace > maxLength * 0.8) {
      text = text.substring(0, lastSpace);
    }
    text += '...';
  }

  return text;
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx?$/, ''));
}

/**
 * Get metadata for all posts, sorted by date (newest first)
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = getPostPath(slug);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      tags: data.tags || [],
      preview: extractPreview(content),
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}

/**
 * Get the full file path for a post
 */
function getPostPath(slug: string): string {
  // Check for .mdx first, then .md
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  if (fs.existsSync(mdxPath)) {
    return mdxPath;
  }
  return path.join(postsDirectory, `${slug}.md`);
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = getPostPath(slug);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      tags: data.tags || [],
      preview: extractPreview(content),
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
