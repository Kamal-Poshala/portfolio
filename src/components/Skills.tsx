"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Terminal, Database, Cpu, HardDrive } from "lucide-react";
import React from "react";
import { FaJava, FaPython, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaGithub, FaLinux, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiC, SiPostgresql, SiMysql, SiRedis, SiMongodb, SiFastapi, SiGraphql, SiExpress, SiFirebase, SiPytorch, SiTensorflow, SiPandas, SiNextdotjs, SiTailwindcss, SiRedux, SiMui, SiVercel, SiNetlify, SiKubernetes, SiNginx, SiGithubactions, SiHuggingface } from "react-icons/si";

// Icon mapper for individual skills
const getSkillIcon = (skillName: string) => {
    const s = skillName.toLowerCase();

    // Languages
    if (s === "java") return <FaJava className="w-4 h-4 mr-2" color="#007396" />;
    if (s === "python") return <FaPython className="w-4 h-4 mr-2" color="#3776AB" />;
    if (s === "javascript") return <SiJavascript className="w-4 h-4 mr-2" color="#F7DF1E" />;
    if (s === "typescript") return <SiTypescript className="w-4 h-4 mr-2" color="#3178C6" />;
    if (s === "c") return <SiC className="w-4 h-4 mr-2" color="#A8B9CC" />;
    if (s === "html/css") return <FaHtml5 className="w-4 h-4 mr-2" color="#E34F26" />;

    // Backend
    if (s === "node.js") return <FaNodeJs className="w-4 h-4 mr-2" color="#339933" />;
    if (s === "express.js") return <SiExpress className="w-4 h-4 mr-2" color="#000000" />;
    if (s === "fastapi") return <SiFastapi className="w-4 h-4 mr-2" color="#009688" />;
    if (s === "graphql") return <SiGraphql className="w-4 h-4 mr-2" color="#E10098" />;

    // Databases
    if (s === "mongodb") return <SiMongodb className="w-4 h-4 mr-2" color="#47A248" />;
    if (s === "postgresql") return <SiPostgresql className="w-4 h-4 mr-2" color="#4169E1" />;
    if (s === "mysql") return <SiMysql className="w-4 h-4 mr-2" color="#4479A1" />;
    if (s === "redis") return <SiRedis className="w-4 h-4 mr-2" color="#DC382D" />;
    if (s.includes("firebase")) return <SiFirebase className="w-4 h-4 mr-2" color="#FFCA28" />;

    // AI / ML
    if (s === "pytorch") return <SiPytorch className="w-4 h-4 mr-2" color="#EE4C2C" />;
    if (s === "tensorflow") return <SiTensorflow className="w-4 h-4 mr-2" color="#FF6F00" />;
    if (s === "scikit-learn") return <SiPytorch className="w-4 h-4 mr-2" color="#F7931E" />;
    if (s === "pandas") return <SiPandas className="w-4 h-4 mr-2" color="#150458" />;
    if (s.includes("hugging face")) return <SiHuggingface className="w-4 h-4 mr-2" color="#FFD21E" />;

    // Frontend
    if (s === "react.js") return <FaReact className="w-4 h-4 mr-2" color="#61DAFB" />;
    if (s === "next.js") return <SiNextdotjs className="w-4 h-4 mr-2" color="#000000" />;
    if (s === "tailwind css") return <SiTailwindcss className="w-4 h-4 mr-2" color="#06B6D4" />;
    if (s === "redux") return <SiRedux className="w-4 h-4 mr-2" color="#764ABC" />;
    if (s === "material ui") return <SiMui className="w-4 h-4 mr-2" color="#007FFF" />;

    // Ops
    if (s === "docker") return <FaDocker className="w-4 h-4 mr-2" color="#2496ED" />;
    if (s === "kubernetes") return <SiKubernetes className="w-4 h-4 mr-2" color="#326CE5" />;
    if (s === "aws") return <FaAws className="w-4 h-4 mr-2" color="#232F3E" />;
    if (s === "nginx") return <SiNginx className="w-4 h-4 mr-2" color="#009639" />;
    if (s === "git") return <FaGitAlt className="w-4 h-4 mr-2" color="#F05032" />;
    if (s === "github actions") return <SiGithubactions className="w-4 h-4 mr-2" color="#2088FF" />;
    if (s === "linux") return <FaLinux className="w-4 h-4 mr-2" color="#FCC624" />;
    if (s === "vercel") return <SiVercel className="w-4 h-4 mr-2" color="#000000" />;
    if (s === "netlify") return <SiNetlify className="w-4 h-4 mr-2" color="#00C7B7" />;

    // Fallbacks
    if (s.includes("database") || s.includes("sql")) return <Database className="w-4 h-4 mr-2 text-slate-500" />;
    if (s.includes("system") || s.includes("api")) return <HardDrive className="w-4 h-4 mr-2 text-slate-500" />;

    return <Terminal className="w-4 h-4 mr-2 text-slate-500" />;
};

