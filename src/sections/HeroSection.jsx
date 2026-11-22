import React, { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Briefcase,
  Layers,
  FileText,
  Eye,
  Download,
} from "lucide-react";
import { Github, Linkedin, Email } from "../components/BrandIcons";
import { personalInfo, coreStack } from "../data/portfolioData";
import heroImage from "../assets/hero2.png";

export const HeroSection = ({ heroVisible, scrollTo }) => {
  const [imgError, setImgError] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-2 sm:pt-6 pb-12 px-4 sm:px-6 relative -mt-4 sm:-mt-6"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* Left Column: Photo + Professional Info */}
        <div
          className={`lg:col-span-5 flex flex-row items-center gap-4 lg:flex-col lg:gap-5 transition-all duration-1000 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Round Profile Picture */}
          <div className="relative group">
            {/* Ambient Cyan Glow */}
            <div className="absolute inset-0 bg-cyan-500/25 rounded-full blur-2xl group-hover:bg-cyan-400/35 transition-all duration-500 animate-pulse pointer-events-none -z-10" />

            {/* Circular Profile Frame */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-cyan-500/40 bg-slate-900 shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400">
              {!imgError ? (
                <img
                  src={heroImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-500 text-4xl font-bold font-mono">
                  DK
                </div>
              )}

              {/* Bottom subtle dark vignette */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Details below Photo */}
          <div className="flex flex-col items-start text-left space-y-2 pt-1 flex-1 min-w-0 lg:items-center lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h2>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-bold text-cyan-400 font-mono">
              <Briefcase size={16} className="text-cyan-400 shrink-0" />
              <span>{personalInfo.role}</span>
            </div>

            <div className="flex items-center justify-center">
              <span className="px-3 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-cyan-300 text-xs sm:text-sm font-mono font-medium tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            <div className="pt-0.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Open to Work</span>
                <span className="text-emerald-500/60 font-bold">|</span>
                <span>Immediate Joiner</span>
              </span>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono text-slate-300 pt-0.5">
              <MapPin size={14} className="text-cyan-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Intro, Core Stack & Actions */}
        <div
          className={`lg:col-span-7 space-y-6 sm:space-y-7 transition-all duration-1000 delay-200 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-3">
            <h1 className="hidden sm:block text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              {personalInfo.headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-[1.8] font-light">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Stack Strip */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="p-1 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center">
                <Layers size={13} />
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-200 font-bold">
                Core Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/70 text-sm font-bold text-white shadow-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons & Social Icons */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={() => scrollTo("projects")}
              className="px-7 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group tracking-wide cursor-pointer text-xs sm:text-sm"
            >
              <span>View Work</span>
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>

            {/* Resume Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResumeDropdownOpen(true)}
              onMouseLeave={() => setResumeDropdownOpen(false)}
            >
              <button
                onClick={() => setResumeDropdownOpen((prev) => !prev)}
                className="px-7 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 tracking-wide cursor-pointer text-xs sm:text-sm"
              >
                <FileText size={16} />
                <span>Resume</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-300 ${
                    resumeDropdownOpen ? "translate-x-1" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-0 left-full pl-3 w-40 z-50 transition-all duration-200 ${
                  resumeDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-xl p-2">
                  <a
                    href={personalInfo.resume.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                  >
                    <Eye size={16} />
                    View
                  </a>

                  <a
                    href={personalInfo.resume.downloadUrl}
                    download={personalInfo.resume.downloadFilename}
                    onClick={() => setResumeDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 sm:pl-3 sm:border-l sm:border-slate-800">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>

              <a
                href={personalInfo.socialLinks.email}
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                aria-label="Email"
              >
                <Email size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
