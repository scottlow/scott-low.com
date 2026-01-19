export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

interface ResumeTimelineProps {
  items: TimelineItem[];
}

export default function ResumeTimeline({ items }: ResumeTimelineProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center sm:text-left">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-200 via-accent-300 to-accent-200" />

          {/* Timeline items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <div key={item.id} className="relative pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-white shadow-sm" />

                {/* Content card */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.role}
                      </h3>
                      <p className="text-accent-600 font-medium">
                        {item.company}
                        {item.location && (
                          <span className="text-gray-500 font-normal">
                            {' '}&middot; {item.location}
                          </span>
                        )}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap">
                      {item.startDate} &ndash; {item.endDate}
                    </p>
                  </div>

                  {item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-gray-600 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-accent-400 mt-1.5 flex-shrink-0">
                            <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
