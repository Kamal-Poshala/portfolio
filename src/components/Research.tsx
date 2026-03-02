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
                <meshBasicMaterial color="#0f0f14" transparent opacity={0.6} />
            </Sphere>

            {/* Language Nodes */}
            {points.map((pos, idx) => (
                <mesh key={idx} position={pos}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshBasicMaterial color="#3b82f6" />
                </mesh>
            ))}

            {/* Transformer Architecture Layers (Lines) */}
            {lines.map((line, idx) => (
                <Line key={idx} points={line} color="#1e3a8a" lineWidth={0.5} transparent opacity={0.3} />
            ))}

            {/* Internal Core */}
            <Sphere args={[1, 32, 32]}>
                <meshStandardMaterial color="#3b82f6" emissive="#1e3a8a" emissiveIntensity={0.5} wireframe />
            </Sphere>

            <Preload all />
        </group>
    );
}

export default function Research() {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto rounded-lg bg-[#0f0f14]/80 border border-[#1e3a8a]/30 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e2029] border border-[#1e3a8a]/40 text-[#9ca3af] font-mono text-xs uppercase tracking-widest w-max">
                    <Grid className="w-3 h-3 text-[#3b82f6]" />
                    Research & Publications
                </div>

                <h3 className="text-3xl lg:text-4xl text-white font-light uppercase tracking-wide">
                    Multilingual NLP
                </h3>

                <p className="border-l-2 border-[#3b82f6] pl-4 text-[#d1d5db] font-light leading-relaxed">
                    Designed and deployed a high-performance multilingual analysis engine leveraging transformer-based models (mBERT) for accurate polarization detection and sentiment analysis across 22 complex languages without performance degradation.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#0a0a0f] border border-[#1e3a8a]/30 p-4">
                        <Network className="w-5 h-5 text-[#3b82f6] mb-3" />
                        <h4 className="text-white text-sm font-medium">Vector Extraction</h4>
                        <p className="text-[#9ca3af] text-xs font-mono mt-1 w-full max-w-[150px]">
                            High-dimensional representations
                        </p>
                    </div>
                    <div className="bg-[#0a0a0f] border border-[#1e3a8a]/30 p-4">
                        <Binary className="w-5 h-5 text-[#3b82f6] mb-3" />
                        <h4 className="text-white text-sm font-medium">Cross-Lingual Zero-Shot</h4>
                        <p className="text-[#9ca3af] text-xs font-mono mt-1 w-full max-w-[150px]">
                            Transformer-based NLP
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <a href="/multilingual.pdf" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 border border-[#3b82f6]/40 text-[#ffffff] font-medium text-xs font-mono tracking-widest uppercase hover:bg-[#1e3a8a]/20 hover:border-[#3b82f6] transition-all">
                        View Research Data
                    </a>
                </div>
            </div>

            {/* Right Side: Neural Network Globe 3D Canvas */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_60%)] pointer-events-none" />
                <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                    <ambientLight intensity={0.5} color="#e0e7ff" />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
                    <NeuralNetworkGlobe />
                </Canvas>
            </div>
        </div>
    );
}
