"use client";

import { education } from "@/data/experience";
import { GraduationCap, Calendar, MapPin, Database } from "lucide-react";

export default function Education() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
            {education.map((edu, index) => (
                <div
                    key={index}
                    className="group relative bg-[#050510]/60 border border-cyan-500/20 p-6 rounded-xl overflow-hidden hover:bg-[#080814]/90 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-sm"
                >
                    {/* Animated Edge */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300" />

                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-cyan-900/40 border border-cyan-500/30 rounded-lg text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)] group-hover:text-white transition-colors">
                            <Database className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-black tracking-wide text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                {edu.institution}
                            </h3>
                            <p className="text-purple-400 font-mono text-sm mt-1 border-b border-purple-500/20 pb-2 mb-2">
                                {edu.degree}
                            </p>

                            <div className="flex justify-between items-center text-xs font-mono text-indigo-200/70">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3 text-cyan-500" />
                                    <span>{edu.period}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3 text-cyan-500" />
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
