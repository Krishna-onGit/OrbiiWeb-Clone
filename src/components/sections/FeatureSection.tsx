"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
    title: string;
    description: string;
    points: string[];
    isReversed?: boolean;
}

const FeatureSection = ({ title, description, points, isReversed }: FeatureSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                x: isReversed ? 30 : -30,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.from(visualRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [isReversed]);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
            <div className={`section-container flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                {/* Text Content */}
                <div ref={textRef} className="flex-1 space-y-8">
                    <h2 className="heading-h2">{title}</h2>
                    <p className="text-muted text-lg leading-relaxed">
                        {description}
                    </p>
                    <ul className="space-y-4">
                        {points.map((point) => (
                            <li key={point} className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="text-brand w-3 h-3" strokeWidth={3} />
                                </div>
                                <span className="text-foreground/90 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Placeholder */}
                <div ref={visualRef} className="flex-1 w-full aspect-[4/3] glass-panel p-6 relative flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-brand/5 blur-3xl -z-10" />
                    <div className="w-full space-y-4">
                        <div className="h-2 w-1/3 bg-border rounded" />
                        <div className="h-32 w-full bg-surface border border-border rounded-lg" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-16 bg-surface border border-border rounded-lg" />
                            <div className="h-16 bg-surface border border-border rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
