"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Monitor, Database, TerminalSquare, Cloud, Cpu, Wrench } from "lucide-react";

const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
        case "frontend": return <Monitor className="w-5 h-5 text-cyan-400" />;
        case "backend": return <Cloud className="w-5 h-5 text-purple-400" />;
        case "languages": return <TerminalSquare className="w-5 h-5 text-indigo-400" />;
        case "databases": return <Database className="w-5 h-5 text-pink-400" />;
        case "ai ml": return <Cpu className="w-5 h-5 text-blue-400" />;
        case "systems": return <Wrench className="w-5 h-5 text-fuchsia-400" />;
        case "devops": return <Cloud className="w-5 h-5 text-indigo-400" />;
        default: return <Wrench className="w-5 h-5 text-cyan-500" />;
    }
}

const SkillCategory = ({ title, items, delay }: { title: string; items: string[]; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay, duration: 0.5, type: "spring" }}
        className="relative p-6 overflow-hidden rounded-2xl bg-[#080814]/80 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/40 transition-all duration-500 group"
    >
        {/* Holographic scanning line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline" />

        {/* Animated Bracket Decoration */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-500/50 rounded-tl transition-all duration-300 group-hover:border-cyan-400 group-hover:w-6 group-hover:h-6" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-purple-500/50 rounded-br transition-all duration-300 group-hover:border-purple-400 group-hover:w-6 group-hover:h-6" />

        <div className="flex items-center gap-3 mb-6 relative z-10 border-b border-white/5 pb-3">
            {getCategoryIcon(title)}
            <h3 className="text-xl font-bold text-white tracking-wide uppercase font-mono">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3 relative z-10">
            {items.map((skill) => (
                <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/10 rounded font-mono text-sm text-indigo-200 hover:text-white hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-900/40 hover:to-purple-900/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all cursor-crosshair"
                >
                    <span className="text-cyan-500 opacity-70 text-xs">▰</span>
                    {skill}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {Object.entries(skills).map(([category, items], index) => (
                <SkillCategory
                    key={category}
                    title={category.replace(/_/g, " ")}
                    items={items}
                    delay={index * 0.15}
                />
            ))}
        </div>
    );
}
