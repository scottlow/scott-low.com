import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import ParallaxBackground from '@/components/ParallaxBackground';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on leadership, product management, cooking, and life.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <ParallaxBackground />
      <div className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Thoughts on leadership, product management, cooking, books, and the occasional life update.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  preview={post.preview}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
