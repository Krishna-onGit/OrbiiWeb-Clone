"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calculator, ShieldCheck, HeartPulse, PieChart, Network } from "lucide-react";
import { initGsap, revealOnScroll } from "@/lib/animations";

const nodes = [
    { icon: Calculator, label: "Actuarial Engine", x: 20, y: 30 },
    { icon: ShieldCheck, label: "Underwriting", x: 50, y: 20 },
    { icon: HeartPulse, label: "Claims Processing", x: 80, y: 35 },
    { icon: Network, label: "Distribution", x: 35, y: 70 },
    { icon: PieChart, label: "Reinsurance", x: 65, y: 75 },
];

const InfraSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        initGsap();

        const ctx = gsap.context(() => {
            revealOnScroll(".infra-heading", { y: 30, duration: 0.8 });
            revealOnScroll(".infra-node", {
                y: 16,
                scale: 0.9,
                duration: 0.6,
                stagger: 0.09,
                trigger: ".infra-diagram",
                start: "top 85%",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="infra-heading reveal text-center mb-16 md:mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Insurance Core</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        Modular insurance infrastructure that adapts to your risk profile
                    </h2>
                </div>

                {/*
                 * Node diagram. The absolutely-positioned constellation only works
                 * once there is horizontal room for it, so below `md` the same
                 * nodes stack into a plain grid instead of overlapping.
                 */}
                <div className="infra-diagram relative max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:block md:h-[400px] md:gap-0">
                    {/* Connection Lines */}
                    <svg
                        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <line x1="20" y1="30" x2="50" y2="20" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="50" y1="20" x2="80" y2="35" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="20" y1="30" x2="35" y2="70" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="80" y1="35" x2="65" y2="75" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="35" y1="70" x2="65" y2="75" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="50" y1="20" x2="35" y2="70" stroke="rgba(180,255,57,0.15)" strokeWidth="0.2" />
                        <line x1="50" y1="20" x2="65" y2="75" stroke="rgba(180,255,57,0.15)" strokeWidth="0.2" />
                    </svg>

                    {/*
                     * Positioning lives on the outer wrapper and the reveal tween on
                     * the inner one — GSAP writes to `transform`, so it would other-
                     * wise wipe the `-translate-*` centring the node on its coordinate.
                     */}
                    {nodes.map((node) => (
                        <div
                            key={node.label}
                            className="md:absolute md:-translate-x-1/2 md:-translate-y-1/2"
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        >
                            <div className="infra-node reveal group h-full">
                                <div className="glass-card p-6 bg-white/[0.02] border-white/10 hover:border-brand/40 transition-colors duration-300 cursor-default h-full">
                                    <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand mb-4 group-hover:bg-brand/30 transition-colors">
                                        <node.icon size={22} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-brand transition-colors">
                                        {node.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfraSection;
