"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Fingerprint } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] w-full flex items-center justify-end overflow-hidden pt-16 bg-[#030308]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-cyberpunk.png"
                    alt="Anime Cyberpunk Environment"
                    fill
                    className="object-cover object-[25%_center] lg:object-[35%_center] opacity-100 scale-105"
                    priority
                />

                {/* Cinematic Gradients for text legibility on the right */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/30 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050510]/60 to-[#050510] z-10" />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-end">
                {/* Holographic UI Panel effect */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:w-[60%] lg:w-[45%] flex flex-col gap-6 relative mt-16 p-8 lg:p-10 rounded-[2rem] border border-cyan-500/20 bg-[#080814]/60 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)]"
                >
                    {/* Decorative Top Left Tech Element */}
                    <div className="absolute -top-3 -left-3 border-t-2 border-l-2 border-cyan-400 w-8 h-8 opacity-70" />
                    <div className="absolute -bottom-3 -right-3 border-b-2 border-r-2 border-purple-500 w-8 h-8 opacity-70" />

                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        >
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Neural Link: Established</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            Kamal <br className="hidden sm:block" /> Poshala
                        </h1>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold flex flex-col gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 drop-shadow-md">
                            Software Architect
                        </span>
                        <span className="text-base sm:text-lg text-purple-400/80 font-mono tracking-wide uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                            System Overdrive
                        </span>
                    </h2>

                    <p className="text-lg text-indigo-100/70 leading-relaxed font-light mt-2 border-l-2 border-cyan-500/30 pl-4">
                        Engineering next-generation distributed networks and high-performance AI systems. Turning algorithmic theory into cybernetic reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Link
                            href="#projects"
                            className="group relative px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                            <span className="relative z-10 flex items-center gap-2">
                                Access Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-3.5 border border-purple-500/40 text-purple-200 font-bold rounded flex items-center justify-center gap-2 hover:bg-purple-500/10 hover:border-purple-400 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                        >
                            <Fingerprint className="w-4 h-4 text-purple-400" />
                            Contact Protocol
                        </Link>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
