"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Terminal, Database, Cpu, HardDrive } from "lucide-react";

export default function Skills() {
    const layers = [
        {
            id: "layer-4",
            title: "Layer 4: Systems & DevOps",
            icon: <HardDrive className="w-5 h-5 text-[#3b82f6]" />,
            items: [...skills.systems, ...skills.devops],
            width: "w-full",
            delay: 0.1
        },
        {
            id: "layer-3",
            title: "Layer 3: AI & Machine Learning",
            icon: <Cpu className="w-5 h-5 text-[#3b82f6]" />,
            items: skills.ai_ml,
            width: "w-[95%] mx-auto",
            delay: 0.2
        },
        {
            id: "layer-2",
            title: "Layer 2: Backend Engineering & Databases",
            icon: <Database className="w-5 h-5 text-[#3b82f6]" />,
            items: [...skills.backend, ...skills.databases],
            width: "w-[90%] mx-auto",
            delay: 0.3
        },
        {
            id: "layer-1",
            title: "Layer 1: Programming & Frontend",
            icon: <Terminal className="w-5 h-5 text-[#3b82f6]" />,
            items: [...skills.languages, ...skills.frontend],
            width: "w-[85%] mx-auto",
            delay: 0.4
        },
    ];

    return (
        <div className="flex flex-col gap-4 pb-10 max-w-5xl mx-auto">
            {layers.map((layer) => (
                <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: layer.delay, duration: 0.6, ease: "easeOut" }}
                    className={`relative p-6 overflow-hidden bg-[#0f0f14]/80 border border-[#1e3a8a]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-500 group ${layer.width}`}
                >
                    {/* Architectural Structure Lines */}
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-[#1e3a8a]/50 group-hover:bg-[#3b82f6] transition-colors duration-500" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-[#1e3a8a]/50 group-hover:bg-[#3b82f6] transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#1e3a8a]/50 via-[#3b82f6]/20 to-[#1e3a8a]/50 group-hover:via-[#3b82f6]/50 transition-colors" />

                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                        {/* Layer Title */}
                        <div className="flex items-center gap-3 md:w-1/3 border-b md:border-b-0 md:border-r border-[#1e3a8a]/30 pb-4 md:pb-0 md:pr-4">
                            {layer.icon}
                            <h3 className="text-[#e0e7ff] tracking-widest uppercase font-mono text-sm font-medium">
                                {layer.title}
                            </h3>
                        </div>

                        {/* Layer Items */}
                        <div className="flex flex-wrap gap-2 md:w-2/3">
                            {layer.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-[#1e2029] border border-[#1e3a8a]/40 text-[#d1d5db] font-mono text-xs hover:text-white hover:border-[#3b82f6] transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
