"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Brain, Code2, Cloud, BarChart3, GitBranch, Terminal as TerminalIcon } from "lucide-react";

const TECH_CATEGORIES = [
  {
    category: "Data Engineering & Streaming",
    icon: Database,
    color: "#58a6ff",
    skills: [
      { name: "PySpark", highlight: true },
      { name: "Apache Airflow", highlight: true },
      { name: "Apache Kafka", highlight: true },
      { name: "Databricks", highlight: true },
      { name: "ETL / ELT Pipelines", highlight: false },
      { name: "Batch & Streaming Data", highlight: false },
    ],
  },
  {
    category: "AI, ML & Analytics",
    icon: Brain,
    color: "#d2a8ff",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "Natural Language Processing", highlight: true },
      { name: "Deep Learning", highlight: true },
      { name: "RAG Systems", highlight: true },
      { name: "Data Science", highlight: true },
    ],
  },
  {
    category: "Databases & Storage",
    icon: BarChart3,
    color: "#3fb950",
    skills: [
      { name: "SQL / MySQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "AWS S3", highlight: true },
      { name: "Data Modeling", highlight: true },
    ],
  },
  {
    category: "Programming & Fundamentals",
    icon: Code2,
    color: "#f78166",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "UNIX Shell Scripting", highlight: true },
      { name: "OOPs & Design", highlight: false },
      { name: "DBMS Concepts", highlight: false },
      { name: "Data Structures", highlight: false },
    ],
  },
  {
    category: "Cloud, BI & Enterprise Tools",
    icon: Cloud,
    color: "#79c0ff",
    skills: [
      { name: "AWS", highlight: true },
      { name: "Microsoft Graph API", highlight: true },
      { name: "Power BI (DAX, Power Query)", highlight: true },
      { name: "AutoSys", highlight: true },
      { name: "SailPoint / IAM Platforms", highlight: false },
      { name: "Docker", highlight: false },
      { name: "Linux Administration", highlight: false },
    ],
  },
  {
    category: "Version Control & Agile",
    icon: GitBranch,
    color: "#e3b341",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Agile / Scrum Sprints", highlight: true },
      { name: "CI / CD Pipelines", highlight: false },
      { name: "Sprint Planning & Reviews", highlight: false }
    ],
  },
];

const CORE_SKILL_TAGS = [
  { label: "Python 🐍", dot: "#3572A5" },
  { label: "AI & ML 🧠", dot: "#a53535ff" },
  { label: "SQL 🗄", dot: "#3775a8ff" },
  { label: "Java", dot: "#b07219" },
  { label: "PySpark ⚡", dot: "#E25A1C" },
  { label: "Kafka 🚀", dot: "#58a6ff" },
  { label: "Airflow 🔄", dot: "#017CEE" },
  { label: "Databricks 🧱", dot: "#FF3621" },
  { label: "AWS ☁️", dot: "#FF9900" },
  { label: "MongoDB", dot: "#47A248" },
  { label: "Linux 🐧", dot: "#89e051" },
  { label: "Power BI 📊", dot: "#F2C811" },
  { label: "AutoSys", dot: "#79c0ff" },
  { label: "SailPoint", dot: "#0070AD" },
  { label: "Git", dot: "#F05032" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#3fb950] font-mono text-xs"># tech-stack.sh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6edf3] mb-3">
            Tech Stack &amp; Skills
          </h2>
        </motion.div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 mb-12"
        >
          {CORE_SKILL_TAGS.map(({ label, dot }) => (
            <span
              key={label}
              className="tech-badge cursor-default hover:scale-105 transition-transform"
              style={{ borderColor: `${dot}35`, color: "#e6edf3" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: dot }} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CATEGORIES.map(({ category, icon: Icon, color, skills }, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="terminal-card overflow-hidden flex flex-col"
            >
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <div className="ml-2 flex items-center gap-2 flex-1">
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                  <span className="text-[#6e7681] text-[11px] font-mono">{category}</span>
                </div>
              </div>

              {/* Skills as chips */}
              <div className="p-4 flex-1 flex flex-wrap gap-2 items-start content-start">
                {skills.map(({ name, highlight }) => (
                  <div
                    key={name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border flex items-center gap-2 ${highlight
                      ? "bg-[#161b22] text-[#e6edf3] border-white/15 hover:border-white/30 shadow-sm"
                      : "bg-[#0d1117]/60 text-[#8b949e] border-white/5 hover:text-[#e6edf3] hover:border-white/15"
                      }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: highlight ? color : "#6e7681" }}
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
