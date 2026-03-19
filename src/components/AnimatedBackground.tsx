"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);

        class Snowflake {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 0.8 + 0.2;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                if (this.y > h) {
                    this.y = 0 - this.size;
                    this.x = Math.random() * w;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                // Slate / off-white snow to be subtle on bright background
                ctx.fillStyle = `rgba(100, 116, 139, ${this.opacity})`;
                ctx.fill();
            }
        }

        class RiverParticle {
            baseX: number;
            baseY: number;
            x: number;
            y: number;
            size: number;
            speed: number;
            angle: number;
            angleSpeed: number;
            amplitude: number;
            color: string;
            opacity: number;

            constructor(initRandomX: boolean = false) {
                const riverThickness = w * 0.4; // width of the river band
                const randomBand = (Math.random() - 0.5) * riverThickness;
                const startDist = initRandomX ? Math.random() * w : -100;

                // y = x * (h/w) creates a perfect diagonal Top-Left to Bottom-Right
                this.baseX = startDist;
                this.baseY = startDist * (h / w) + randomBand;

                this.x = this.baseX;
                this.y = this.baseY;

                this.speed = Math.random() * 2 + 0.5;

                this.angle = Math.random() * Math.PI * 2;
                this.angleSpeed = Math.random() * 0.04 + 0.01;
                this.amplitude = Math.random() * 25 + 5;

                const riverColors = ['#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9'];
                this.color = riverColors[Math.floor(Math.random() * riverColors.length)];
                this.opacity = Math.random() * 0.5 + 0.2;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                // dx and dy normalize movement along the exact corner-to-corner diagonal
                const dx = 1;
                const dy = h / w;

                this.baseX += dx * this.speed;
                this.baseY += dy * this.speed;

                this.angle += this.angleSpeed;
                const wave = Math.sin(this.angle) * this.amplitude;

                // Perpendicular wave displacement to standard diagonal flow
                this.x = this.baseX - dy * wave;
                this.y = this.baseY + dx * wave;

                if (this.baseX > w + 100 || this.baseY > h + 100) {
                    // Re-spawn tightly at the top left
                    this.baseX = -100;
                    const riverThickness = w * 0.4;
                    this.baseY = this.baseX * (h / w) + (Math.random() - 0.5) * riverThickness;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                // Applying color with the designed opacity
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;

                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();

                ctx.globalAlpha = 1.0; // reset
                ctx.shadowBlur = 0; // reset
            }
        }

        let snowflakes: Snowflake[] = [];
        let riverParticles: RiverParticle[] = [];

        function init() {
            snowflakes = [];
            riverParticles = [];

            const numSnow = Math.min((w * h) / 8000, 200);
            for (let i = 0; i < numSnow; i++) {
                snowflakes.push(new Snowflake());
            }

            const numRiver = Math.min((w * h) / 6000, 250);
            for (let i = 0; i < numRiver; i++) {
                // The boolean `true` populates them randomly across the screen instantly
                riverParticles.push(new RiverParticle(true));
            }
        }

        let animationFrameId: number;

        function animate() {
            if (!ctx) return;
            // Completely bright pure light mode background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < snowflakes.length; i++) {
                snowflakes[i].update();
                snowflakes[i].draw();
            }

            for (let i = 0; i < riverParticles.length; i++) {
                riverParticles[i].update();
                riverParticles[i].draw();

                // Connect very close river particles to look like flowing water/data streams
                for (let j = i; j < riverParticles.length; j++) {
                    const dx = riverParticles[i].x - riverParticles[j].x;
                    const dy = riverParticles[i].y - riverParticles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 50) {
                        ctx.beginPath();
                        // Bright blue stream linkage 
                        const a = 1 - (distance / 50);
                        ctx.strokeStyle = `rgba(14, 165, 233, ${a * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(riverParticles[i].x, riverParticles[i].y);
                        ctx.lineTo(riverParticles[j].x, riverParticles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-2] pointer-events-none"
        />
    );
}
