"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";

export default function About() {
    const keywords = [
        { text: "Microservices", x: "10%", y: "20%" },
        { text: "Event-Driven Architecture", x: "70%", y: "15%" },
        { text: "Real-Time Systems", x: "80%", y: "70%" },
        { text: "Distributed Systems", x: "15%", y: "80%" },
        { text: "Multilingual AI", x: "40%", y: "90%" },
        { text: "Scalable Pipelines", x: "50%", y: "10%" },
    ];

    return (
        <div className="relative min-h-[50vh] flex flex-col lg:flex-row items-center bg-white/50 overflow-hidden rounded-md border border-[#0ea5e9]/20 shadow-[0_4px_30px_rgba(14,165,233,0.05)]">

            {/* Blueprint Diagram Background Layer - Opacity Increased for visibility */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80 bg-[linear-gradient(rgba(14,165,233,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.15)_1px,transparent_1px)] bg-[size:40px_40px]">
                {/* Simulated Nodes & Connections Background */}
                <svg width="100%" height="100%" className="absolute inset-0 hidden sm:block">
                    <circle cx="20%" cy="30%" r="5" fill="#0ea5e9" />
                    <circle cx="80%" cy="50%" r="7" fill="#38bdf8" />
                    <circle cx="60%" cy="80%" r="5" fill="#0ea5e9" />
                    <circle cx="30%" cy="70%" r="6" fill="#38bdf8" />
                    <line x1="20%" y1="30%" x2="80%" y2="50%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" opacity={0.8} />
                    <line x1="80%" y1="50%" x2="60%" y2="80%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" opacity={0.8} />
                    <line x1="60%" y1="80%" x2="30%" y2="70%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" opacity={0.8} />
                    <line x1="30%" y1="70%" x2="20%" y2="30%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" opacity={0.8} />
                </svg>
            </div>

            {/* Floating Keywords Layer */}
            {keywords.map((kw, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 5 + i * 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute z-0 pointer-events-none text-[#0ea5e9] font-mono text-xs font-semibold uppercase whitespace-nowrap hidden sm:block"
                    style={{ left: kw.x, top: kw.y }}
                >
                    {kw.text}
                </motion.div>
            ))}

            {/* Content Layer */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 lg:w-2/3 backdrop-blur-[2px]">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/50 border border-[#0ea5e9]/40 shadow-sm text-slate-600 font-mono text-xs uppercase tracking-widest">
                    <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" />
                    <span>Background Information</span>
                </div>

                <p className="text-xl md:text-2xl text-slate-800 font-light leading-relaxed mb-6">
                    I am a Full-Stack Software Engineer passionate about engineering backend systems, seamless frontend experiences, and intelligent AI pipelines designed to operate at scale.
                </p>

                <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed border-l-2 border-[#0ea5e9] pl-4">
                    My expertise lies extensively in building multi-service ecosystems, scalable full-stack applications (React/Node.js), and transforming academic machine learning concepts (NLP/Transformers) into robust, fault-tolerant environments that remain highly available under heavy workloads.
                </p>

                <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-sm tracking-widest text-slate-500 uppercase">
                    <div className="hover:-translate-y-1 transition-transform cursor-default bg-white/50/60 p-2 rounded-md">
                        <div className="text-[#0ea5e9] font-bold">Node.js / Java</div>
                        <div className="text-[10px] mt-1">Core Engines</div>
                    </div>
                    <div className="hover:-translate-y-1 transition-transform cursor-default bg-white/50/60 p-2 rounded-md">
                        <div className="text-[#0ea5e9] font-bold">PyTorch / LLMs</div>
                        <div className="text-[10px] mt-1">AI Modules</div>
                    </div>
                    <div className="hover:-translate-y-1 transition-transform cursor-default bg-white/50/60 p-2 rounded-md">
                        <div className="text-[#0ea5e9] font-bold">AWS / Docker</div>
                        <div className="text-[10px] mt-1">Infrastructure</div>
                    </div>
                </div>
            </div>

            {/* 3D Representation Layer */}
            <div className="relative z-10 h-[300px] w-full lg:w-1/3 lg:h-auto flex items-center justify-center pointer-events-none pt-4 lg:pt-0">
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                    <ambientLight intensity={1} color="#ffffff" />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#bae6fd" />
                    <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#0ea5e9" />
                    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                        <Icosahedron args={[1.2, 3]}>
                            <MeshDistortMaterial
                                color="#0ea5e9"
                                distort={0.25}
                                speed={1.5}
                                roughness={0}
                                metalness={0.8}
                                wireframe
                            />
                        </Icosahedron>
                        <Icosahedron args={[0.8, 2]}>
                            <meshStandardMaterial
                                color="#ffffff"
                                emissive="#38bdf8"
                                emissiveIntensity={0.5}
                            />
                        </Icosahedron>
                    </Float>
                </Canvas>
            </div>

        </div>
    );
}
