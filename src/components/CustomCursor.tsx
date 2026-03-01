"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        // Hide default cursor across the entire page body
        document.body.style.cursor = "none";

        // We attach global styled-component/css updates here if we want, but globals.css will also hide standard cursors.

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements
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

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-400 pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_rgba(6,182,212,0.8)] flex justify-center items-center"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isPointer ? 1.8 : 1,
                    borderColor: isPointer ? "rgba(168,85,247,0.8)" : "rgba(6,182,212,0.8)",
                    rotate: isPointer ? 45 : 0,
                    borderRadius: isPointer ? "0%" : "50%",
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            >
                <motion.div
                    className="w-1.5 h-1.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    animate={{
                        scale: isPointer ? 0.5 : 1,
                        borderRadius: isPointer ? "0%" : "50%",
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </>
    );
}
