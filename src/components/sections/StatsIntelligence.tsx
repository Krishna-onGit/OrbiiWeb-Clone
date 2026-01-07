"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, FileCheck, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 99.2, suffix: "%", label: "Accuracy Rate", icon: TrendingUp },
    { value: 2.4, suffix: "M+", label: "Decisions Made", icon: FileCheck },
    { value: 24, suffix: "ms", label: "Avg Latency", icon: Clock },
    { value: 150, suffix: "+", label: "Enterprise Clients", icon: Users },
];

// Counter component for animating numbers
const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!inView) return;

        if (prefersReducedMotion) {
            setDisplayValue(value);
            return;
        }

        const duration = 1.5;
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const tick = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            setDisplayValue(value * eased);

            if (now < endTime) {
                requestAnimationFrame(tick);
            } else {
                setDisplayValue(value);
            }
        };

        requestAnimationFrame(tick);
    }, [inView, value]);

    const formattedValue = Number.isInteger(value)
        ? Math.round(displayValue)
        : displayValue.toFixed(1);

    return (
        <span className="text-5xl md:text-6xl font-black text-brand font-mono tracking-tighter">
            {formattedValue}{suffix}
        </span>
    );
};

const StatsIntelligence = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".stats-heading",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".stats-heading", start: "top 85%", once: true }
                }
            );

            // Stats cards stagger
            gsap.fromTo(".stat-card",
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
                    stagger: 0.12,
                    scrollTrigger: { trigger: ".stats-grid", start: "top 80%", once: true }
                }
            );

            // Trigger counter animation
            ScrollTrigger.create({
                trigger: ".stats-grid",
                start: "top 75%",
                once: true,
                onEnter: () => setInView(true),
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative bg-background border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="stats-heading text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Intelligence</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-4xl mx-auto">
                        Empowering Decisions with Better Intelligence
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card glass-card p-8 bg-white/[0.01] border-white/5 hover:border-brand/20 transition-all duration-500 text-center"
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center text-brand mx-auto mb-6">
                                <stat.icon size={20} />
                            </div>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                            <p className="text-xs text-secondary/50 uppercase tracking-widest mt-4 font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="mt-20 max-w-2xl mx-auto text-center">
                    <blockquote className="text-xl md:text-2xl text-secondary/80 leading-relaxed italic mb-6">
                        &quot;Orbii&apos;s decisioning engine reduced our underwriting time by 90% while improving accuracy.&quot;
                    </blockquote>
                    <p className="text-sm text-secondary/40 font-bold">— Head of Credit, Fortune 500 Fintech</p>
                </div>
            </div>
        </section>
    );
};

export default StatsIntelligence;
