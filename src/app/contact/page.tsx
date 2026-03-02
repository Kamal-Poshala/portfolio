"use client";

import { motion } from "framer-motion";
import { Terminal, Send, Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("init");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f14] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <div className="mb-10">
          <h1 className="text-3xl font-light text-white uppercase tracking-wider mb-2 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-[#3b82f6]" />
            Initialize Communication
          </h1>
          <p className="text-[#9ca3af] font-mono text-sm border-l-2 border-[#1e3a8a] pl-3">
            System ready. Awaiting user input parameters for direct contact protocol.
          </p>
        </div>

        {/* Minimal Terminal Interface Container */}
        <div className="bg-[#0a0a0f] border border-[#1e3a8a]/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden flex flex-col md:flex-row">

          {/* Left side: Information */}
          <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-[#1e3a8a]/30 bg-[#0f0f14]/50 flex flex-col justify-between relative">
            <div>
              <p className="text-xs font-mono text-[#3b82f6] uppercase tracking-widest mb-6">
                                // Secure Channels
              </p>
              <div className="space-y-6">
                <a href="mailto:kamalposhala.cs@gmail.com" className="group flex items-center gap-4 text-[#d1d5db] hover:text-white transition-colors">
                  <div className="p-2 bg-[#1e2029] border border-[#1e3a8a]/50 group-hover:border-[#3b82f6]">
                    <Mail className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-[#9ca3af]">Protocol: SMTP</span>
                    <span className="font-light text-sm">kamalposhala.cs@gmail.com</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/kamal-poshala-6431611a7/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-[#d1d5db] hover:text-white transition-colors">
                  <div className="p-2 bg-[#1e2029] border border-[#1e3a8a]/50 group-hover:border-[#3b82f6]">
                    <Linkedin className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-[#9ca3af]">Protocol: LinkedIn</span>
                    <span className="font-light text-sm">Kamal Poshala</span>
                  </div>
                </a>
                <a href="https://github.com/Kamal-Poshala" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-[#d1d5db] hover:text-white transition-colors">
                  <div className="p-2 bg-[#1e2029] border border-[#1e3a8a]/50 group-hover:border-[#3b82f6]">
                    <Github className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-[#9ca3af]">Protocol: GitHub</span>
                    <span className="font-light text-sm">Kamal-Poshala</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <div className="w-full h-[1px] bg-[#1e3a8a]/30 mb-4" />
              <p className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-widest">Status: Monitoring Port 443</p>
              <p className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-widest mt-1">Location: Norman, OK Node</p>
            </div>
          </div>

          {/* Right side: Clean Form */}
          <div className="w-full md:w-3/5 p-8 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#9ca3af] uppercase tracking-widest flex gap-2">
                  <span className="text-[#3b82f6]">&gt;</span> target_name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#1e2029]/50 border-b border-[#1e3a8a] text-white font-mono text-sm p-3 py-2 outline-none focus:border-[#3b82f6] transition-colors focus:bg-[#1e2029]"
                  placeholder="Enter string value..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#9ca3af] uppercase tracking-widest flex gap-2">
                  <span className="text-[#3b82f6]">&gt;</span> return_address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#1e2029]/50 border-b border-[#1e3a8a] text-white font-mono text-sm p-3 py-2 outline-none focus:border-[#3b82f6] transition-colors focus:bg-[#1e2029]"
                  placeholder="Enter valid email..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#9ca3af] uppercase tracking-widest flex gap-2">
                  <span className="text-[#3b82f6]">&gt;</span> payload
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-[#1e2029]/50 border-b border-[#1e3a8a] text-white font-mono text-sm p-3 py-2 outline-none focus:border-[#3b82f6] transition-colors focus:bg-[#1e2029] resize-none"
                  placeholder="Enter encrypted message body..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="mt-4 flex items-center justify-center gap-3 w-full border border-[#1e3a8a]/50 bg-[#0f0f14] hover:bg-[#1e3a8a]/20 text-white font-mono uppercase text-sm tracking-widest py-3 transition-colors disabled:opacity-50"
              >
                {status === "init" && <><Send className="w-4 h-4 text-[#3b82f6]" /> Execute Transmit</>}
                {status === "sending" && <span className="animate-pulse">Transmitting...</span>}
                {status === "success" && <span className="text-emerald-400">Payload Delivered</span>}
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
