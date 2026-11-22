import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <SectionHeader title="Featured Projects" icon={<Briefcase size={26} />} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              demo={project.demo} 
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
