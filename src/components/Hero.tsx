"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, FileText, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-start pt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-4xl"
            >
                <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium inline-block">
                    Available for Hire
                </span>

                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                    Building Scalable <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                        Distributed Systems
                    </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                    I'm <strong>Kamal Poshala</strong>, a Full-Stack System Engineer specializing in backend architecture, applied ML, and distributed workflows.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                        href="#projects"
                        className="group px-8 py-3 bg-white text-black rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/contact"
                        className="px-8 py-3 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>

                <div className="flex gap-6 pt-8 text-gray-400">
                    <a
                        href="https://github.com/Kamal-Poshala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kamal-poshala-6431611a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        <FileText className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:kamalposhala.cs@gmail.com"
                        className="hover:text-white transition-colors"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
