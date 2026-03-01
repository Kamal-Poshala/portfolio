"use client";

import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent pb-10">
            {experiences.map((exp, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    key={index}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                    {/* Glowing Node */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-cyan-500 bg-[#050510] group-hover:bg-cyan-500 text-cyan-500 group-hover:text-white shadow-[0_0_10px_rgba(6,182,212,0.8)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
                        <Zap className="w-3 h-3" />
                    </div>

                    {/* Content Card */}
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl bg-[#080814]/80 border border-purple-500/20 backdrop-blur-sm group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-black tracking-wide text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{exp.title}</h3>
                                <p className="text-lg text-cyan-400 font-mono mt-1">{exp.company}</p>
                            </div>
                            <div className="text-xs font-mono text-purple-300 mt-2 sm:mt-0 flex flex-col items-start sm:items-end gap-1.5 opacity-80">
                                <span className="flex items-center gap-1.5 px-2 py-1 bg-purple-900/30 rounded border border-purple-500/20">
                                    <Calendar className="w-3 h-3" /> {exp.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" /> {exp.location}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6 text-indigo-100/70 text-sm font-light">
                            {exp.description.map((item, idx) => (
                                <li key={idx} className="leading-relaxed relative pl-5">
                                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 border border-cyan-400 rotate-45 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            {exp.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-[#050510] border border-purple-500/30 text-purple-200/80 text-[10px] uppercase font-mono tracking-widest rounded transition-all group-hover:border-cyan-500/50"
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
