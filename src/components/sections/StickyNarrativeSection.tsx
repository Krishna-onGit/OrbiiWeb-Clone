"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Database, Cpu, BarChart3, ArrowRight, ShieldCheck, FileText, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const narrativeSteps = [
    {
        tag: "Infrastucture",
        title: "Credit infrastructure that scales with your roadmap",
        description: "Orbii provides the modular building blocks to launch any credit product. From revolving lines to structured term loans, our ledger adapts to your complexity.",
        points: ["Modular Ledger managed API", "Multi-currency & Multi-jurisdiction", "Real-time capital flow tracking"],
        icon: Database
    },
    {
        tag: "Decisioning",
        title: "Automated credit decisioning, built for scale.",
        description: "Move beyond manual underwriting. Deploy custom risk models that process bank statements and identity data in milliseconds with 99% accuracy.",
        points: ["Automated bank statement parsing", "Customized risk scorecards", "Sub-second decision latency"],
        icon: Cpu
    },
    {
        tag: "Intelligence",
        title: "Complete borrower intelligence, from day one.",
        description: "Access a 360-degree view of your borrowers. Our intelligence layer aggregates thousands of signals to predict delinquency before it happens.",
        points: ["Live alternative data signals", "Behavioral pattern detection", "Predictive delinquency modeling"],
        icon: BarChart3
    }
];

const StickyNarrativeSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray(".narrative-block");

            // Sync visual steps with text scroll
            blocks.forEach((block: any, i: number) => {
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
        <section ref={sectionRef} className="relative bg-background border-t border-white/[0.03] pt-24 pb-32">
            <div className="section-container">
                {/* 
                  LAYOUT ARCHITECTURE:
                  - Flex container ensures the left side takes up space.
                  - Right side is absolutely positioned to span the FULL height of the section without pushing layout.
                  - This guarantees the 'sticky' card has a long enough track to stay fixed during the entire scroll.
                */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">

                    {/* LEFT COLUMN: Narrative Steps */}
                    {/* Balanced spacing to prevent massive whitespace at the end */}
                    {/* z-30 ensures text is always above the right-side visual */}
                    <div className="w-full md:w-[45%] space-y-[40vh] pb-[20vh] relative z-30">
                        {narrativeSteps.map((step, i) => (
                            <div
                                key={i}
                                className="narrative-block min-h-[40vh] flex flex-col justify-center"
                            >
                                {/* Badge / Section Label - Always bright green */}
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-brand/20 ring-1 ring-brand/40">
                                        <step.icon size={18} className="text-brand" />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand">
                                        {step.tag}
                                    </span>
                                </div>

                                {/* Heading - Always pure white */}
                                <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-8 text-white">
                                    {step.title}
                                </h3>

                                {/* Body Text - High contrast white */}
                                <p className="text-lg leading-relaxed mb-10 max-w-sm text-white/80">
                                    {step.description}
                                </p>

                                {/* Checklist Items - Always visible */}
                                <ul className="space-y-5 mb-12">
                                    {step.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-brand/20">
                                                <Check size={12} className="text-brand" strokeWidth={4} />
                                            </div>
                                            <span className="text-white/80">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link - Always bright green */}
                                <button className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-brand hover:text-white transition-colors duration-300">
                                    Learn More
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Desktop Sticky Layout */}
                    {/* Fixed Height + Sticky Container inside an Absolute Wrapper spanning the section height */}
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
                        <div className="sticky top-[120px] h-[75vh] w-full flex items-center justify-center pl-12 pr-6">
                            <div className="relative w-full aspect-video glass-card bg-[#050505] p-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-white/[0.03] pointer-events-auto">
                                <div className="absolute inset-0 bg-brand/5 blur-[120px] pointer-events-none" />

                                <div className="relative h-full w-full">
                                    {/* Visual 1: Infrastructure */}
                                    <div className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
                                        stepIndex === 0 ? "opacity-100 scale-100 translate-y-0 z-20" : "opacity-0 scale-95 translate-y-8 z-10"
                                    )}>
                                        <div className="grid grid-cols-3 gap-6 w-full h-full">
                                            {['DEX', 'BNPL', 'TARS', 'LOAN', 'LEDGER', 'FX'].map((label, j) => (
                                                <div key={j} className="glass-card bg-white/[0.01] border-white/5 p-6 flex flex-col justify-between hover:border-brand/20 transition-colors">
                                                    <div className="w-9 h-9 rounded-lg bg-brand/5 flex items-center justify-center text-brand mb-4">
                                                        <Database size={16} />
                                                    </div>
                                                    <div className="text-[10px] font-black tracking-widest uppercase opacity-20">{label}</div>
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                                                        <div className="h-full bg-brand w-1/4 animate-pulse" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual 2: Decisioning */}
                                    <div className={cn(
                                        "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
                                        stepIndex === 1 ? "opacity-100 scale-100 translate-y-0 z-20" : "opacity-0 scale-95 translate-y-8 z-10"
                                    )}>
                                        <div className="w-full max-w-sm glass-card bg-black/60 border-brand/10 p-10 shadow-2xl">
                                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-brand">Decision Engine v2</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-brand animate-ping" />
                                                    <span className="text-[10px] font-black text-brand tracking-widest">LIVE</span>
                                                </div>
                                            </div>
                                            <div className="space-y-8">
                                                {[
                                                    { name: "Bank Verification", status: "Verified", icon: FileText },
                                                    { name: "Risk Model", status: "99.2% Score", icon: Cpu },
                                                    { name: "Network Mesh", status: "Encrypted", icon: ShieldCheck }
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

                                    {/* Visual 3: Intelligence */}
                                    <div className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
                                        stepIndex === 2 ? "opacity-100 scale-100 translate-y-0 z-20" : "opacity-0 scale-95 translate-y-8 z-10"
                                    )}>
                                        <div className="w-full h-full grid grid-cols-2 gap-8">
                                            <div className="col-span-2 h-56 glass-card border-white/5 p-8 flex flex-col bg-white/[0.01]">
                                                <div className="flex justify-between items-center mb-8">
                                                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.25em]">Borrower Signals</span>
                                                    <span className="text-[10px] font-black text-brand">TRENDING POSITIVE</span>
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
                                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Avg. Score</span>
                                                <span className="text-5xl font-black text-brand font-mono">812</span>
                                            </div>
                                            <div className="p-8 glass-card border-white/5 flex flex-col justify-between hover:border-brand/20 transition-colors">
                                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Insight</span>
                                                <span className="text-5xl font-black text-brand font-mono">LOAN</span>
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
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-secondary text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StickyNarrativeSection;
