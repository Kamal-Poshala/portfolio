"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const SkillCategory = ({ title, items, delay }: { title: string; items: string[]; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-card/50 border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors"
    >
        <h3 className="text-xl font-semibold mb-4 text-white capitalize">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
                <SkillCategory
                    key={category}
                    title={category.replace("_", " ")}
                    items={items}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
}
