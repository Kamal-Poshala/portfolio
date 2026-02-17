"use client";

import { projects } from "@/data/projects";
import { Github, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative flex flex-col bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full"
                >
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/20 rounded-lg text-blue-400">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2">
                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                        title="View Code"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                        title="View Live Demo"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-sm text-blue-400/90 font-medium mb-3">
                            {project.category}
                        </p>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.slice(0, 4).map((t) => (
                                <span
                                    key={t}
                                    className="px-2 py-1 text-xs font-semibold bg-white/10 text-gray-200 border border-white/10 rounded-md"
                                >
                                    {t}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className="px-2 py-1 text-xs font-semibold bg-white/10 text-gray-200 border border-white/10 rounded-md">
                                    +{project.tech.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
