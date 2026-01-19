import { TimelineItem } from '@/components/ResumeTimeline';

export const resumeData: TimelineItem[] = [
  {
    id: '1',
    role: 'Chief of Staff',
    company: 'Tech Company',
    location: 'Seattle, WA',
    startDate: 'Jan 2023',
    endDate: 'Present',
    highlights: [
      'Partner with executive leadership to drive strategic initiatives across the organization',
      'Coordinate cross-functional programs and streamline operational processes',
    ],
  },
  {
    id: '2',
    role: 'Senior Product Manager',
    company: 'Tech Company',
    location: 'Seattle, WA',
    startDate: 'Mar 2020',
    endDate: 'Dec 2022',
    highlights: [
      'Led product strategy for core platform features serving millions of users',
      'Drove 40% improvement in user engagement through data-informed product decisions',
    ],
  },
  {
    id: '3',
    role: 'Product Manager',
    company: 'Previous Company',
    location: 'Vancouver, BC',
    startDate: 'Jun 2017',
    endDate: 'Feb 2020',
    highlights: [
      'Launched mobile application from 0 to 1, achieving strong user adoption',
      'Built and mentored a cross-functional team of engineers and designers',
    ],
  },
  {
    id: '4',
    role: 'Associate Product Manager',
    company: 'Startup',
    location: 'Toronto, ON',
    startDate: 'Sep 2015',
    endDate: 'May 2017',
    highlights: [
      'Defined product roadmap and prioritized features based on user research',
      'Collaborated with engineering to ship bi-weekly releases',
    ],
  },
];

export const profileData = {
  name: 'Scott Low',
  bio: "Hi, I'm Scott! I'm a Canadian Product Manager and Chief of Staff currently living in Seattle, WA. Outside of work, you'll likely find me dabbling in the kitchen, reading, taking photographs, sailing, or playing with my newborn daughter. I'm challenging myself to write more about the things I've learned, the books I've read, and the latest dishes I've cooked, so please feel free to check out my blog!",
  imageSrc: '/images/profile-placeholder.svg',
};
