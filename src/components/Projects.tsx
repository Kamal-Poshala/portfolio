"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="grid grid-cols-1 gap-10 pb-12 w-full max-w-4xl mx-auto">
            {projects.map((project, index) => {
                return (
                    <motion.div
                        key={index}
                        className="group relative flex flex-col bg-white/50 backdrop-blur-sm border border-[#0ea5e9]/20 shadow-[0_4px_20px_rgba(14,165,233,0.05)] transition-all duration-300 z-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)] rounded-md"
                    >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20" />

                        <div className="p-8 sm:p-10 flex flex-col relative z-20 w-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Cpu className="w-5 h-5 text-[#0ea5e9]" />
                                        <p className="text-xs font-mono tracking-widest text-[#0ea5e9] uppercase">
                                            {project.category}
                                        </p>
                                    </div>
                                    <h3 className="text-2xl font-medium text-slate-900 group-hover:text-[#0ea5e9] transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-3 shrink-0">
                                    {project.repoLink && (
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-500 hover:text-[#0ea5e9] hover:-translate-y-1 transition-all bg-white border border-[#0ea5e9]/30 hover:border-[#0ea5e9] hover:bg-[#e0f2fe] rounded-sm">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-500 hover:text-[#0ea5e9] hover:-translate-y-1 transition-all bg-white border border-[#0ea5e9]/30 hover:border-[#0ea5e9] hover:bg-[#e0f2fe] rounded-sm">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-slate-600 font-light text-base leading-relaxed mb-8 max-w-3xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 text-xs uppercase font-mono text-slate-600 border border-[#0ea5e9]/20 bg-white group-hover:border-[#0ea5e9]/40 group-hover:text-[#0ea5e9] transition-colors rounded-md shadow-sm"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
