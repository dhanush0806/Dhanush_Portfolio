import React from 'react';
import { Terminal, Code2, Layout, Database, Cpu } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCategory } from '../components/SkillCategory';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo, skillCategories } from '../data/portfolioData';

const iconMap = {
  layout: <Layout size={22} className="text-blue-400" />,
  database: <Database size={22} className="text-emerald-400" />,
  terminal: <Terminal size={22} className="text-purple-400" />,
  cpu: <Cpu size={22} className="text-amber-400" />
};

const RevealText = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(delay);
  return (
    <p ref={ref} className={`reveal-smooth text-slate-300 text-base sm:text-lg leading-[1.8] font-light ${isVisible ? 'visible' : ''}`}>
      {children}
    </p>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-slate-900/30 border-y border-slate-800/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: About Paragraphs */}
          <div className="lg:col-span-2 space-y-8">
            <SectionHeader title="About Me" icon={<Terminal size={28} />} />
            
            <div className="space-y-6">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <RevealText key={index} delay={(index + 1) * 100}>
                  {paragraph}
                </RevealText>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Grid */}
          <div id="skills" className="lg:col-span-3 space-y-8 sm:space-y-10">
            <SectionHeader title="Technical Arsenal" icon={<Code2 size={28} />} delay={200} />
            
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {skillCategories.map((cat) => (
                <SkillCategory 
                  key={cat.title}
                  title={cat.title} 
                  icon={iconMap[cat.iconType] || <Code2 size={22} className="text-cyan-400" />}
                  skills={cat.skills}
                  delay={cat.delay}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
