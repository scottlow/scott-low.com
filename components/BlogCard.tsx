import Link from 'next/link';
import { formatDate } from '@/lib/blog';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  preview: string;
  tags?: string[];
}

export default function BlogCard({ slug, title, date, preview, tags }: BlogCardProps) {
  return (
    <article className="group h-full bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <Link href={`/blog/${slug}`} className="flex flex-col h-full">
        {/* Date */}
        <time
          dateTime={date}
          className="text-sm text-gray-500 block mb-2"
        >
          {formatDate(date)}
        </time>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
          {title}
        </h2>

        {/* Preview - grows to fill available space */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {preview}
        </p>

        {/* Tags (hidden visually, kept for SEO) */}
        {tags && tags.length > 0 && (
          <span className="sr-only">Tags: {tags.join(', ')}</span>
        )}

        {/* Read more - always at bottom */}
        <span className="inline-flex items-center text-sm font-medium text-accent-600 group-hover:text-accent-700 mt-auto">
          Read more
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Link>
    </article>
  );
}
