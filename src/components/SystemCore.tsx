"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line, Preload, Trail, Float } from "@react-three/drei";
import * as THREE from "three";

function Satellite({ radius, speed, color, startAngle }: { radius: number; speed: number; color: string; startAngle: number }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime() * speed + startAngle;
            ref.current.position.x = Math.cos(t) * radius;
            ref.current.position.z = Math.sin(t) * radius;
            ref.current.position.y = Math.sin(t * 2) * (radius * 0.2); // slight orbital tilt variation
        }
    });

    return (
        <Trail width={0.5} color={color} length={4} decay={1} attenuation={(t) => t * t}>
            <Sphere ref={ref} args={[0.08, 16, 16]}>
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
            </Sphere>
        </Trail>
    );
}

function ConnectionPaths({ radius }: { radius: number }) {
    return (
        <group rotation={[Math.PI / 2, 0, 0]}>
            <Line
                points={(() => {
                    const pts = [];
                    for (let i = 0; i <= 64; i++) {
                        const angle = (i / 64) * Math.PI * 2;
                        pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
                    }
                    return pts;
                })()}
                color="#e0f2fe"
                lineWidth={1}
                transparent
                opacity={0.6}
            />
        </group>
    );
}

export default function SystemCore() {
    const coreRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (coreRef.current) {
            coreRef.current.rotation.y += 0.005;
            coreRef.current.rotation.x += 0.002;
        }
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Central Core Element */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Sphere ref={coreRef} args={[1.2, 32, 32]}>
                    <meshStandardMaterial color="#baeffd" wireframe transparent opacity={0.3} />
                </Sphere>
                <Sphere args={[0.8, 32, 32]}>
                    <meshStandardMaterial color="#ffffff" />
                </Sphere>
                {/* Core Glow */}
                <pointLight color="#0ea5e9" intensity={2} distance={5} decay={2} />
                <Sphere args={[0.82, 32, 32]}>
                    <meshBasicMaterial color="#0ea5e9" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
                </Sphere>
            </Float>

            {/* Orbiting Service Nodes (Satellites) */}
            <Satellite radius={2.5} speed={0.4} color="#0ea5e9" startAngle={0} />
            <Satellite radius={3.5} speed={0.25} color="#38bdf8" startAngle={2} />
            <Satellite radius={4.5} speed={0.15} color="#7dd3fc" startAngle={4} />

            {/* Orbital Data Paths */}
            <ConnectionPaths radius={2.5} />
            <ConnectionPaths radius={3.5} />
            <ConnectionPaths radius={4.5} />

            <Preload all />
        </group>
    );
}
