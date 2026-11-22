import React from "react";
import { Code2 } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";
import { personalInfo } from "../data/portfolioData";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 text-center border-t border-slate-800 bg-slate-950 flex flex-col items-center gap-6 sm:gap-8 relative z-10">
      <div className="flex gap-4 sm:gap-6">
        <a
          href={personalInfo.socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 sm:p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:-translate-y-1.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={personalInfo.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 sm:p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:bg-slate-800 hover:-translate-y-1.5 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)] transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={personalInfo.socialLinks.email}
          className="p-2.5 sm:p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:bg-slate-800 hover:-translate-y-1.5 hover:shadow-[0_0_15px_rgba(234,67,53,0.2)] transition-all duration-300"
          aria-label="Email"
        >
          <Email size={20} />
        </a>
      </div>

      <p className="text-slate-400 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 group tracking-wide text-center">
        Built with React & Tailwind{" "}
        <Code2 size={15} className="text-cyan-500 group-hover:animate-spin" />{" "}
        by {personalInfo.name}
      </p>
    </footer>
  );
};
