import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import ParallaxBackground from '@/components/ParallaxBackground';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.preview,
  };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <>
      <ParallaxBackground />
      <article className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-accent-600 mb-8 transition-colors"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to blog
          </Link>

          {/* Post container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-10 shadow-sm border border-gray-100">
            {/* Header */}
            <header className="mb-12">
              <time
                dateTime={post.date}
                className="text-sm text-gray-500 block mb-3"
              >
                {formatDate(post.date)}
              </time>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
                {post.title}
              </h1>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-accent-50 text-accent-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Content */}
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to all posts
              </Link>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
