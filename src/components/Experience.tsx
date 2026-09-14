"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, ChevronRight, MapPin, Building2, Sparkles } from "lucide-react";

type TimelineItem = {
  type: "work" | "education";
  category: "fulltime" | "internship" | "education";
  title: string;
  org: string;
  roleBadge?: string;
  location: string;
  period: string;
  current: boolean;
  summary?: string;
  description: string[];
  tags: string[];
};

const TIMELINE: TimelineItem[] = [
  {
    type: "work",
    category: "fulltime",
    title: "Data Engineer — Enterprise IAM Data Platform",
    org: "Infosys",
    roleBadge: "Client: State Street",
    location: "Bangalore, Karnataka, India",
    period: "July 2025 – Present",
    current: true,
    summary: "Working on enterprise-scale Identity & Access Management (IAM) data consolidation and analytics processing.",
    description: [
      "I work on an enterprise IAM data platform for State Street where we consolidate account and identity data from heterogeneous legacy and directory platforms.",
      "AutoSys handles upstream scheduling and file transfers, S3 provides the landing/archive layer, Airflow orchestrates processing, and Databricks performs the transformation and analytical processing.",
      "I work mainly on SQL/PySpark transformations, data quality, business-rule implementation, environment handling and pipeline troubleshooting.",
      "The resulting datasets support Power BI-based compliance reporting through PCP and identity/ownership processing through Bionics and SailPoint.",
    ],
    tags: ["PySpark", "Databricks", "Apache Airflow", "AWS S3", "SQL", "AutoSys", "SailPoint", "Power BI", "IAM Compliance"],
  },
  {
    type: "work",
    category: "internship",
    title: "Big Data Intern",
    org: "Infosys",
    roleBadge: "Internship & Technical Training",
    location: "Mysore, Karnataka, India",
    period: "Feb 2025 – Jun 2025 · 5 mos",
    current: false,
    summary: "Completed a structured internship program combining rigorous technical training with industry-grade project execution.",
    description: [
      "Underwent foundational and advanced training in Java, SQL, OOPs, DBMS, HSQL, and Data Structures.",
      "Specialized in Big Data & Business Intelligence technologies: Hands-on with PySpark for scalable data processing.",
      "Developed rich Power BI dashboards using Power Query and DAX for actionable business insights.",
      "Worked with MongoDB and Advanced MySQL for structured and semi-structured data modeling.",
      "Automated tasks using UNIX Shell Scripting and integrated multiple heterogeneous data sources.",
      "Followed the Agile development model: participated in sprint planning, reviews, and retrospectives.",
      "Executed a real-time project simulating enterprise-level data analytics scenarios with insights visualization.",
      "Gained exposure to cloud and enterprise tools used in real-world business environments with high-performing team collaboration.",
    ],
    tags: ["Java", "SQL", "PySpark", "Power BI", "DAX", "MongoDB", "MySQL", "UNIX Shell Scripting", "Agile", "HSQL"],
  }
];

const FILTER_TABS = [
  { id: "All", label: "All Journey" },
  { id: "Full-Time", label: "Full-Time", icon: Briefcase },
  { id: "Internship", label: "Internship & Training", icon: Building2 }
];

export default function Experience() {
  const [filter, setFilter] = useState("All");

  const filtered = TIMELINE.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Full-Time") return item.category === "fulltime";
    if (filter === "Internship") return item.category === "internship";
    if (filter === "Education") return item.category === "education";
    return true;
  });

  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-white/5">
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
            <span className="text-[#3fb950] font-mono text-xs">$ cat journey.log</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6edf3] mb-3">
            Experience &amp; Journey
          </h2>
          <p className="text-[#8b949e] text-sm max-w-2xl">
            From comprehensive technical training to enterprise data engineering and IAM pipelines in production.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTER_TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 border flex items-center gap-1.5 ${filter === id
                ? "bg-[#58a6ff]/15 text-[#58a6ff] border-[#58a6ff]/40 shadow-sm"
                : "text-[#8b949e] border-white/10 hover:border-white/20 hover:text-[#e6edf3] bg-transparent"
                }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#58a6ff]/40 via-[#3fb950]/30 to-transparent" />

          <div className="space-y-8">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.org}-${item.title}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12 lg:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 lg:left-3.5 top-4 w-4 h-4 rounded-full border-2 flex items-center justify-center ${item.current
                    ? "bg-[#3fb950]/20 border-[#3fb950]"
                    : item.category === "internship"
                      ? "bg-[#58a6ff]/10 border-[#58a6ff]/70"
                      : "bg-[#d2a8ff]/10 border-[#d2a8ff]/60"
                    }`}
                >
                  {item.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="terminal-card overflow-hidden">
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <div className="ml-2 flex items-center gap-1.5 flex-1">
                      {item.type === "work" ? (
                        <Briefcase className="w-3 h-3 text-[#58a6ff]" />
                      ) : (
                        <GraduationCap className="w-3 h-3 text-[#d2a8ff]" />
                      )}
                      <span className="text-[#6e7681] text-[11px] font-mono">
                        {item.category}.log
                      </span>
                    </div>
                    {item.current && (
                      <span className="text-[10px] font-mono text-[#3fb950] bg-[#3fb950]/10 px-2 py-0.5 rounded-full border border-[#3fb950]/25">
                        active · full-time
                      </span>
                    )}
                    {!item.current && item.category === "internship" && (
                      <span className="text-[10px] font-mono text-[#58a6ff] bg-[#58a6ff]/10 px-2 py-0.5 rounded-full border border-[#58a6ff]/25">
                        completed · 5 mos
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    {/* Title + org */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-[#e6edf3] font-semibold text-base leading-snug">
                          {item.title}
                        </h3>
                        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-1.5">
                          <span className="text-[#58a6ff] text-xs font-mono font-semibold">{item.org}</span>
                          {item.roleBadge && (
                            <span className="text-[11px] font-mono text-[#e3b341] bg-[#e3b341]/10 px-2 py-0.5 rounded border border-[#e3b341]/20">
                              {item.roleBadge}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-[#8b949e] text-xs">
                            <MapPin className="w-3 h-3 text-[#6e7681]" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#6e7681] text-xs font-mono shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                    </div>

                    {/* Summary badge */}
                    {item.summary && (
                      <p className="text-xs text-[#8b949e] font-sans italic mb-3 pb-2 border-b border-white/5">
                        {item.summary}
                      </p>
                    )}

                    {/* Description bullets */}
                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, di) => (
                        <li key={di} className="flex items-start gap-2.5 text-xs text-[#8b949e] leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-[#3fb950] mt-0.5 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#161b22] text-[#8b949e] text-[10px] font-mono rounded-md border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
