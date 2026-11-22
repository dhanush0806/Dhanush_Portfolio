import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import { SpotlightCard } from './SpotlightCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ProjectCard = ({ title, description, tags, github, demo, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(delay);
  const hasLiveDemo = demo && demo !== '#';

  return (
    <div ref={ref} className={`reveal-smooth h-full ${isVisible ? 'visible' : ''}`}>
      <SpotlightCard className="h-full flex flex-col group hover:-translate-y-2">
        <div className="flex justify-between items-start mb-6 sm:mb-8">
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-lg">
            <Terminal size={22} />
          </div>
          <div className="flex gap-2.5 sm:gap-3">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300" 
                aria-label="GitHub Repository"
                title="View Source on GitHub"
              >
                <Github size={17} />
              </a>
            )}
            {hasLiveDemo ? (
              <a 
                href={demo} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300" 
                aria-label="Live Demo"
                title="View Live Demo"
              >
                <ExternalLink size={17} />
              </a>
            ) : (
              <span 
                className="p-2 sm:p-2.5 rounded-full bg-slate-800/20 border border-slate-800/60 text-slate-600 cursor-not-allowed" 
                title="Live Demo Coming Soon"
                aria-label="Demo Not Available"
              >
                <ExternalLink size={17} />
              </span>
            )}
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight group-hover:text-cyan-300 transition-colors duration-300">{title}</h3>
        
        <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed sm:leading-[1.8] font-light mb-6 sm:mb-8 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto pt-5 sm:pt-6 border-t border-slate-800 group-hover:border-slate-700 transition-colors duration-300">
          {tags.map(tag => (
            <span key={tag} className="text-[11px] sm:text-xs font-mono font-semibold text-cyan-400/90 bg-cyan-500/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </div>
  );
};
