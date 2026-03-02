"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
    const keywords = [
        { text: "Microservices", x: "10%", y: "20%" },
        { text: "Event-Driven Architecture", x: "70%", y: "15%" },
        { text: "Real-Time Systems", x: "80%", y: "70%" },
        { text: "Distributed Systems", x: "15%", y: "80%" },
        { text: "Multilingual AI", x: "40%", y: "90%" },
        { text: "Scalable Pipelines", x: "50%", y: "10%" },
    ];

    return (
        <div className="relative min-h-[50vh] flex items-center bg-[#0f0f14] overflow-hidden rounded-md border border-[#1e3a8a]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

            {/* Blueprint Diagram Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]">
                {/* Simulated Nodes & Connections Background */}
                <svg width="100%" height="100%" className="absolute inset-0">
                    <circle cx="20%" cy="30%" r="4" fill="#3b82f6" />
                    <circle cx="80%" cy="50%" r="6" fill="#1e3a8a" />
                    <circle cx="60%" cy="80%" r="4" fill="#3b82f6" />
                    <circle cx="30%" cy="70%" r="5" fill="#1e3a8a" />
                    <line x1="20%" y1="30%" x2="80%" y2="50%" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="80%" y1="50%" x2="60%" y2="80%" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="60%" y1="80%" x2="30%" y2="70%" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="30%" y1="70%" x2="20%" y2="30%" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
            </div>

            {/* Floating Keywords Layer */}
            {keywords.map((kw, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 5 + i * 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute z-0 pointer-events-none text-[#3b82f6] font-mono text-xs uppercase whitespace-nowrap"
                    style={{ left: kw.x, top: kw.y }}
                >
                    {kw.text}
                </motion.div>
            ))}

            {/* Content Layer */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto backdrop-blur-[2px]">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#1e2029] border border-[#1e3a8a]/50 text-[#9ca3af] font-mono text-xs uppercase tracking-widest">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>System Specifications</span>
                </div>

                <p className="text-xl md:text-2xl text-[#d1d5db] font-light leading-relaxed mb-6">
                    I engineer backend systems and intelligent pipelines designed to operate at scale. Focusing on bridging academic machine learning concepts with robust, fault-tolerant distributed environments.
                </p>

                <p className="text-base md:text-lg text-[#9ca3af] font-light leading-relaxed border-l-2 border-[#1e3a8a] pl-4">
                    My expertise lies extensively in building multi-service ecosystems, configuring strict observability, and orchestrating deployment modules that remain available, responsive, and secure under high-traffic loads.
                </p>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-sm tracking-widest text-[#9ca3af] uppercase">
                    <div>
                        <div className="text-[#3b82f6] font-bold">Node.js / Java</div>
                        <div className="text-[10px] mt-1">Core Engines</div>
                    </div>
                    <div>
                        <div className="text-[#3b82f6] font-bold">PyTorch / LLMs</div>
                        <div className="text-[10px] mt-1">AI Modules</div>
                    </div>
                    <div>
                        <div className="text-[#3b82f6] font-bold">AWS / Docker</div>
                        <div className="text-[10px] mt-1">Infrastructure</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
