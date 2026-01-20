import Image from 'next/image';
import Link from 'next/link';

interface ProfileSectionProps {
  name: string;
  tagline: string;
  jobTitle: string;
  bio: string;
  imageSrc: string;
}

export default function ProfileSection({
  name,
  tagline,
  jobTitle,
  bio,
  imageSrc,
}: ProfileSectionProps) {
  const [greeting, rest] = bio.split(' I\'m a');
  const [firstParagraph, secondParagraph] = rest ? (' I\'m a' + rest).split(' Outside of work, ') : ['', ''];
  const [beforeBlog, afterBlog] = secondParagraph ? secondParagraph.split('my blog') : ['', ''];

  return (
    <section className="pt-16 sm:pt-24 pb-4 sm:pb-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero: Photo, Name, Tagline, Title */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 mb-10 sm:mb-14">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <Image
                src={imageSrc}
                alt={`Photo of ${name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name, Tagline, Title */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
              {name}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-2 whitespace-nowrap">
              {tagline}
            </p>
            <p className="text-lg text-accent-600 font-medium">
              {jobTitle}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
            About
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center sm:text-left mb-4">
            <span className="font-medium text-gray-900">{greeting}</span>
            {firstParagraph}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-center sm:text-left">
            Outside of work, {beforeBlog}
            <Link href="/blog" className="text-accent-600 hover:text-accent-700 underline underline-offset-2">
              my blog
            </Link>
            {afterBlog}
          </p>
        </div>
      </div>
    </section>
  );
}
