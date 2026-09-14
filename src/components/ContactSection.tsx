"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Terminal, Send, MessageSquare } from "lucide-react";

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

const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "rushikeshrkaradbhajane@gmail.com",
    href: "mailto:rushikeshrkaradbhajane@gmail.com",
    icon: Mail,
    color: "#f78166",
    copyable: true,
    description: "Best way to reach me — I respond within 24 hours.",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/RishiKaradbhajane",
    href: "https://github.com/RishiKaradbhajane",
    icon: GithubIcon,
    color: "#e6edf3",
    copyable: false,
    description: "Check out my open-source projects and code.",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/rushikesh-karadbhjane",
    href: "https://www.linkedin.com/in/rushikesh-karadbhjane/",
    icon: LinkedinIcon,
    color: "#58a6ff",
    copyable: false,
    description: "Connect professionally — open to opportunities.",
  },
];

const TERMINAL_CONTACT = [
  { cmd: "send --to rushikesh", out: "Connection established ✓" },
  { cmd: "status --availability", out: "Available for opportunities" },
  { cmd: "echo $RESPONSE_TIME", out: "< 24 hours" },
];

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form content
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:rushikeshrkaradbhajane@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-white/5">
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
            <span className="text-[#3fb950] font-mono text-xs">$ ping rushikesh --message</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e6edf3] mb-3">Get In Touch</h2>
          <p className="text-[#8b949e] text-sm max-w-xl">
            Open to data engineering roles, AI/ML collaborations, freelance work, and open-source contributions.
            Let's build something together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — Contact methods */}
          <div className="space-y-4">
            {CONTACT_LINKS.map(({ id, label, value, href, icon: Icon, color, copyable, description }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="terminal-card overflow-hidden"
              >
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-2 text-[#6e7681] text-[11px] font-mono">{label.toLowerCase()}.sh</span>
                </div>
                <div className="p-4 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#6e7681] text-[10px] font-mono mb-0.5">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-[#e6edf3] text-sm font-mono hover:underline block truncate"
                      style={{ color }}
                    >
                      {value}
                    </a>
                    <p className="text-[#6e7681] text-[11px] mt-1">{description}</p>
                  </div>
                  {copyable && (
                    <button
                      onClick={() => copyToClipboard(value, id)}
                      className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-[#6e7681] hover:text-[#e6edf3] hover:bg-white/5 transition-all border border-white/5"
                      title="Copy"
                    >
                      {copied === id
                        ? <Check className="w-3.5 h-3.5 text-[#3fb950]" />
                        : <Copy className="w-3.5 h-3.5" />
                      }
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="terminal-card overflow-hidden"
            >
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-[#6e7681] text-[11px] font-mono">status.sh</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-2">
                {TERMINAL_CONTACT.map(({ cmd, out }) => (
                  <div key={cmd}>
                    <div className="flex gap-2">
                      <span className="text-[#3fb950]">$</span>
                      <span className="text-[#e6edf3]">{cmd}</span>
                    </div>
                    <div className="text-[#8b949e] pl-4">{out}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[#3fb950]">$</span>
                  <span className="w-2 h-3.5 bg-[#58a6ff] animate-[blink_1s_step-end_infinite] inline-block" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Quick message form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="terminal-card overflow-hidden"
          >
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="ml-2 text-[#6e7681] text-[11px] font-mono">compose-message.sh</span>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-[#6e7681] mb-1.5">
                  <span className="text-[#3fb950]">$</span> YOUR_NAME=
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                  className="w-full bg-[#0d1117] border border-white/10 rounded-md px-3 py-2 text-[#e6edf3] text-sm font-mono focus:outline-none focus:border-[#58a6ff]/40 transition-colors placeholder-[#6e7681]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[#6e7681] mb-1.5">
                  <span className="text-[#3fb950]">$</span> YOUR_EMAIL=
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                  className="w-full bg-[#0d1117] border border-white/10 rounded-md px-3 py-2 text-[#e6edf3] text-sm font-mono focus:outline-none focus:border-[#58a6ff]/40 transition-colors placeholder-[#6e7681]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[#6e7681] mb-1.5">
                  <span className="text-[#3fb950]">$</span> MESSAGE="""
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                  className="w-full bg-[#0d1117] border border-white/10 rounded-md px-3 py-2 text-[#e6edf3] text-sm font-mono focus:outline-none focus:border-[#58a6ff]/40 transition-colors placeholder-[#6e7681] resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                id="contact-send-btn"
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  sent
                    ? "bg-[#3fb950]/20 text-[#3fb950] border border-[#3fb950]/40"
                    : "bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117]"
                }`}
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Queued!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-[#6e7681] text-[10px] text-center font-mono">
                Opens your email client with the message pre-filled
              </p>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
