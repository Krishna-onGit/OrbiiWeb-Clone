"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Search, Scale, FileCheck, CheckCircle2 } from "lucide-react";
import { initGsap, revealOnScroll } from "@/lib/animations";

const steps = [
    { icon: Search, title: "Select Product", description: "Choose from Health, Life, Car, or Investment plans tailored to your needs." },
    { icon: Scale, title: "Compare Quotes", description: "Get real-time quotes from top-rated insurers and compare benefits instantly." },
    { icon: FileCheck, title: "Instant Policy", description: "Complete digital KYC and get your policy issued in less than 60 seconds." },
];

const LaunchTimeline = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        initGsap();

        const ctx = gsap.context(() => {
            revealOnScroll(".launch-heading", { y: 30, duration: 0.8 });
            revealOnScroll(".timeline-step", {
                y: 25,
                duration: 0.7,
                stagger: 0.12,
                trigger: ".timeline-steps",
                start: "top 85%",
            });
            revealOnScroll(".launch-note", { y: 12, duration: 0.6, start: "top 95%" });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="launch-heading reveal text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Process</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-4xl mx-auto text-white">
                        Get insured in three simple steps
                    </h2>
                </div>

                {/* Timeline Steps */}
                <div className="timeline-steps grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={step.title} className="timeline-step reveal relative">
                            {/* Connector Line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-brand/30 to-transparent" />
                            )}

                            <div className="glass-card p-10 bg-white/[0.01] border-white/5 hover:border-brand/20 transition-all duration-500 text-center relative z-10">
                                {/* Step Number */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand text-black text-xs font-black flex items-center justify-center">
                                    {i + 1}
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mx-auto mb-6">
                                    <step.icon size={26} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Check */}
                <div className="launch-note reveal mt-16 flex justify-center items-center gap-3 text-white/20">
                    <CheckCircle2 size={18} className="text-brand" />
                    <span className="text-sm font-medium text-brand">Average issuance time: 58 seconds</span>
                </div>
            </div>
        </section>
    );
};

export default LaunchTimeline;
