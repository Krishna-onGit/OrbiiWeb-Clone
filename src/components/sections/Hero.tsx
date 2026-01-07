"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight, Play } from "lucide-react";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.9 } });

            tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3 })
                .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
                .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.9")
                .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
                .fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
                .fromTo(visualRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden bg-beams min-h-screen flex flex-col items-center">
            {/* Background Aurora */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-orbii-glow -z-10" />

            <div className="section-container text-center relative z-10">
                {/* Badge */}
                <div ref={badgeRef} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[13px] font-bold tracking-wide mb-10">
                    <span>Pre-seed</span>
                    <span className="opacity-30">·</span>
                    <span>Seed</span>
                    <span className="opacity-30">·</span>
                    <span>Fintech</span>
                </div>

                {/* Title */}
                <h1 ref={titleRef} className="heading-hero mb-8 max-w-4xl mx-auto">
                    The infrastructure for <br /> Modern B2B Lending
                </h1>

                {/* Subheading */}
                <p ref={subRef} className="text-sub max-w-2xl mx-auto mb-12">
                    Orbii provides modular credit infrastructure that helps you <br className="hidden md:block" />
                    deploy, manage and scale complex credit products.
                </p>

                {/* Primary CTA */}
                <div ref={ctaRef} className="flex justify-center mb-16">
                    <button className="btn-primary flex items-center gap-3 !px-8 !py-4 text-base">
                        Chat with us <MoveRight size={18} />
                    </button>
                </div>

                {/* Hero Sub-nav */}
                <div ref={navRef} className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-20 text-sm font-bold uppercase tracking-widest text-secondary/60">
                    <span className="hover:text-brand cursor-pointer transition-colors">Infrastructure</span>
                    <span className="hover:text-brand cursor-pointer transition-colors">Intelligence</span>
                    <span className="hover:text-brand cursor-pointer transition-colors">Decisioning</span>
                    <span className="hover:text-brand cursor-pointer transition-colors">Launch</span>
                </div>

                {/* Abstract Dashboard Visual */}
                <div ref={visualRef} className="max-w-4xl mx-auto w-full group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-transparent blur opacity-25 group-hover:opacity-40 transition" />
                    <div className="relative glass-card bg-black/60 aspect-video md:aspect-[21/9] p-6 md:p-10 flex border-white/[0.08]">
                        {/* Left Side: Pie Chart Placeholder */}
                        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6">
                            <div className="w-48 h-48 rounded-full border-[16px] border-brand/10 relative flex items-center justify-center">
                                <div className="absolute inset-x-0 h-[16px] bg-brand -rotate-45" />
                                <div className="text-2xl font-bold">74%</div>
                            </div>
                        </div>

                        {/* Right Side: Data List */}
                        <div className="flex-1 flex flex-col justify-center space-y-6 text-left">
                            {[
                                { label: "Revenue Efficiency", val: "84%" },
                                { label: "Asset Performance", val: "92%" },
                                { label: "Yield (Gross) IRR", val: "22%" },
                                { label: "Delinquency Rate", val: "1.4%" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2">
                                    <span className="text-sm font-medium text-secondary">{item.label}</span>
                                    <span className="text-sm font-bold text-foreground">{item.val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Floating Play Button Over the Visual */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-[0_0_30px_rgba(180,255,57,0.4)] cursor-pointer hover:scale-110 transition-transform">
                                <Play fill="black" size={24} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
