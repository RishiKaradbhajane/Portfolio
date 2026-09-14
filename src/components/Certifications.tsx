"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Shield, CheckCircle2 } from "lucide-react";

const CERTS = [
  {
    id: 1,
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks Academy",
    date: "Verified Credential",
    color: "#58a6ff",
    icon: "🧱",
    badge: "Official Accreditation",
    skills: ["Databricks Platform", "Lakehouse Architecture", "Delta Lake", "Apache Spark", "Data Engineering"],
    link: "https://credentials.databricks.com/289f2475-6809-403f-a099-e0fb8c7a7e8e#acc.5R1ilude",
    credentialId: "289f2475-6809-403f-a099-e0fb8c7a7e8e",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-white/5">
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
            <span className="text-[#3fb950] font-mono text-xs">$ ls certifications/</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6edf3] mb-3">Certifications &amp; Accreditations</h2>
          <p className="text-[#8b949e] text-sm max-w-xl">
            Official industry accreditation in Databricks and enterprise data platforms.
          </p>
        </motion.div>

        {/* Certs grid */}
        <div className="max-w-2xl">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="terminal-card overflow-hidden group border border-white/10 hover:border-[#58a6ff]/40 transition-all duration-300"
            >
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-2 flex items-center gap-1.5 text-[#6e7681] text-[11px] font-mono flex-1">
                  <Shield className="w-3.5 h-3.5 text-[#58a6ff]" />
                  databricks-accreditation.verify
                </span>
                <span className="text-[10px] font-mono text-[#3fb950] bg-[#3fb950]/10 px-2.5 py-0.5 rounded-full border border-[#3fb950]/25 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#3fb950]" />
                  Verified
                </span>
              </div>

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 bg-[#58a6ff]/10 border border-[#58a6ff]/20"
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#e6edf3] text-base font-semibold leading-snug mb-1.5">
                      {cert.name}
                    </h3>
                    <div className="flex items-center flex-wrap gap-2.5">
                      <span className="text-xs font-mono font-medium text-[#58a6ff]">
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#8b949e] font-mono">
                        <Calendar className="w-3 h-3 text-[#6e7681]" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-1 border-t border-white/5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#161b22] text-[#8b949e] border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#58a6ff] hover:text-[#79c0ff] transition-colors group-hover:underline"
                  >
                    <Award className="w-4 h-4" />
                    Verify Official Credential on Accredible
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
