"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Zap, MessageSquare, Fingerprint } from "lucide-react";
import NextImage from "next/image";

gsap.registerPlugin(ScrollTrigger);


const features = [
    { icon: Target, label: "ML Risk Scoring" },
    { icon: Zap, label: "Automated Underwriting" },
    { icon: MessageSquare, label: "24/7 AI Assistance" },
    { icon: Fingerprint, label: "Digital KYC" },
];

const DevSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".dev-heading",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".dev-heading", start: "top 85%", once: true }
                }
            );

            // AI Platform Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".ai-platform-container",
                    start: "top 92%", // Starts just before entering viewport
                    once: true
                }
            });

            tl.fromTo(".ai-platform-card",
                { opacity: 0, y: 100, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.4,
                    ease: "expo.out"
                }
            ).fromTo(".ai-platform-img",
                { opacity: 0, y: 60 },
                {
                    opacity: 0.9,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out"
                },
                "-=1.1" // Staggered delay relative to container
            );

            // Features stagger
            gsap.fromTo(".dev-feature",
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: { trigger: ".dev-features", start: "top 85%", once: true }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="dev-heading text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">AI Powered</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-3xl mx-auto text-white">
                        Experience the AI Hub
                    </h2>
                    <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto">
                        Real-time risk assessment and policy indexing powered by proprietary ML models.
                    </p>
                </div>

                {/* AI Interface Image */}
                <div className="ai-platform-container max-w-5xl mx-auto mb-16 px-4">
                    <div className="ai-platform-card glass-card bg-[#0a0a0a]/40 border-white/[0.08] overflow-hidden rounded-3xl shadow-2xl relative group">
                        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                                <div className="w-3 h-3 rounded-full bg-green-500/40" />
                            </div>
                            <span className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] ml-4">Vioratech Intelligence Platform v4.0</span>
                        </div>
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60" />
                            <NextImage
                                src="/images/viroaTech_ai_img.png"
                                alt="Vioratech AI Analysis Interface"
                                width={1200}
                                height={800}
                                className="ai-platform-img w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="dev-features flex flex-wrap justify-center gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="dev-feature flex items-center gap-3 px-6 py-3 glass-card bg-white/[0.01] border-white/5 hover:border-brand/20 transition-colors"
                        >
                            <feature.icon size={18} className="text-brand" />
                            <span className="text-sm font-medium text-white/80">{feature.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevSection;
