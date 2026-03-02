"use client";

import { experiences } from "@/data/experience";
import { Activity, Clock, Server, CheckCircle2, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Experience() {
    return (
        <div className="flex flex-col gap-8 pb-10 max-w-5xl mx-auto">

            {/* Enterprise Dashboard Header Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-[#0f0f14]/90 border border-[#1e3a8a]/30 p-4 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <p className="text-[#9ca3af] text-xs font-mono uppercase mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6]" /> System Uptime
                    </p>
                    <p className="text-2xl text-white font-light tracking-tight">99.8%</p>
                </div>
                <div className="bg-[#0f0f14]/90 border border-[#1e3a8a]/30 p-4 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <p className="text-[#9ca3af] text-xs font-mono uppercase mb-1 flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[#3b82f6]" /> Throughput
                    </p>
                    <p className="text-2xl text-white font-light tracking-tight flex items-end gap-2">
                        +35% <ArrowUpRight className="w-4 h-4 text-emerald-500 mb-1" />
                    </p>
                </div>
                <div className="bg-[#0f0f14]/90 border border-[#1e3a8a]/30 p-4 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <p className="text-[#9ca3af] text-xs font-mono uppercase mb-1 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#3b82f6]" /> Latency
                    </p>
                    <p className="text-2xl text-white font-light tracking-tight flex items-end gap-2">
                        -25% <ArrowDownRight className="w-4 h-4 text-emerald-500 mb-1" />
                    </p>
                </div>
                <div className="bg-[#0f0f14]/90 border border-[#1e3a8a]/30 p-4 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <p className="text-[#9ca3af] text-xs font-mono uppercase mb-1 flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-[#3b82f6]" /> Incidents Resolved
                    </p>
                    <p className="text-2xl text-white font-light tracking-tight flex items-end gap-2">
                        20+ <ArrowUpRight className="w-4 h-4 text-emerald-500 mb-1" />
                    </p>
                </div>
            </div>

            {/* Event Logs / Experience Items */}
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-[#0f0f14]/80 border border-[#1e3a8a]/30 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:border-[#3b82f6]/50 group relative"
                    >
                        {/* Status Indicator */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#1e3a8a] group-hover:bg-[#3b82f6] transition-colors" />

                        <div className="flex flex-col md:flex-row justify-between mb-4 border-b border-[#1e3a8a]/20 pb-4">
                            <div>
                                <h3 className="text-xl font-medium text-white tracking-wide">{exp.title}</h3>
                                <p className="text-[#3b82f6] font-mono text-sm mt-1">{exp.company} // {exp.location}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                                <span className="inline-block px-3 py-1 bg-[#1e2029] border border-[#1e3a8a]/40 text-[#9ca3af] text-xs font-mono uppercase">
                                    {exp.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6 text-[#d1d5db] font-light text-sm">
                            {exp.description.map((item, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="text-[#1e3a8a] font-mono mt-0.5">&gt;</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {exp.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-[#0a0a0f] border border-[#1e3a8a]/30 text-[#9ca3af] text-[10px] uppercase font-mono tracking-widest"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