export default function Skills() {
    const layers = [
        {
            id: "layer-4",
            title: "Layer 4: Systems & DevOps",
            icon: <HardDrive className="w-5 h-5 text-[#0ea5e9]" />,
            items: [...skills.systems, ...skills.devops],
            width: "w-full",
            delay: 0.1
        },
        {
            id: "layer-3",
            title: "Layer 3: AI & Machine Learning",
            icon: <Cpu className="w-5 h-5 text-[#0ea5e9]" />,
            items: skills.ai_ml,
            width: "w-full md:w-[95%] lg:w-[95%] mx-auto",
            delay: 0.2
        },
        {
            id: "layer-2",
            title: "Layer 2: Backend Engineering & Databases",
            icon: <Database className="w-5 h-5 text-[#0ea5e9]" />,
            items: [...skills.backend, ...skills.databases],
            width: "w-full md:w-[90%] lg:w-[90%] mx-auto",
            delay: 0.3
        },
        {
            id: "layer-1",
            title: "Layer 1: Programming & Frontend",
            icon: <Terminal className="w-5 h-5 text-[#0ea5e9]" />,
            items: [...skills.languages, ...skills.frontend],
            width: "w-full md:w-[85%] lg:w-[85%] mx-auto",
            delay: 0.4
        },
    ];

    return (
        <div className="flex flex-col gap-4 pb-10 max-w-5xl mx-auto px-2 sm:px-4">
            {layers.map((layer) => (
                <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: layer.delay, duration: 0.6, ease: "easeOut" }}
                    className={`relative p-6 overflow-hidden bg-white/50 border border-[#0ea5e9]/20 shadow-[0_4px_20px_rgba(14,165,233,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:-translate-y-1 group ${layer.width}`}
                >
                    {/* Architectural Structure Lines */}
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-[#0ea5e9]/20 group-hover:bg-[#0ea5e9] transition-colors duration-500" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-[#0ea5e9]/20 group-hover:bg-[#0ea5e9] transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0ea5e9]/20 via-[#0ea5e9]/10 to-[#0ea5e9]/20 group-hover:via-[#0ea5e9]/50 transition-colors" />

                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10 w-full">
                        {/* Layer Title */}
                        <div className="flex items-center gap-3 md:w-1/4 border-b md:border-b-0 md:border-r border-[#0ea5e9]/20 pb-4 md:pb-0 md:pr-4 flex-shrink-0">
                            {layer.icon}
                            <h3 className="text-slate-900 tracking-widest uppercase font-mono text-xs lg:text-sm font-medium">
                                {layer.title}
                            </h3>
                        </div>

                        {/* Layer Items */}
                        <div className="flex flex-wrap gap-2 md:w-3/4">
                            {layer.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="flex items-center px-4 py-2 bg-slate-50/80 border border-[#0ea5e9]/20 text-slate-700 font-mono text-sm hover:text-slate-900 hover:bg-[#f0f9ff] hover:border-[#0ea5e9]/60 hover:shadow-sm transition-all duration-300 cursor-default rounded-md"
                                >
                                    {getSkillIcon(skill)}
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
