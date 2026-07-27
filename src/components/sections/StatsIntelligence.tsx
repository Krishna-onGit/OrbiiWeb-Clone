"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, ShieldCheck, Clock } from "lucide-react";
import { initGsap, prefersReducedMotion, revealOnScroll } from "@/lib/animations";

const stats = [
    { value: 99.1, suffix: "%", label: "Claim Settlement", icon: ShieldCheck },
    { value: 27, suffix: "M+", label: "Customers Trusted", icon: Users },
    { value: 15, suffix: "K+", label: "Network Hospitals", icon: TrendingUp },
    { value: 1, suffix: "Hr", label: "Avg. Approval", icon: Clock },
];

const DURATION_MS = 1500;

/**
 * Count-up driven by rAF timestamps rather than `Date.now()`, so it stays in
 * step with the compositor and stops cleanly if the section unmounts mid-run.
 */
const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!inView) return;

        if (prefersReducedMotion()) {
            setDisplayValue(value);
            return;
        }

        let frame = 0;
        let start: number | null = null;

        const tick = (now: number) => {
            start ??= now;
            const progress = Math.min((now - start) / DURATION_MS, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setDisplayValue(value * eased);

            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    const formattedValue = Number.isInteger(value) ? Math.round(displayValue) : displayValue.toFixed(1);

    return (
        <span className="text-5xl md:text-6xl font-black text-brand font-mono tracking-tighter tabular-nums">
            {formattedValue}
            {suffix}
        </span>
    );
};

const StatsIntelligence = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        initGsap();

        const ctx = gsap.context(() => {
            revealOnScroll(".stats-heading", { y: 30, duration: 0.8 });
            revealOnScroll(".stat-card", {
                y: 25,
                duration: 0.7,
                stagger: 0.1,
                trigger: ".stats-grid",
                start: "top 85%",
            });
            revealOnScroll(".stats-quote", { y: 20, duration: 0.7, start: "top 92%" });

            ScrollTrigger.create({
                trigger: ".stats-grid",
                start: "top 80%",
                once: true,
                onEnter: () => setInView(true),
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="stats-heading reveal text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Our Impact</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-4xl mx-auto text-white">
                        Trusted by millions for financial security
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="stat-card reveal glass-card p-8 bg-white/[0.01] border-white/5 hover:border-brand/20 transition-colors duration-300 text-center"
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
                <div className="stats-quote reveal mt-20 max-w-2xl mx-auto text-center">
                    <blockquote className="text-xl md:text-2xl text-secondary/80 leading-relaxed italic mb-6">
                        &quot;Insurely&apos;s instant policy issuance and transparent claim process gave our family the
                        peace of mind we never had before.&quot;
                    </blockquote>
                    <p className="text-sm text-brand font-bold">— Rahul Sharma, Policyholder since 2022</p>
                </div>
            </div>
        </section>
    );
};

export default StatsIntelligence;
