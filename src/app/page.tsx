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
        <section id="about" className="py-16 lg:py-20 relative border-t border-white/5">
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
                        <span className="text-[#f78166]">"Data Engineering"</span>,{" "}
                        <span className="text-[#f78166]">"AI/ML"</span>,{" "}
                        <span className="text-[#f78166]">"RAG"</span>,{" "}
                        <span className="text-[#f78166]">"Agentic AI"</span>,{" "}
                        <span className="text-[#f78166]">"AWS"</span>
                        ],
                      </div>
                      <div>
                        passion: <span className="text-[#f78166]">"Building scalable data pipelines & intelligent AI systems"</span>
                      </div>
                    </div>
                    <p>&#125;;</p>

                    <div className="font-sans text-sm text-[#c9d1d9] leading-relaxed pt-3 space-y-3 border-t border-white/5">
                      <p>
                        AI & Data Engineer passionate about building scalable data systems and intelligent AI solutions. 🚀
                      </p>
                      <p>
                        I specialize in PySpark ⚡, Airflow 🔄, Databricks 🧱, AWS ☁️, SQL 🗄️, Machine Learning 🤖, Generative AI ✨, RAG 🔎, Vector Databases 🧠, and Agentic AI 🕸️, building end-to-end data and AI solutions.
                      </p>
                      <p>
                        Experienced in real-time data processing 📡, data migration 🔁, IAM analytics 🔐, workflow automation ⚙️, and performance optimization 📈.
                      </p>
                    </div>

                    {/* Driven callout */}
                    <p className="text-xs font-mono text-[#e3b341] pt-2">
                      🌟 Driven by solving real-world problems and building reliable, scalable, and intelligent systems that turn data into meaningful impact. 📊💡
                    </p>
                  </div>
                </div>

                {/* Focus areas tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Data Engineering</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Scalable batch & streaming pipelines with PySpark, Databricks, Airflow, Kafka & SQL
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Enterprise & IAM Automation</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Automating data ingestion, migration and workflows with Python, AutoSys, Airflow & AWS.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2a8ff] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">AI & Gen AI</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Building intelligent solutions with ML, GenAI, RAG, vector databases & Agentic AI.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161b22]/50 border border-white/5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f78166] mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#e6edf3] mb-1 font-mono">Cloud & Data Platform</h4>
                      <p className="text-xs text-[#8b949e] leading-normal">
                        Designing scalable data solutions using AWS, Databricks & modern lakehouse architectures.
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
