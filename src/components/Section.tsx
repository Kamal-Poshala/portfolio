"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

export default function Section({ children, id, className, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 sm:py-28 px-6 lg:px-8 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto w-full relative z-10"
            >
                {title && (
                    <div className="mb-14 text-center relative">
                        <motion.h2
                            className="inline-block text-3xl sm:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        >
                            <span className="text-cyan-500 opacity-60 mr-2 text-2xl">{"//"}</span>
                            {title}
                        </motion.h2>
                        {subtitle && (
                            <p className="mt-4 text-lg text-indigo-200/60 max-w-2xl mx-auto font-mono tracking-wide">{subtitle}</p>
                        )}
                        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                    </div>
                )}
                {children}
            </motion.div>
        </section>
    );
}
