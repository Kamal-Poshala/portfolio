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
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f0f14]">
            {/* 3D Environment Layer */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                    <color attach="background" args={["#0f0f14"]} />
                    {/* Soft Control Room Lighting */}
                    <ambientLight intensity={0.4} color="#e0e7ff" />
                    <directionalLight position={[5, 10, -5]} intensity={1.5} color="#3b82f6" />
                    <directionalLight position={[-5, 5, 10]} intensity={0.5} color="#1e3a8a" />
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
                    <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
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
                    <div className="relative w-[300px] h-[380px] sm:w-[350px] sm:h-[450px] lg:w-[420px] lg:h-[550px] z-10 group overflow-hidden rounded-[2rem] border border-[#1e3a8a]/30 bg-[#0f0f14]/50 backdrop-blur-[2px] shadow-[0_10px_40px_rgba(30,58,138,0.2)]">
                        {/* Soft Rim Lighting Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/10 to-transparent mix-blend-overlay z-20" />

                        <Image
                            src="/profile1.png"
                            alt="Kamal Poshala"
                            fill
                            className="object-cover object-top filter grayscale-[20%] contrast-[1.05] brightness-[0.9] scale-100 group-hover:scale-[1.02] group-hover:grayscale-[10%] transition-transform duration-700 ease-out"
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
                            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1e2029]/80 border border-[#1e3a8a]/50 text-[#9ca3af] text-xs font-mono tracking-widest uppercase"
                        >
                            <Terminal className="w-3.5 h-3.5" />
                            <span>System Status: Online</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white leading-[1.1]">
                            Kamal <span className="font-semibold block sm:inline mt-2 sm:mt-0">Poshala</span>
                        </h1>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-medium tracking-wide text-[#3b82f6] flex flex-col gap-1 border-l-2 border-[#1e3a8a] pl-4">
                        <span>AI Systems Engineer</span>
                        <span className="text-sm font-light tracking-widest uppercase text-[#9ca3af]">
                            Distributed Systems Architect
                        </span>
                    </h2>

                    <p className="text-lg text-[#d1d5db] font-light max-w-lg leading-relaxed pt-2">
                        Architecting highly scalable, event-driven distributed systems. Bridging the gap between applied machine learning and resilient backend infrastructure to build the next generation of multilingual AI platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-8">
                        <Link
                            href="#projects"
                            className="px-8 py-3.5 bg-[#ffffff] text-[#0f0f14] font-medium text-sm tracking-wide rounded-sm flex items-center justify-center gap-3 hover:bg-[#e0e7ff] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                        >
                            <span>Deployment Modules</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-3.5 border border-[#3b82f6]/40 text-[#ffffff] font-medium text-sm tracking-wide rounded-sm flex items-center justify-center gap-2 hover:bg-[#1e3a8a]/20 hover:border-[#3b82f6] transition-all"
                        >
                            Initialize Contact
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
