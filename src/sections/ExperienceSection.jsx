import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';
import { workExperience } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/30 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <SectionHeader title="Work Experience" icon={<Briefcase size={26} />} />
        
        <div className="relative border-l-2 border-cyan-500/30 ml-2 sm:ml-4 md:ml-6 space-y-10 sm:space-y-12 pb-4">
          {workExperience.map((item) => (
            <TimelineItem
              key={item.title}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              description={
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              }
              isActive={item.isActive}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
