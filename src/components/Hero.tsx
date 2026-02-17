"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-start pt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full"
            >
                <div className="space-y-6 flex-1">
                    <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium inline-block mb-4">
                        Available for Hire
                    </span>

                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-none mb-2">
                        Kamal Poshala
                    </h1>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 mb-6">
                        Full-Stack System Engineer <span className="text-gray-500 mx-2">|</span> AI & Distributed Systems
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                        I engineer high-performance full-stack applications and intelligent AI ecosystems, transforming innovative concepts into robust, scalable, and data-driven solutions.
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
                </div>

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl shadow-primary/20">
                    <Image
                        src="/profile1.png"
                        alt="Kamal Poshala"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
