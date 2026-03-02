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
                DENSITY_DISSIPATION: 4.0, // High dissipation for less chaos
                VELOCITY_DISSIPATION: 4.0, // Subdued fluid motion
                PRESSURE: 0.1,
                PRESSURE_ITERATIONS: 10,
                CURL: 0, // No chaotic curl
                SPLAT_RADIUS: 0.1, // Small interaction area
                SPLAT_FORCE: 2000,
                SHADING: false, // Flat minimal shading
                COLORFUL: false, // Monochrome
                COLOR_UPDATE_SPEED: 0,
                PAUSED: false,
                BACK_COLOR: { r: 15, g: 15, b: 20 }, // Charcoal Black #0f0f14
                TRANSPARENT: false,
                BLOOM: false, // Turn off bloom for enterprise clean look
                SUNRAYS: false,
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
