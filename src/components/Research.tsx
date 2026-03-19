"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line, Preload } from "@react-three/drei";
import * as THREE from "three";
import { Grid, Network, Binary } from "lucide-react";
import { Canvas } from "@react-three/fiber";

function NeuralNetworkGlobe() {
    const groupRef = useRef<THREE.Group>(null);

    // Create static nodes for languages
    const numNodes = 30;
    const radius = 2.5;

    const points = [];
    const lines = [];

    for (let i = 0; i < numNodes; i++) {
        const phi = Math.acos(-1 + (2 * i) / numNodes);
        const theta = Math.sqrt(numNodes * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        points.push(new THREE.Vector3(x, y, z));
    }

    // Connect close nodes to form interconnected transformer architecture
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (points[i].distanceTo(points[j]) < 2.0) {
                lines.push([points[i], points[j]]);
            }
        }
    }

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Outer shell representation */}
            <Sphere args={[2.4, 32, 32]}>
                <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
            </Sphere>

            {/* Language Nodes */}
            {points.map((pos, idx) => (
                <mesh key={idx} position={pos}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshBasicMaterial color="#0ea5e9" />
                </mesh>
            ))}

            {/* Transformer Architecture Layers (Lines) */}
            {lines.map((line, idx) => (
                <Line key={idx} points={line} color="#bae6fd" lineWidth={0.5} transparent opacity={0.5} />
            ))}

            {/* Internal Core */}
            <Sphere args={[1, 32, 32]}>
                <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.5} wireframe />
            </Sphere>

            <Preload all />
        </group>
    );
}

export default function Research() {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto rounded-lg bg-white/50 border border-[#0ea5e9]/20 p-8 shadow-[0_4px_30px_rgba(14,165,233,0.05)] overflow-hidden">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50/80 border border-[#0ea5e9]/30 text-slate-500 font-mono text-xs uppercase tracking-widest w-max">
                    <Grid className="w-3 h-3 text-[#0ea5e9]" />
                    Academic Implementations
                </div>

                <h3 className="text-3xl lg:text-4xl text-slate-900 font-light uppercase tracking-wide">
                    Multilingual NLP Engine
                </h3>

                <p className="border-l-2 border-[#0ea5e9] pl-4 text-slate-600 font-light leading-relaxed">
                    Designed and built an academic proof-of-concept multilingual analysis engine leveraging transformer-based models (mBERT) for polarization detection and sentiment analysis across 22 complex languages without performance degradation.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-50/80 border border-[#0ea5e9]/20 p-4 hover:-translate-y-1 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all cursor-default">
                        <Network className="w-5 h-5 text-[#0ea5e9] mb-3" />
                        <h4 className="text-slate-900 text-sm font-medium">Vector Extraction</h4>
                        <p className="text-slate-500 text-xs font-mono mt-1 w-full max-w-[150px]">
                            High-dimensional representations
                        </p>
                    </div>
                    <div className="bg-slate-50/80 border border-[#0ea5e9]/20 p-4 hover:-translate-y-1 hover:shadow-md hover:border-[#0ea5e9]/40 transition-all cursor-default">
                        <Binary className="w-5 h-5 text-[#0ea5e9] mb-3" />
                        <h4 className="text-slate-900 text-sm font-medium">Cross-Lingual Zero-Shot</h4>
                        <p className="text-slate-500 text-xs font-mono mt-1 w-full max-w-[150px]">
                            Transformer-based NLP
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <a href="/multilingual.pdf" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 border border-[#0ea5e9]/40 text-slate-900 font-medium text-xs font-mono tracking-widest uppercase hover:bg-[#e0f2fe] hover:border-[#0ea5e9] transition-all">
                        View Engine Architecture
                    </a>
                </div>
            </div>

            {/* Right Side: Neural Network Globe 3D Canvas */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_60%)] pointer-events-none" />
                <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                    <ambientLight intensity={1.5} color="#ffffff" />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#bae6fd" />
                    <NeuralNetworkGlobe />
                </Canvas>
            </div>
        </div>
    );
}
