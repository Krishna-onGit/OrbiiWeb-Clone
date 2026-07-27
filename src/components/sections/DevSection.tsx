"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Target, Zap, MessageSquare, Fingerprint } from "lucide-react";
import { initGsap, revealOnScroll } from "@/lib/animations";
import IsometricStack from "./IsometricStack";

const features = [
    { icon: Target, label: "ML Risk Scoring" },
    { icon: Zap, label: "Automated Underwriting" },
    { icon: MessageSquare, label: "24/7 AI Assistance" },
    { icon: Fingerprint, label: "Digital KYC" },
];

const DevSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        initGsap();

        const ctx = gsap.context(() => {
            revealOnScroll(".dev-heading", { y: 30, duration: 0.8 });
            revealOnScroll(".dev-visual", { y: 60, duration: 1, start: "top 92%" });
            revealOnScroll(".dev-feature", {
                y: 20,
                duration: 0.6,
                stagger: 0.08,
                trigger: ".dev-features",
                start: "top 90%",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="dev-heading reveal text-center mb-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">AI Powered</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-3xl mx-auto text-white">
                        Experience the AI Hub
                    </h2>
                    <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto">
                        Real-time risk assessment and policy indexing powered by proprietary ML models.
                    </p>
                </div>

                {/* Isometric pipeline visual */}
                <div className="dev-visual reveal max-w-3xl mx-auto mb-16">
                    <IsometricStack />
                </div>

                {/* Features */}
                <div className="dev-features flex flex-wrap justify-center gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.label}
                            className="dev-feature reveal flex items-center gap-3 px-6 py-3 glass-card bg-white/[0.01] border-white/5 hover:border-brand/20 transition-colors"
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
