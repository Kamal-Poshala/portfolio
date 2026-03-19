"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import SystemCore from "./SystemCore";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white/50">
            {/* 3D Environment Layer */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                    <color attach="background" args={["#ffffff"]} />
                    {/* Soft Bright Lighting */}
                    <ambientLight intensity={1.5} color="#ffffff" />
                    <directionalLight position={[5, 10, -5]} intensity={2.5} color="#bae6fd" />
                    <directionalLight position={[-5, 5, 10]} intensity={1.5} color="#0ea5e9" />
                    <Environment preset="city" />

                    {/* Position holographic core slightly left */}
                    <group position={[-2, 0, -2]}>
                        <SystemCore />
                    </group>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={true}
                        autoRotateSpeed={0.3}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 3}
                    />
                    {/* Subtle Shadow Floor */}
                    <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={20} blur={2.5} far={4.5} color="#bae6fd" />
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

                {/* Left Side: 3D Realistic Portrait (Subject) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex justify-center lg:justify-end items-center relative mt-20 lg:mt-0"
                >
                    <div className="relative w-[300px] h-[380px] sm:w-[350px] sm:h-[450px] lg:w-[420px] lg:h-[550px] z-10 group overflow-hidden rounded-[2rem] border border-[#0ea5e9]/20 bg-white/50/50 backdrop-blur-[2px] shadow-[0_10px_40px_rgba(14,165,233,0.1)]">
                        {/* Soft Rim Lighting Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0ea5e9]/5 to-transparent mix-blend-overlay z-20" />

                        <Image
                            src="/profile1.png"
                            alt="Kamal Poshala"
                            fill
                            className="object-cover object-top filter contrast-[1.05] brightness-[1.05] scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Side: Typography Space */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="flex flex-col gap-6 relative p-2 lg:p-8"
                >
                    <div className="space-y-3">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-50/80 border border-[#0ea5e9]/30 text-slate-500 text-xs font-mono tracking-widest uppercase"
                        >
                            <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" />
                            <span>System Status: Online</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]">
                            Kamal <span className="font-semibold block sm:inline mt-2 sm:mt-0 text-[#0ea5e9]">Poshala</span>
                        </h1>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-medium tracking-wide text-slate-700 flex flex-col gap-1 border-l-2 border-[#0ea5e9] pl-4">
                        <span>Full-Stack Software Engineer</span>
                        <span className="text-sm font-light tracking-widest uppercase text-slate-500">
                            Applied AI & Distributed Systems
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 font-light max-w-lg leading-relaxed pt-2">
                        Specializing in building scalable web applications, robust backend architectures, and integrating applied machine learning models. I bridge the gap between complex AI research and production-ready systems, turning innovative concepts into reliable, high-performance software.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-8">
                        <Link
                            href="#projects"
                            className="px-8 py-3.5 bg-[#0ea5e9] text-white font-medium text-sm tracking-wide rounded-sm flex items-center justify-center gap-3 hover:bg-[#38bdf8] transition-all shadow-[0_4px_20px_rgba(14,165,233,0.3)] group"
                        >
                            <span>Deployment Modules</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-3.5 border border-[#0ea5e9]/40 text-slate-700 font-medium text-sm tracking-wide rounded-sm flex items-center justify-center gap-2 hover:bg-[#e0f2fe] hover:border-[#0ea5e9] transition-all"
                        >
                            Initialize Contact
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
