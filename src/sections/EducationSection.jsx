import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';
import { educationList } from '../data/portfolioData';

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <SectionHeader title="Education" icon={<GraduationCap size={26} />} />

        <div className="relative border-l-2 border-cyan-500/30 ml-2 sm:ml-4 md:ml-6 space-y-10 sm:space-y-12 pb-4">
          {educationList.map((item) => (
            <TimelineItem
              key={item.title}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              isActive={item.isActive}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
