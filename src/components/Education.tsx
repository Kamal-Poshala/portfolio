"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import React from "react";

// Native framer-motion 3D tilt component to apply on cards
export function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, perspective: 1200 }}
            onMouseMove={handleMouse}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Education() {
    const educationData = [
        {
            degree: "Master of Science in Computer Science",
            school: "University of Oklahoma",
            location: "Norman, OK",
            date: "Aug 2024 - Expected May 2026",
            details: ["Specialization: Artificial Intelligence & Distributed Systems"]
        },
        {
            degree: "Bachelor of Technology in Information Technology",
            school: "CVR College of Engineering",
            location: "Hyderabad, India",
            date: "Aug 2020 - May 2024",
            details: ["Final CGPA: 9.08/10.0", "Distinctive Academic Achievement"]
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto pb-12">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-[#0ea5e9]" />
                    <h3 className="text-xl font-light text-slate-800 uppercase tracking-wide">Academic Training</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, idx) => (
                        <TiltCard key={idx}>
                            <div className="p-8 h-full bg-white/50/80 backdrop-blur-sm border border-[#0ea5e9]/20 rounded-md shadow-sm hover:shadow-[0_15px_30px_rgba(14,165,233,0.1)] hover:border-[#0ea5e9]/40 transition-all">
                                <span className="text-xs font-mono text-[#0ea5e9] tracking-widest uppercase block mb-1">
                                    {edu.date}
                                </span>
                                <h4 className="text-xl font-medium text-slate-900 mb-2 leading-snug">
                                    {edu.degree}
                                </h4>
                                <p className="text-sm text-slate-600 font-light mb-6">
                                    {edu.school} • {edu.location}
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    {edu.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="text-xs text-slate-500 font-mono tracking-wide flex items-start gap-2">
                                            <span className="text-[#0ea5e9] mt-0.5">▸</span> {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
