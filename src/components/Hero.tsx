"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Fingerprint } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-16 bg-transparent">
            {/* Ambient Lighting Layer */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#030308]" />

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
                {/* Left Side: Content Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-[55%] flex flex-col gap-6 relative mt-10 lg:mt-0 p-8 lg:p-10 rounded-[2rem] border border-fuchsia-500/30 bg-[#080314]/70 backdrop-blur-xl shadow-[0_0_60px_rgba(217,70,239,0.2)]"
                >
                    {/* Decorative Tech Elements */}
                    <div className="absolute -top-3 -left-3 border-t-2 border-l-2 border-cyan-400 w-8 h-8 opacity-80 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                    <div className="absolute -bottom-3 -right-3 border-b-2 border-r-2 border-fuchsia-500 w-8 h-8 opacity-80 shadow-[0_0_15px_rgba(217,70,239,0.6)]" />

                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-fuchsia-950/40 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-shadow"
                        >
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Available for Opportunities</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Kamal <br className="hidden sm:block" /> Poshala
                        </h1>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold flex flex-col gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-600 drop-shadow-[0_0_15px_rgba(217,70,239,0.4)]">
                            Software Engineer
                        </span>
                        <span className="text-base sm:text-lg text-cyan-400/90 font-mono tracking-wide uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_15px_rgba(217,70,239,0.9)]" />
                            Open to Work
                        </span>
                    </h2>

                    <p className="text-lg text-purple-100/80 leading-relaxed font-light mt-2 border-l-2 border-fuchsia-500/50 pl-4 shadow-[-5px_0_15px_rgba(217,70,239,0.1)]">
                        M.S. in Computer Science at the University of Oklahoma. Software Engineer specializing in scalable Node.js & Java backends, distributed microservices, and AI-driven platforms. Turning complex architectural patterns into resilient cybernetic systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Link
                            href="#projects"
                            className="group relative px-6 py-3.5 bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white font-bold rounded flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.8)] transition-all"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-3.5 border border-cyan-500/50 text-cyan-200 font-bold rounded flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                        >
                            <Fingerprint className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side: Actual Photo with Neon Borders */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="w-full lg:w-[45%] flex justify-center items-center relative"
                >
                    {/* Circular Glowing Pedestal effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-fuchsia-500/15 rounded-full blur-[60px] pointer-events-none" />

                    {/* Image Container with Neon Borders and Hover Glow */}
                    <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] z-10 group">

                        {/* Neon Outline Border that glows heavily on hover */}
                        <div className="absolute inset-[-4px] rounded-2xl border-[3px] border-cyan-500/50 group-hover:border-fuchsia-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_50px_rgba(217,70,239,0.8),inset_0_0_30px_rgba(217,70,239,0.6)] transition-all duration-500 z-20 pointer-events-none" />

                        {/* Corner Tech Accents */}
                        <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-fuchsia-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.9)] transition-all duration-500 z-30" />
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-fuchsia-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.9)] transition-all duration-500 z-30" />
                        <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-cyan-500/50 group-hover:border-fuchsia-400 transition-all duration-500 z-30" />
                        <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-cyan-500/50 group-hover:border-fuchsia-400 transition-all duration-500 z-30" />

                        {/* Actual Image */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#080314]/80 backdrop-blur-sm border border-cyan-500/20">
                            <Image
                                src="/profile1.png"
                                alt="Kamal Poshala"
                                fill
                                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out saturate-50 group-hover:saturate-100"
                                priority
                            />
                            {/* Inner gradient/scanline for blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-[#030308]/20 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none mix-blend-overlay opacity-50 group-hover:opacity-10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
