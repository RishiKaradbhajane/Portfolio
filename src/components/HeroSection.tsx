"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Terminal, ChevronRight, Cpu } from "lucide-react";

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

const TYPING_STRINGS = [
  "Data Engineer",
  "AI/ML Engineer",
  "Big Data Engineer"
];

function TypingText() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      delay = 1800;
    } else if (isDeleting && charIndex === 0) {
      delay = 300;
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  return (
    <span className="text-[#58a6ff] font-mono">
      {displayText}
      <span className="animate-[blink_1s_step-end_infinite] text-[#58a6ff]">|</span>
    </span>
  );
}

const TERMINAL_LINES = [
  { line: 1, prompt: "~", cmd: "whoami", output: "rushikesh-karadbhajane" },
  { line: 2, prompt: "~", cmd: "cat skills.txt", output: "PySpark · Python · AI/ML · Big Data · Airflow · Kafka · Databricks · AWS · SQL · Java " },
  { line: 3, prompt: "~", cmd: "echo $CURRENT_ROLE", output: "Data Engineer @ Infosys | Bangalore, India (1.5+ Yrs Exp)" },
];

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= TERMINAL_LINES.length * 2) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(88,166,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(88,166,255,0.08) 0%, rgba(63,185,80,0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Intro Text ── */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3fb950]/10 border border-[#3fb950]/25 text-[#3fb950] text-xs font-mono mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
              Available for opportunities · Bangalore, India
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e6edf3] leading-tight">
                Rushikesh
                <br />
                <span className="gradient-text">Karadbhajane</span>
              </h1>
            </motion.div>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 mt-4 mb-6 text-xl sm:text-2xl font-medium text-[#8b949e]"
            >
              <span className="font-mono text-[#6e7681]">{">"}</span>
              <TypingText />
            </motion.div>

            {/* Short tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-[#8b949e] text-base leading-relaxed max-w-lg mb-8"
            >
              AI & Data Engineer building scalable data pipelines and intelligent AI applications. Skilled in PySpark, Airflow, Databricks, AWS, Machine Learning, Generative AI, RAG, Vector Databases, and Agentic AI. Focused on building scalable, production-ready data and AI solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="mailto:rushikeshrkaradbhajane@gmail.com"
                id="hero-contact-btn"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#58a6ff]/20"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="https://github.com/RishiKaradbhajane"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-white/5 text-[#e6edf3] text-sm font-semibold rounded-lg border border-white/15 hover:border-white/30 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rushikesh-karadbhjane/"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#58a6ff]/5 text-[#58a6ff] text-sm font-semibold rounded-lg border border-[#58a6ff]/25 hover:border-[#58a6ff]/50 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download
                id="hero-resume-btn"
                className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#3fb950]/10 text-[#3fb950] text-sm font-semibold rounded-lg border border-[#3fb950]/25 hover:border-[#3fb950]/50 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-6 text-sm"
            >
            </motion.div>
          </div>

          {/* ── Right Column — Profile Photo & Floating Badges (Hitanshu Portfolio Style) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="order-1 lg:order-2 flex flex-col items-center justify-center relative py-6"
          >
            {/* Ambient Backlight Glow */}
            <div
              className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full pointer-events-none opacity-40 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(88,166,255,0.4) 0%, rgba(63,185,80,0.2) 50%, transparent 70%)",
              }}
            />

            {/* Photo Circular Container with Glowing Ring */}
            <div className="relative group z-10 my-4">
              {/* Outer Orbital Glow Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#58a6ff] via-[#3fb950] to-[#d2a8ff] opacity-40 blur-md group-hover:opacity-75 transition duration-500 animate-pulse" />

              {/* Photo Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-white/20 bg-[#161b22] shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Rushikesh Karadbhajane"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Tech Badges orbiting around photo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute -top-2 -left-2 bg-[#161b22]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-[#58a6ff] shadow-lg"
              >
                PySpark ⚡
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 -right-4 bg-[#161b22]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-[#3fb950] shadow-lg"
              >
                AI & ML 🤖
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 -left-4 bg-[#161b22]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-[#d2a8ff] shadow-lg"
              >
                RAG 🧠
              </motion.div>
            </div>

            {/* Quick Terminal Snippet below photo */}
            <div className="w-full max-w-sm mt-4 terminal-card overflow-hidden text-xs font-mono">
              <div className="terminal-header py-1.5 px-3">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-[#6e7681] text-[10px]">rushikesh@infosys ~ bash</span>
              </div>
              <div className="p-3 space-y-1 text-[#8b949e]">
                <div className="flex gap-2">
                  <span className="text-[#3fb950]">$</span>
                  <span className="text-[#e6edf3]">echo $CURRENT_ROLE</span>
                </div>
                <div className="text-[#58a6ff] pl-4">Data & AI Engineer @ Infosys</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6e7681] text-xs"
      >
        <span>scroll</span>
        <ChevronRight className="w-4 h-4 rotate-90 animate-bounce" />
      </motion.div>
    </section>
  );
}
