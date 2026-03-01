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
        <section id={id} className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 relative"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-cyan-500 font-bold text-2xl opacity-80 select-none">{"{"}</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            {title}
                        </h2>
                        <span className="text-fuchsia-500 font-bold text-2xl opacity-80 select-none">{"}"}</span>
                    </div>

                    {subtitle && (
                        <p className="text-lg text-cyan-400/80 font-mono flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                            {subtitle}
                        </p>
                    )}

                    {/* Glitch sub-line */}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-cyan-500 via-purple-500 to-fuchsia-500 rounded-full opacity-50 blur-[2px]" />
                </motion.div>

                {children}
            </div>
        </section>
    );
}
