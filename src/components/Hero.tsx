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
                    src="/hero-bg-neon.png"
                    alt="Anime Cyberpunk Environment"
                    fill
                    className="object-cover object-[25%_center] lg:object-[35%_center] opacity-100 scale-105"
                    priority
                />

                {/* Cinematic Gradients for text legibility on the right */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#030308]/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030308]/70 to-[#020205] z-10" />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-end">
                {/* Holographic UI Panel effect */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:w-[60%] lg:w-[45%] flex flex-col gap-6 relative mt-16 p-8 lg:p-10 rounded-[2rem] border border-fuchsia-500/30 bg-[#080314]/70 backdrop-blur-xl shadow-[0_0_60px_rgba(217,70,239,0.2)]"
                >
                    {/* Decorative Top Left Tech Element */}
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
                            <span>System Matrix: Online</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Kamal <br className="hidden sm:block" /> Poshala
                        </h1>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold flex flex-col gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-600 drop-shadow-[0_0_15px_rgba(217,70,239,0.4)]">
                            Software Architect
                        </span>
                        <span className="text-base sm:text-lg text-cyan-400/90 font-mono tracking-wide uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_15px_rgba(217,70,239,0.9)]" />
                            Overdrive Active
                        </span>
                    </h2>

                    <p className="text-lg text-purple-100/80 leading-relaxed font-light mt-2 border-l-2 border-fuchsia-500/50 pl-4 shadow-[-5px_0_15px_rgba(217,70,239,0.1)]">
                        Engineering next-generation distributed networks and high-performance AI systems. Turning algorithmic theory into cybernetic reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Link
                            href="#projects"
                            className="group relative px-6 py-3.5 bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white font-bold rounded flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.8)] transition-all"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                            <span className="relative z-10 flex items-center gap-2">
                                Access Databank
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-3.5 border border-cyan-500/50 text-cyan-200 font-bold rounded flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                        >
                            <Fingerprint className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            Initiate Contact
                        </Link>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
