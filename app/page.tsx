import ParallaxBackground from '@/components/ParallaxBackground';
import ProfileSection from '@/components/ProfileSection';
import ResumeTimeline from '@/components/ResumeTimeline';
import { resumeData, profileData } from '@/lib/resume-data';

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <ProfileSection
        name={profileData.name}
        bio={profileData.bio}
        imageSrc={profileData.imageSrc}
      />
      <ResumeTimeline items={resumeData} />
    </>
  );
}
