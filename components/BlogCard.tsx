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
    <article className="group bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <Link href={`/blog/${slug}`} className="block">
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

        {/* Preview */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {preview}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-accent-50 text-accent-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more */}
        <span className="inline-flex items-center text-sm font-medium text-accent-600 group-hover:text-accent-700">
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
