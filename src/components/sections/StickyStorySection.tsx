"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, BarChart3, Cpu, Database, Network } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const storyBlocks = [
    {
        title: "Unified credit infrastructure",
        description: "Launch complex credit products in weeks. Our modular infrastructure handles the complexity of ledgers, compliance, and capital flows so you don't have to.",
        points: ["Multi-jurisdictional ledgers", "Real-time compliance", "API-first architecture"],
        icon: Network
    },
    {
        title: "Automated decisioning engine",
        description: "Scale your throughput without growing headcount. Deploy custom risk models and automated approval workflows that execute in milliseconds.",
        points: ["Custom risk logic", "ML-driven approvals", "Automated rejections"],
        icon: Cpu
    },
    {
        title: "Deep borrower intelligence",
        description: "Stop relying on static data. Our intelligence layer aggregates thousands of real-time signals to provide a 360-degree view of borrower health.",
        points: ["Alternative data signals", "Fraud detection", "Predictive delinquency"],
        icon: BarChart3
    }
];

const VisualState = ({ index }: { index: number }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] glass-card border-white/[0.08] bg-black/40 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-brand/5 blur-3xl opacity-20 pointer-events-none" />

            {/* Infrastructure Visual */}
            <div className={cn(
                "absolute inset-0 transition-all duration-700 ease-fintech flex items-center justify-center p-8",
                index === 0 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
            )}>
                <div className="w-full max-w-sm space-y-6">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
                            <Database size={20} className="text-brand" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-secondary uppercase tracking-widest">Global Ledger</div>
                            <div className="text-sm font-bold">CORE_INFRA_V2</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                            <div className="text-[10px] text-brand uppercase font-bold tracking-tighter">Availability</div>
                            <div className="text-xl font-bold">99.99%</div>
                        </div>
                        <div className="h-24 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                            <div className="text-[10px] text-secondary uppercase font-bold tracking-tighter">Sync Latency</div>
                            <div className="text-xl font-bold">14ms</div>
                        </div>
                    </div>
                    <div className="h-32 bg-white/[0.01] border border-white/5 rounded-xl p-4 relative overflow-hidden">
                        <div className="flex gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-brand/20" />
                            <div className="w-2 h-2 rounded-full bg-brand/20" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                            <div className="h-1.5 w-1/2 bg-white/5 rounded" />
                            <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decisioning Visual */}
            <div className={cn(
                "absolute inset-0 transition-all duration-700 ease-fintech flex items-center justify-center p-8",
                index === 1 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
            )}>
                <div className="w-full max-w-sm">
                    <div className="glass-card bg-black/60 border-brand/20 p-6 relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-brand uppercase px-2 py-0.5 border border-brand/30 rounded">Processing</div>
                        <h4 className="text-sm font-bold mb-6">Risk Workflow: Tier 1</h4>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Zap size={14} className={i === 1 ? "text-brand" : "text-secondary"} />
                                    </div>
                                    <div className="flex-1 space-y-1.5">
                                        <div className="h-1.5 w-1/3 bg-white/20 rounded" />
                                        <div className="h-1 w-2/3 bg-white/5 rounded" />
                                    </div>
                                    <div className={cn("text-[10px] font-bold uppercase", i === 1 ? "text-brand" : "text-secondary")}>
                                        {i === 1 ? "Passed" : "Queued"}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                            <div className="text-xs text-secondary">Decision Score</div>
                            <div className="text-lg font-mono font-bold text-brand">0.942</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intelligence Visual */}
            <div className={cn(
                "absolute inset-0 transition-all duration-700 ease-fintech flex items-center justify-center p-8",
                index === 2 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
            )}>
                <div className="w-full max-w-sm space-y-6">
                    <div className="h-48 glass-card bg-black/40 border-white/10 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-bold text-secondary uppercase">Signals Detected</span>
                            <span className="text-[10px] font-bold text-brand">LIVE DATA</span>
                        </div>
                        <div className="flex-1 flex items-end gap-1.5">
                            {[40, 60, 45, 90, 65, 85, 30, 75, 55, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-brand/20 rounded-t-sm" style={{ height: `${h}%` }}>
                                    {h > 80 && <div className="w-full h-full bg-brand/40 animate-pulse" />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 glass-card border-white/5 text-center">
                            <div className="text-[10px] text-secondary uppercase font-bold mb-1">Risk Bias</div>
                            <div className="text-lg font-bold">Negative</div>
                        </div>
                        <div className="p-4 glass-card border-white/5 text-center">
                            <div className="text-[10px] text-secondary uppercase font-bold mb-1">Fraud Hub</div>
                            <div className="text-lg font-bold text-brand">Secure</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StickyStorySection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const displayIndex = useRef(0);
    const [reactIndex, setReactIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray(".story-block");

            blocks.forEach((block: any, i: number) => {
                ScrollTrigger.create({
                    trigger: block,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        displayIndex.current = i;
                        window.dispatchEvent(new CustomEvent("scroll-index-change", { detail: i }));
                    },
                    onEnterBack: () => {
                        displayIndex.current = i;
                        window.dispatchEvent(new CustomEvent("scroll-index-change", { detail: i }));
                    }
                });

                gsap.fromTo(block,
                    { opacity: 0.3, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: block,
                            start: "top 80%",
                            end: "top 40%",
                            scrub: true,
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleIndexChange = (e: any) => setReactIndex(e.detail);
        window.addEventListener("scroll-index-change", handleIndexChange);
        return () => window.removeEventListener("scroll-index-change", handleIndexChange);
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-background">
            <div className="section-container">
                <div className="flex flex-col md:flex-row gap-20">
                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-1/2 py-[30vh]">
                        {storyBlocks.map((block, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "story-block min-h-[60vh] flex flex-col justify-center transition-colors duration-700 mb-20 md:mb-0",
                                    reactIndex === i ? "text-white" : "text-secondary/40"
                                )}
                            >
                                <div className="inline-flex items-center gap-2 mb-6 text-brand">
                                    <block.icon size={24} strokeWidth={2.5} />
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">0{i + 1}</span>
                                </div>
                                <h2 className="heading-h2 mb-6 leading-tight">
                                    {block.title}
                                </h2>
                                <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                                    {block.description}
                                </p>
                                <ul className="space-y-4">
                                    {block.points.map((point) => (
                                        <li key={point} className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-colors",
                                                reactIndex === i ? "bg-brand" : "bg-secondary/20"
                                            )} />
                                            <span className="text-sm font-bold uppercase tracking-widest">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Visual */}
                    <div className="hidden md:block w-1/2">
                        <div className="sticky top-[120px] pt-10">
                            <VisualState index={reactIndex} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Visual Support (Static version for mobile) */}
            <div className="md:hidden section-container pb-20">
                <VisualState index={reactIndex} />
            </div>
        </section>
    );
};

export default StickyStorySection;
