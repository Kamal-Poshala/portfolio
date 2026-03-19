"use client";

import { motion } from "framer-motion";

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
    return (
        <section id={id} className="py-24 relative w-full bg-white/50">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 border-b border-[#0ea5e9]/20 pb-6 relative"
                >
                    {/* Minimal System Marker */}
                    <div className="absolute left-0 top-0 w-8 h-1 bg-[#0ea5e9]" />

                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-slate-900 uppercase mt-4">
                        {title}
                    </h2>

                    {subtitle && (
                        <p className="text-slate-500 font-mono text-sm mt-3 tracking-wide">
                            <span className="text-[#0ea5e9] mr-2">/</span>
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {children}
            </div>
        </section>
    );
}
