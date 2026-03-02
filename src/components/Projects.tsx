"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, Cpu, ChevronRight, Activity, Globe, Database, Video } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectDiagram({ category }: { category: string }) {
    if (category.includes("Tiptap & Socket.IO")) return (
        <div className="flex gap-4 items-center justify-center p-6 border border-[#1e3a8a]/30 bg-[#0a0a0f] rounded-sm my-4 text-[#9ca3af] font-mono text-xs text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#3b82f6]/5 pointer-events-none" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">Client A</div></div>
            <Activity className="w-4 h-4 text-[#3b82f6]" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e3a8a] border border-[#3b82f6] text-white flex items-center justify-center">WebSocket</div></div>
            <Activity className="w-4 h-4 text-[#3b82f6]" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">Client B</div></div>
        </div>
    );
    if (category.includes("NLP / Machine Learning")) return (
        <div className="flex gap-4 items-center justify-center p-6 border border-[#1e3a8a]/30 bg-[#0a0a0f] rounded-sm my-4 text-[#9ca3af] font-mono text-xs text-center relative overflow-hidden">
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center items-center"><Globe className="w-4 h-4 text-[#3b82f6]" /></div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-20 h-10 bg-[#1e3a8a] border border-[#3b82f6] text-white flex items-center justify-center">mBERT</div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">Polarization Score</div></div>
        </div>
    );
    if (category.includes("AI / LangChain") || category.includes("Search and Retrieval")) return (
        <div className="flex gap-4 items-center justify-center p-6 border border-[#1e3a8a]/30 bg-[#0a0a0f] rounded-sm my-4 text-[#9ca3af] font-mono text-xs text-center relative overflow-hidden">
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">Document</div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e3a8a] border border-[#3b82f6] text-white flex items-center justify-center">Embeddings</div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center"><Database className="w-4 h-4 text-[#3b82f6] mr-1" />Vector Store</div></div>
        </div>
    );
    if (category.includes("Audio Processing")) return (
        <div className="flex gap-4 items-center justify-center p-6 border border-[#1e3a8a]/30 bg-[#0a0a0f] rounded-sm my-4 text-[#9ca3af] font-mono text-xs text-center relative overflow-hidden">
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center"><Video className="w-4 h-4 text-[#3b82f6]" /></div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-24 h-8 bg-[#1e3a8a] border border-[#3b82f6] text-white flex items-center justify-center">Transcribe & Translate</div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">TTS & Lip Sync</div></div>
        </div>
    );
    return (
        <div className="flex gap-4 items-center justify-center p-6 border border-[#1e3a8a]/30 bg-[#0a0a0f] rounded-sm my-4 text-[#9ca3af] font-mono text-xs text-center relative overflow-hidden">
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">Client</div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e3a8a] border border-[#3b82f6] text-white flex items-center justify-center">API Gateway</div></div>
            <ChevronRight className="w-4 h-4 text-[#3b82f6] opacity-50" />
            <div className="flex flex-col gap-2"><div className="w-16 h-8 bg-[#1e2029] border border-[#1e3a8a]/50 flex items-center justify-center">Service Node</div></div>
        </div>
    );
}

export default function Projects() {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 w-full max-w-6xl mx-auto">
            {projects.map((project, index) => {
                const isFocused = focusedIndex === index;
                return (
                    <motion.div
                        key={index}
                        layout
                        onMouseEnter={() => setFocusedIndex(index)}
                        onMouseLeave={() => setFocusedIndex(null)}
                        className={`group relative flex flex-col bg-[#0f0f14]/90 border border-[#1e3a8a]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 z-10 cursor-pointer overflow-hidden ${isFocused ? 'md:col-span-2 lg:col-span-2' : ''}`}
                    >
                        {/* Hover Border Glow effect */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20" />
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3b82f6] opacity-0 group-hover:opacity-10 transition-opacity z-20" />

                        <div className="p-6 flex-1 flex flex-col relative z-20">
                            <div className="flex justify-between items-start mb-4 border-b border-[#1e3a8a]/30 pb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Cpu className="w-5 h-5 text-[#3b82f6]" />
                                        <p className="text-xs font-mono tracking-widest text-[#3b82f6] uppercase">
                                            {project.category}
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-medium text-white group-hover:text-[#e0e7ff] transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-2">
                                    {project.repoLink && (
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-[#9ca3af] hover:text-[#3b82f6] transition-all bg-[#0a0a0f] border border-[#1e3a8a]/50">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-[#9ca3af] hover:text-[#3b82f6] transition-all bg-[#0a0a0f] border border-[#1e3a8a]/50">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-[#d1d5db] font-light text-sm leading-relaxed max-w-2xl">
                                {project.description}
                            </p>

                            <AnimatePresence>
                                {isFocused && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <ProjectDiagram category={project.category} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-1 text-[10px] uppercase font-mono text-[#9ca3af] border border-[#1e3a8a]/40 bg-[#0a0a0f]"
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
