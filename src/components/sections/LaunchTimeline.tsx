"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Settings, Zap, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { icon: Settings, title: "Configure", description: "Set up your credit product in our dashboard. Define terms, rates, and eligibility." },
    { icon: Zap, title: "Integrate", description: "Connect via our API. Embed credit workflows directly into your product." },
    { icon: Rocket, title: "Launch", description: "Go live in days, not months. Scale with confidence." },
];

const LaunchTimeline = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".launch-heading",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".launch-heading", start: "top 85%", once: true }
                }
            );

            // Timeline steps stagger
            gsap.fromTo(".timeline-step",
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
                    stagger: 0.15,
                    scrollTrigger: { trigger: ".timeline-steps", start: "top 80%", once: true }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative bg-background border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="launch-heading text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">How It Works</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-4xl mx-auto">
                        Launch lending faster and easier than ever
                    </h2>
                </div>

                {/* Timeline Steps */}
                <div className="timeline-steps grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="timeline-step relative">
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
                                <p className="text-sm text-secondary/60 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Check */}
                <div className="mt-16 flex justify-center items-center gap-3 text-secondary/40">
                    <CheckCircle2 size={18} className="text-brand" />
                    <span className="text-sm font-medium">Average integration time: 3 days</span>
                </div>
            </div>
        </section>
    );
};

export default LaunchTimeline;
