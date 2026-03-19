"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    // Smooth physics configuration
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(position.x, springConfig);
    const cursorY = useSpring(position.y, springConfig);

    useEffect(() => {
        // Enforce dark mode auto body cursor handling
        if (window.matchMedia("(pointer: fine)").matches) {
            document.body.style.cursor = "none";
        }

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") !== null ||
                target.closest("button") !== null
            );
        };

        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
            document.body.style.cursor = "auto";
        };
    }, []);

    useEffect(() => {
        cursorX.set(position.x);
        cursorY.set(position.y);
    }, [position, cursorX, cursorY]);

    return (
        <>
            {/* Precise standard dot tracking instantly */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-[#0ea5e9]"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: isPointer ? 1.5 : 1,
                    opacity: position.x === -100 ? 0 : 1
                }}
                transition={{ type: "tween", duration: 0 }}
            />

            {/* Glowing, smooth trailing aura ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#0ea5e9]/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 2 : 1,
                    backgroundColor: isPointer ? "rgba(14, 165, 233, 0.2)" : "transparent",
                    borderColor: isPointer ? "rgba(14, 165, 233, 0.8)" : "rgba(14, 165, 233, 0.4)",
                    opacity: position.x === -100 ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
