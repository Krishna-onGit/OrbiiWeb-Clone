"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
interface ContentSectionProps {
    title: string;
    description: string;
    points: string[];
    imageSide?: "left" | "right";
}

const ContentSection = ({
    title,
    description,
    points,
    imageSide = "right",
}: ContentSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                x: imageSide === "right" ? -50 : 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                x: imageSide === "right" ? 50 : -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, [imageSide]);

    return (
        <section ref={containerRef} className="py-24 overflow-hidden">
            <div className={`section-container flex flex-col ${imageSide === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16`}>
                <div ref={textRef} className="flex-1">
                    <h2 className="heading-h2 mb-6">{title}</h2>
                    <p className="text-secondary text-lg mb-8">{description}</p>
                    <ul className="space-y-4">
                        {points.map((point) => (
                            <li key={point} className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                <span className="text-white/80">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div ref={imageRef} className="flex-1 w-full aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl" />
                    <div className="relative w-full h-full glass-card overflow-hidden flex items-center justify-center p-8">
                        {/* Using a placeholder visual if no image is provided */}
                        <div className="w-full h-full border border-white/10 rounded-xl bg-white/5 flex items-center justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full border border-primary/30 animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border border-accent-purple/30 animate-ping" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
