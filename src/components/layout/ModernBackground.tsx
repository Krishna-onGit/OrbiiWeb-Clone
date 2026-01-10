"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ModernBackground = () => {
    const dotsRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Subtle gradient shift
        gsap.to(gradientRef.current, {
            backgroundPosition: "100% 100%",
            duration: 25,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Slow atmospheric drift for dots
        gsap.to(dotsRef.current, {
            y: -30,
            x: 15,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none -z-[20] overflow-hidden bg-background">
            {/* Animated Gradient Layer - Tones derived from brand green */}
            <div
                ref={gradientRef}
                className="absolute inset-0 opacity-30"
                style={{
                    background: "radial-gradient(circle at 10% 20%, rgba(180, 255, 57, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(180, 255, 57, 0.02) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(180, 255, 57, 0.01) 0%, transparent 60%)",
                    backgroundSize: "200% 200%",
                }}
            />

            {/* Faded Sparse Dots */}
            <div
                ref={dotsRef}
                className="absolute inset-x-0 -inset-y-10 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, #B4FF39 1px, transparent 1px)`,
                    backgroundSize: "100px 100px",
                }}
            />

            {/* Low-opacity atmospheric glows */}
            <div className="absolute top-1/3 -left-1/4 w-[60%] h-[60%] bg-brand/5 blur-[160px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/3 -right-1/4 w-[60%] h-[60%] bg-brand/5 blur-[160px] rounded-full mix-blend-screen" />
        </div>
    );
};

export default ModernBackground;
