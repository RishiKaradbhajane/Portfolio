"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import {
  LayoutDashboard, User, Code2, Briefcase, Award, Mail,
  Menu, X, Terminal,
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NAV_ITEMS = [
  { id: "hero",           label: "Home",           icon: LayoutDashboard,  shortcut: "01" },
  { id: "about",          label: "About",          icon: User,             shortcut: "02" },
  { id: "tech",           label: "Tech Stack",     icon: Code2,            shortcut: "03" },
  { id: "projects",       label: "Projects",       icon: Terminal,         shortcut: "04" },
  { id: "experience",     label: "Experience",     icon: Briefcase,        shortcut: "05" },
  { id: "certifications", label: "Certs",          icon: Award,            shortcut: "06" },
  { id: "contact",        label: "Contact",        icon: Mail,             shortcut: "07" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.current?.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="fixed left-0 top-0 bottom-0 w-[80px] z-50 hidden lg:flex flex-col items-center justify-between py-6 border-r border-white/5 bg-[#0d1117]/95 backdrop-blur-md theme-transition">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center justify-center w-10 h-10 rounded-lg bg-[#58a6ff]/10 border border-[#58a6ff]/20 hover:bg-[#58a6ff]/20 transition-all duration-200"
          title="Rushikesh Karadbhajane"
        >
          <span className="text-[#58a6ff] text-sm font-bold font-mono">RK</span>
        </button>

        {/* Nav Items */}
        <nav className="flex flex-col items-center gap-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                title={label}
                className={`group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
                  ${isActive
                    ? "bg-[#58a6ff]/15 text-[#58a6ff] border border-[#58a6ff]/30"
                    : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 border border-transparent"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {/* Tooltip */}
                <span className="absolute left-14 bg-[#1c2128] text-[#e6edf3] text-xs px-2 py-1 rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                  {label}
                </span>
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute -right-1 w-0.5 h-4 bg-[#58a6ff] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom: Social + Theme */}
        <div className="flex flex-col items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/RishiKaradbhajane"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rushikesh-karadbhjane/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8b949e] hover:text-[#58a6ff] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-200 ${scrolled ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-md bg-[#58a6ff]/10 border border-[#58a6ff]/20 flex items-center justify-center text-[#58a6ff] text-xs font-bold font-mono">RK</span>
          <span className="text-sm font-semibold text-[#e6edf3]">Rushikesh</span>
        </button>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 border border-white/10 transition-all"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <nav className="absolute top-16 left-4 right-4 bg-[#1c2128] border border-white/10 rounded-xl p-4 flex flex-col gap-1">
            {NAV_ITEMS.map(({ id, label, icon: Icon, shortcut }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  active === id
                    ? "bg-[#58a6ff]/15 text-[#58a6ff] border border-[#58a6ff]/25"
                    : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1 text-left">{label}</span>
                <span className="text-xs text-[#6e7681] font-mono">{shortcut}</span>
              </button>
            ))}
            <div className="flex gap-3 mt-2 pt-3 border-t border-white/5">
              <a href="https://github.com/RishiKaradbhajane" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 transition-all">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rushikesh-karadbhjane/" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm text-[#8b949e] hover:text-[#58a6ff] hover:bg-white/5 transition-all">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
