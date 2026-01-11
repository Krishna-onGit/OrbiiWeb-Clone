"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Shield, TrendingUp, HeartPulse, ArrowRight, Database } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";
import { ROUTES } from "@/config/routes";

const narrativeSteps = [
    {
        tag: "Protection",
        title: "Comprehensive health coverage for every life stage",
        description: "Vioratech provides modular insurance plans that adapt to your family's needs. From individual basic health to comprehensive multi-person floaters, we protect what matters most.",
        points: ["10,000+ Network Hospitals", "Cashless Claim Processing", "Lifetime Renewability"],
        icon: Shield,
        path: ROUTES.insurance.health
    },
    {
        tag: "Investment",
        title: "Wealth creation with guaranteed protection",
        description: "Our investment-linked insurance plans offer the best of both worlds. Grow your capital with high-return fund options while ensuring financial security for your loved ones.",
        points: ["ULIP & Endowment Options", "Tax Benefits under Sec 80D", "Guaranteed Maturity Returns"],
        icon: TrendingUp,
        path: ROUTES.insurance.investment
    },
    {
        tag: "Claims",
        title: "Sub-second claim processing & assistance",
        description: "Experience the industry's fastest claim settlement. Our AI-driven engine verifies documents in real-time, ensuring you get the support you need when you need it most.",
        points: ["99.1% Settlement Ratio", "Dedicated Claim Managers", "Instant Cashless Approval"],
        icon: HeartPulse,
        path: ROUTES.insurance.health // Claims process is integrated here
    }
];

const StickyNarrativeSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray(".narrative-block") as HTMLElement[];

            // Sync visual steps with text scroll
            blocks.forEach((block: HTMLElement, i: number) => {
                ScrollTrigger.create({
                    trigger: block,
                    start: "top center",
                    end: "bottom center",
                    onToggle: (self) => {
                        if (self.isActive) setStepIndex(i);
                    },
                    onEnter: () => setStepIndex(i),
                    onEnterBack: () => setStepIndex(i),
                });

                // Simple fade animation - starts at 40% opacity, fades to 100%
                gsap.fromTo(block,
                    { opacity: 0.4 },
                    {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 80%",
                            end: "top 50%",
                            scrub: true,
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative border-t border-white/[0.03] pt-24 pb-32">
            <div className="section-container">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">

                    {/* LEFT COLUMN: Narrative Steps */}
                    <div className="w-full md:w-[45%] space-y-[40vh] pb-[20vh] relative z-30">
                        {narrativeSteps.map((step, i) => (
                            <div
                                key={i}
                                className="narrative-block min-h-[40vh] flex flex-col justify-center"
                            >
                                {/* Badge / Section Label */}
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-brand/20 ring-1 ring-brand/40">
                                        <step.icon size={18} className="text-brand" />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand">
                                        {step.tag}
                                    </span>
                                </div>

                                {/* Heading */}
                                <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-8 text-white">
                                    {step.title}
                                </h3>

                                {/* Body Text */}
                                <p className="text-lg leading-relaxed mb-10 max-w-sm text-white/80">
                                    {step.description}
                                </p>

                                {/* Checklist Items */}
                                <ul className="space-y-5 mb-12">
                                    {step.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/70">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-brand/20">
                                                <Check size={12} className="text-brand" strokeWidth={4} />
                                            </div>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link */}
                                <Link href={step.path || ROUTES.home} className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-brand hover:text-white transition-colors duration-300">
                                    Learn More
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Desktop Sticky Layout */}
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
                        <div className="sticky top-[120px] h-[75vh] w-full flex items-center justify-center pl-12 pr-6">
                            <div className="relative w-full aspect-video glass-card bg-[#050505] p-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-white/[0.03] pointer-events-auto">
                                <div className="absolute inset-0 bg-brand/5 blur-[120px] pointer-events-none" />

                                <div className="relative h-full w-full">
                                    {/* Visual 1: Protection */}
                                    <div className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
                                        stepIndex === 0 ? "opacity-100 scale-100 translate-y-0 z-20" : "opacity-0 scale-95 translate-y-8 z-10"
                                    )}>
                                        <div className="grid grid-cols-3 gap-6 w-full h-full">
                                            {['FAMILY', 'HNI', 'SENIOR', 'CRITICAL', 'DENTAL', 'AYUSH'].map((label, j) => (
                                                <div key={j} className="glass-card bg-white/[0.01] border-white/5 p-6 flex flex-col justify-between hover:border-brand/20 transition-colors">
                                                    <div className="w-9 h-9 rounded-lg bg-brand/5 flex items-center justify-center text-brand mb-4">
                                                        <Shield size={16} />
                                                    </div>
                                                    <div className="text-[10px] font-black tracking-widest uppercase opacity-20 text-white">{label}</div>
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                                                        <div className="h-full bg-brand w-3/4 animate-pulse" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual 2: Investment */}
                                    <div className={cn(
                                        "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
                                        stepIndex === 1 ? "opacity-100 scale-100 translate-y-0 z-20" : "opacity-0 scale-95 translate-y-8 z-10"
                                    )}>
                                        <div className="w-full max-w-sm glass-card bg-black/60 border-brand/10 p-10 shadow-2xl">
                                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-brand">Vioratech Growth v2</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-brand animate-ping" />
                                                    <span className="text-[10px] font-black text-brand tracking-widest">FUND LIVE</span>
                                                </div>
                                            </div>
                                            <div className="space-y-8">
                                                {[
                                                    { name: "Blue Chip Fund", status: "14.2% p.a.", icon: TrendingUp },
                                                    { name: "Multi-Cap", status: "18.5% p.a.", icon: Database },
                                                    { name: "Mid-Cap", status: "22.1% p.a.", icon: TrendingUp }
                                                ].map((item, j) => (
                                                    <div key={j} className="flex items-center justify-between group">
                                                        <div className="flex items-center gap-4">
                                                            <item.icon size={16} className="text-secondary/60 group-hover:text-brand transition-colors" />
                                                            <span className="text-sm font-bold text-white/80">{item.name}</span>
                                                        </div>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand">{item.status}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual 3: Claims */}
                                    <div className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
                                        stepIndex === 2 ? "opacity-100 scale-100 translate-y-0 z-20" : "opacity-0 scale-95 translate-y-8 z-10"
                                    )}>
                                        <div className="w-full h-full grid grid-cols-2 gap-8">
                                            <div className="col-span-2 h-56 glass-card border-white/5 p-8 flex flex-col bg-white/[0.01]">
                                                <div className="flex justify-between items-center mb-8">
                                                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.25em]">Claim Volume</span>
                                                    <span className="text-[10px] font-black text-brand">SETTLED IN SECONDS</span>
                                                </div>
                                                <div className="flex-1 flex items-end gap-3">
                                                    {[40, 70, 45, 90, 60, 85, 30, 75, 55, 95].map((h, j) => (
                                                        <div key={j} className="flex-1 bg-brand/10 rounded-t-sm relative">
                                                            <div className="absolute bottom-0 left-0 right-0 bg-brand/30" style={{ height: `${h}%` }} />
                                                            {j === 9 && <div className="absolute -top-1 left-0 right-0 h-1 bg-brand shadow-[0_0_10px_#B4FF39]" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-8 glass-card border-white/5 flex flex-col justify-between hover:border-brand/20 transition-colors">
                                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Settlement</span>
                                                <span className="text-4xl font-black text-brand font-mono">99.1%</span>
                                            </div>
                                            <div className="p-8 glass-card border-white/5 flex flex-col justify-between hover:border-brand/20 transition-colors">
                                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Network</span>
                                                <span className="text-4xl font-black text-brand font-mono">15K+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden section-container flex flex-col space-y-16 pb-20">
                {narrativeSteps.map((step, i) => (
                    <div key={i} className="space-y-8 p-8 glass-card border-white/5">
                        <div className="flex items-center gap-3 text-brand">
                            <step.icon size={20} />
                            <span className="text-[10px] font-black uppercase tracking-widest">{step.tag}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-white/60 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StickyNarrativeSection;
