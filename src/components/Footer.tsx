"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white/5 bg-bg-primary z-10 relative theme-transition">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-xs text-text-secondary font-mono">
          &copy; {new Date().getFullYear()} Rushikesh Karadbhajane. Built with Next.js &amp; Tailwind.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-[#58a6ff] transition-colors duration-200 group"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}
