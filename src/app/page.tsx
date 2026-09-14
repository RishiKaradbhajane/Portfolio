"use client";

import React from "react";
import { User, Terminal } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-bg-primary relative theme-transition">
      {/* Dynamic drifting particle background */}
      <ParticleCanvas />

      {/* Screen scanline effect for VS Code terminal style */}
      <div className="noise-overlay" />

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-[80px] pt-14 lg:pt-0 pb-[64px] lg:pb-0 z-10 relative">

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 lg:py-28 relative border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Left Column - Section Title & Quick Info */}
              <div className="lg:col-span-4 text-left space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#3fb950] font-mono text-xs"># about-me.md</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#e6edf3] leading-tight">
                  About Rushikesh
                </h2>

                {/* Quick Info Grid */}
                <div className="space-y-2.5 font-mono text-xs text-[#8b949e] p-4 rounded-xl bg-[#161b22]/70 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#58a6ff]">location:</span>
                    <span className="text-[#e6edf3]">Bangalore, Karnataka, India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3fb950]">experience:</span>
                    <span className="text-[#e6edf3]">1.5+ Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#e3b341]">current_role:</span>
                    <span className="text-[#e6edf3]">Data & AI Engineer @ Infosys</span>
                  </div>
                </div>

                {/* Quick contact / status card */}
                <div className="p-4 rounded-xl bg-[#161b22]/70 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#3fb950]">
                    <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
                    Open to Opportunities
                  </div>
                  <p className="text-xs text-[#8b949e] leading-relaxed">
                    📌 Open to opportunities to contribute to innovative projects, drive business impact, and solve real-world problems through technology.
                  </p>
                </div>
              </div>

              {/* Right Column - Narrative in VS Code Editor aesthetic */}
              <div className="lg:col-span-8 text-left flex flex-col gap-6">
                <div className="terminal-card overflow-hidden">
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <span className="ml-2 text-[#6e7681] text-[11px] font-mono">profile_summary.json</span>
                  </div>
                  <div className="p-5 font-mono text-xs sm:text-sm space-y-4 text-[#8b949e] leading-relaxed">
                    <p>
                      <span className="text-[#58a6ff]">const</span> <span className="text-[#d2a8ff]">engineer</span> = &#123;
                    </p>
                    <div className="pl-4 space-y-1">
                      <div>
                        name: <span className="text-[#f78166]">"Rushikesh Karadbhajane"</span>,
                      </div>
                      <div>
                        role: <span className="text-[#f78166]">"Data & AI Engineer"</span>,
                      </div>
                      <div>
                        company: <span className="text-[#f78166]">"Infosys"</span>,
                      </div>
                      <div>
                        location: <span className="text-[#f78166]">"Bangalore, India"</span>,
                      </div>
                      <div>
                        experience: <span className="text-[#f78166]">"1.5+ Years"</span>,
                      </div>
                      <div>
                        specialization: [
                        <span className="text-[#f78166]">"PySpark"</span>,{" "}
                        <span className="text-[#f78166]">"Airflow"</span>,{" "}
                        <span className="text-[#f78166]">"Kafka"</span>,{" "}
                        <span className="text-[#f78166]">"Databricks"</span>,{" "}
                        <span className="text-[#f78166]">"AWS"</span>
                        ],
                      </div>
                      <div>
                        passion: <span className="text-[#f78166]">"Building scalable ETL pipelines &amp; real-time data systems"</span>
                      </div>
                    </div>
                    <p>&#125;;</p>

                    <div className="font-sans text-sm text-[#c9d1d9] leading-relaxed pt-3 space-y-3 border-t border-white/5">
                      <p>
                        I am a Data Engineer passionate about building scalable ETL pipelines and real-time data processing systems that drive reliable analytics and business insights 📊.
                      </p>
                      <p>
                        Currently working as a <strong className="text-[#e6edf3]">System Engineer at Infosys</strong>, I specialize in <strong className="text-[#58a6ff]">PySpark ⚡</strong>, <strong className="text-[#58a6ff]">Airflow 🔄</strong>, <strong className="text-[#58a6ff]">Kafka 🚀</strong>, <strong className="text-[#58a6ff]">Databricks 🧱</strong>, and <strong className="text-[#58a6ff]">AWS ☁️</strong>, developing end-to-end data pipelines for both batch and streaming data.
                      </p>
                      <p>
                        I have worked on real-time analytics and enterprise IAM compliance &amp; data migration projects, focusing on data transformation, workflow automation, and performance optimization.
                      </p>
                    </div>

                    {/* Driven callout */}
                    <p className="text-xs font-mono text-[#e3b341] pt-2">
                      🌟 Driven by building efficient data systems, solving real-world data challenges, and continuously improving data workflows.
                    </p>
                  </div>
                </div>

                {/* Focus areas tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Enterprise IAM &amp; Data Migration</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Consolidating account and identity data from heterogeneous legacy platforms with strict compliance standards.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Batch &amp; Streaming ETL</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Engineering scalable data pipelines with PySpark on Databricks, Apache Airflow, and Apache Kafka.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2a8ff] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Workflow Automation</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Automating upstream/downstream file transfers with AutoSys, Airflow DAGs, and UNIX Shell scripting.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f78166] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Business Intelligence &amp; Analytics</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Developing Power BI dashboards with DAX and Power Query for regulatory compliance and business metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact CTA Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
