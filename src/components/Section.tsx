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
        <section id={id} className={cn("py-20 sm:py-28", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {title && (
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
                        )}
                        <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full opacity-80" />
                    </div>
                )}
                {children}
            </motion.div>
        </section>
    );
}
