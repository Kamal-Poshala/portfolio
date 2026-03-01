"use client";

import { useEffect, useRef } from "react";

export default function FluidBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // @ts-expect-error No typings available for webgl-fluid
        import("webgl-fluid").then((module) => {
            if (!canvasRef.current) return;
            const webGLFluidEnhanced = module.default;

            webGLFluidEnhanced(canvasRef.current, {
                IMMEDIATE: true,
                TRIGGER: 'hover',
                SIM_RESOLUTION: 128,
                DYE_RESOLUTION: 512,
                DENSITY_DISSIPATION: 2.5,
                VELOCITY_DISSIPATION: 2.0,
                PRESSURE: 0.1,
                PRESSURE_ITERATIONS: 20,
                CURL: 15,
                SPLAT_RADIUS: 0.4,
                SPLAT_FORCE: 6000,
                SHADING: true,
                COLORFUL: true,
                COLOR_UPDATE_SPEED: 10,
                PAUSED: false,
                BACK_COLOR: { r: 3, g: 3, b: 8 }, // match #030308
                TRANSPARENT: false,
                BLOOM: true,
                BLOOM_ITERATIONS: 8,
                BLOOM_RESOLUTION: 256,
                BLOOM_INTENSITY: 0.8,
                BLOOM_THRESHOLD: 0.6,
                BLOOM_SOFT_KNEE: 0.7,
                SUNRAYS: true,
                SUNRAYS_RESOLUTION: 196,
                SUNRAYS_WEIGHT: 1.0,
            });
        });

        const handlePointerMove = (e: MouseEvent) => {
            if (!canvasRef.current || e.target === canvasRef.current) return;

            const event = new MouseEvent('mousemove', {
                clientX: e.clientX,
                clientY: e.clientY,
                bubbles: true,
                cancelable: true,
                view: window
            });
            canvasRef.current.dispatchEvent(event);
        };

        window.addEventListener('mousemove', handlePointerMove);

        return () => {
            window.removeEventListener('mousemove', handlePointerMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-[100vh]"
            style={{ width: "100%", height: "100%", touchAction: "none", zIndex: -3 }}
        />
    );
}
