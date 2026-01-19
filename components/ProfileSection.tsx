import Image from 'next/image';

interface ProfileSectionProps {
  name: string;
  bio: string;
  imageSrc: string;
}

export default function ProfileSection({ name, bio, imageSrc }: ProfileSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
          {/* Profile Image */}
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

          {/* Bio Content */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {name}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
