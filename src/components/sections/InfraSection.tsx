"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Shield, Zap, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
    { icon: Database, label: "Ledger", x: 20, y: 30 },
    { icon: Shield, label: "Risk Engine", x: 50, y: 20 },
    { icon: Zap, label: "Decisioning", x: 80, y: 35 },
    { icon: Globe, label: "Multi-Jurisdiction", x: 35, y: 70 },
    { icon: Database, label: "Capital Flow", x: 65, y: 75 },
];

const InfraSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".infra-heading",
                { opacity: 0.4, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".infra-heading", start: "top 85%", once: true }
                }
            );

            // Node diagram animation with stagger
            gsap.fromTo(".infra-node",
                { opacity: 0.4, scale: 0.8 },
                {
                    opacity: 1, scale: 1, duration: 0.6, ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: { trigger: ".infra-diagram", start: "top 80%", once: true }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative bg-background border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="infra-heading text-center mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Core Infrastructure</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        Modular credit infrastructure that adapts to your complexity
                    </h2>
                </div>

                {/* Node Diagram */}
                <div className="infra-diagram relative max-w-4xl mx-auto h-[400px]">
                    {/* Connection Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="20" y1="30" x2="50" y2="20" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="50" y1="20" x2="80" y2="35" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="20" y1="30" x2="35" y2="70" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="80" y1="35" x2="65" y2="75" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="35" y1="70" x2="65" y2="75" stroke="rgba(180,255,57,0.2)" strokeWidth="0.3" />
                        <line x1="50" y1="20" x2="35" y2="70" stroke="rgba(180,255,57,0.15)" strokeWidth="0.2" />
                        <line x1="50" y1="20" x2="65" y2="75" stroke="rgba(180,255,57,0.15)" strokeWidth="0.2" />
                    </svg>

                    {/* Nodes */}
                    {nodes.map((node, i) => (
                        <div
                            key={i}
                            className="infra-node absolute transform -translate-x-1/2 -translate-y-1/2 group"
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        >
                            <div className="glass-card p-6 bg-white/[0.02] border-white/10 hover:border-brand/40 transition-all duration-500 cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand mb-4 group-hover:bg-brand/30 transition-colors">
                                    <node.icon size={22} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-brand transition-colors">
                                    {node.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfraSection;
