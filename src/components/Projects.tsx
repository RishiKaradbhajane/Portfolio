"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, GitFork, Code2, ChevronRight, Tag } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    name: "Text-Summarizer-App",
    description:
      "A full-stack NLP-powered web app that condenses long articles, documents, and text into concise, meaningful summaries in seconds. Features extractive & abstractive summarization, adjustable summary length, real-time processing, and a clean responsive UI — deployed live on Vercel.",
    repo: "https://github.com/RishiKaradbhajane/Text-Summarizer-App",
    demo: "https://text-summarizer-app-sigma.vercel.app/",
    tags: ["Python", "NLP", "Flask", "JavaScript", "Vercel"],
    color: "#f7df1e",
    lang: "JavaScript",
    featured: true,
    icon: "✍️",
  },
  {
    id: 2,
    name: "DSA with Java",
    description:
      "Comprehensive Data Structures & Algorithms implementation in Java — arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming with well-commented solutions.",
    repo: "https://github.com/RishiKaradbhajane/DSAWithJAVA",
    demo: null,
    tags: ["Java", "DSA", "OOP", "Algorithms"],
    color: "#b07219",
    lang: "Java",
    featured: true,
    icon: "⚡",
  },
  {
    id: 3,
    name: "DataEngineer Portfolio",
    description:
      "This very portfolio — a modern, production-ready Next.js portfolio showcasing Data Engineering and AI skills. Built with TypeScript, Tailwind CSS v4, and Framer Motion animations.",
    repo: "https://github.com/RishiKaradbhajane/dataengineer-portfolio",
    demo: null,
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    color: "#58a6ff",
    lang: "TypeScript",
    featured: true,
    icon: "🚀",
  },
];

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  Java: "#b07219",
  TypeScript: "#2b7489",
  JavaScript: "#f7df1e",
};

const FILTERS = ["All", "Python", "Java", "TypeScript", "JavaScript"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.lang === activeFilter || p.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#3fb950] font-mono text-xs">$ ls -la ~/projects/</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6edf3] mb-3">Projects</h2>
          <p className="text-[#8b949e] text-sm max-w-xl">
            A selection of repositories — from data analysis to ML models and full-stack apps.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-150 border ${
                activeFilter === f
                  ? "bg-[#58a6ff]/15 text-[#58a6ff] border-[#58a6ff]/30"
                  : "bg-transparent text-[#8b949e] border-white/10 hover:border-white/20 hover:text-[#e6edf3]"
              }`}
            >
              {f}
              {f === "Featured" && (
                <span className="ml-1 text-[#e3b341]">★</span>
              )}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className="terminal-card overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-2 text-[#6e7681] text-[11px] font-mono flex-1 truncate">
                    {project.name.toLowerCase().replace(/ /g, "-")}.md
                  </span>
                  {project.featured && (
                    <Star className="w-3 h-3 text-[#e3b341] flex-shrink-0" />
                  )}
                </div>

                {/* Card body */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Icon + name */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.icon}</span>
                      <div>
                        <h3 className="text-[#e6edf3] text-sm font-semibold leading-tight">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ background: LANG_COLORS[project.lang] || "#58a6ff" }}
                          />
                          <span className="text-[#6e7681] text-[10px] font-mono">{project.lang}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#8b949e] text-xs leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#30363d] rounded-md text-[10px] font-mono text-[#8b949e] border border-white/5"
                      >
                        <Tag className="w-2 h-2" />
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] text-[#6e7681] font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#58a6ff] transition-colors font-mono"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      View Source
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#3fb950] transition-colors font-mono ml-3"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    <ChevronRight
                      className={`w-3.5 h-3.5 ml-auto transition-all duration-200 ${
                        hovered === project.id ? "text-[#58a6ff] translate-x-1" : "text-[#6e7681]"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/RishiKaradbhajane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/15 hover:border-[#58a6ff]/40 text-[#8b949e] hover:text-[#58a6ff] text-sm font-mono rounded-lg transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            View all repositories on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
