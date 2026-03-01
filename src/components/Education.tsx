"use client";

import { education } from "@/data/experience";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-fuchsia-500 before:via-cyan-500 before:to-transparent pb-10">
            {education.map((edu, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    key={index}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none"
                >
                    {/* Glowing Node */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-fuchsia-500 bg-[#050510] group-hover:bg-fuchsia-500 text-fuchsia-500 group-hover:text-white shadow-[0_0_15px_rgba(217,70,239,0.8)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 z-10">
                        <GraduationCap className="w-3 h-3" />
                    </div>

                    {/* Content Card */}
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl bg-[#080814]/80 border border-cyan-500/20 backdrop-blur-sm group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.15)] transition-all duration-300 overflow-hidden relative">
                        {/* Hover Overlay Light */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <h3 className="text-xl font-black tracking-wide text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:text-fuchsia-100 transition-colors">
                                {edu.institution}
                            </h3>
                            <p className="text-lg text-cyan-400 font-mono mt-1 mb-4">{edu.degree}</p>

                            <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-purple-300 opacity-80 mt-2">
                                <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-fuchsia-900/20 rounded border border-fuchsia-500/30">
                                    <Calendar className="w-3.5 h-3.5 text-fuchsia-400" /> {edu.period}
                                </span>
                                <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-cyan-900/20 rounded border border-cyan-500/30">
                                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {edu.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
