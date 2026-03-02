"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative flex flex-col bg-[#050510]/80 border border-purple-500/20 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 h-full z-10 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]"
                >
                    {/* Background Image Layer */}
                    {project.image && (
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-20 group-hover:opacity-50 transition-all duration-500 blur-[2px] group-hover:blur-0 scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/80 to-[#050510]/30" />
                        </div>
                    )}

                    {/* Hover Glow Effect Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Top Edge Highlight */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20" />

                    <div className="p-6 flex-1 flex flex-col relative z-20">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-2.5 bg-cyan-900/30 border border-cyan-500/30 rounded shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                <Cpu className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div className="flex gap-2">
                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-fuchsia-300/60 hover:text-cyan-400 hover:bg-cyan-500/10 rounded border border-transparent hover:border-cyan-500/30 transition-all"
                                        title="System Code"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-fuchsia-300/60 hover:text-purple-400 hover:bg-purple-500/10 rounded border border-transparent hover:border-purple-500/30 transition-all"
                                        title="Live Render"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                            {project.title}
                        </h3>

                        <p className="text-xs font-mono tracking-widest text-fuchsia-400 uppercase mb-4 opacity-80">
                            {project.category}
                        </p>

                        <p className="text-indigo-100/70 text-sm leading-relaxed mb-6 flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-2 py-1 text-[11px] uppercase tracking-wider font-mono text-cyan-200/80 border border-cyan-500/20 bg-cyan-950/20 rounded shadow-[0_0_5px_rgba(6,182,212,0.2)]"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
