"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored === "dark" : prefersDark;
    setIsDark(initial);
    document.documentElement.setAttribute("data-theme", initial ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10 border border-transparent hover:border-white/10"
      aria-label="Toggle color theme"
    >
      <span className={`transition-all duration-300 absolute ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
        <Sun className="w-4 h-4 text-[#e3b341]" />
      </span>
      <span className={`transition-all duration-300 absolute ${isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
        <Moon className="w-4 h-4 text-[#58a6ff]" />
      </span>
    </button>
  );
}
