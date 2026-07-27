"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight, ShieldCheck } from "lucide-react";
import HeroSpline from "./HeroSpline";
import InertLink from "@/components/ui/InertLink";
import { initGsap, prefersReducedMotion } from "@/lib/animations";

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        initGsap();

        const ctx = gsap.context(() => {
            // `.reveal` hides these in CSS, so reduced motion still has to
            // explicitly put them back rather than simply skipping the tween.
            if (prefersReducedMotion()) {
                gsap.set(".reveal", { opacity: 1, y: 0 });
                return;
            }

            gsap.timeline({ defaults: { ease: "power2.out", duration: 0.9 } })
                .fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.15 })
                .fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
                .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.85")
                .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.85")
                .fromTo(".hero-nav", { opacity: 0 }, { opacity: 1, duration: 0.9 }, "-=0.6")
                .fromTo(".hero-visual", { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center pt-16 pb-8">
            {/* 3D background — code-split and loaded only when the browser is idle */}
            <HeroSpline />


            <div className="section-container text-center relative z-10 w-full flex flex-col items-center">
                {/* Badge */}
                <div className="hero-badge reveal inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold tracking-wide mb-4">
                    <span>Life</span>
                    <span className="opacity-30">·</span>
                    <span>Health</span>
                    <span className="opacity-30">·</span>
                    <span>General</span>
                </div>

                {/* Title */}
                <h1 className="hero-title reveal text-3xl md:text-5xl lg:text-6xl font-black mb-3 max-w-4xl mx-auto !leading-[1.1] text-white">
                    The future of <br /> Intelligent Insurance
                </h1>

                {/* Subheading */}
                <p className="hero-sub reveal text-sub max-w-2xl mx-auto mb-6 text-xs md:text-sm opacity-80">
                    AI-powered technology for modern risk management. <br className="hidden md:block" />
                    Protect your future with data-driven insights and smart coverage.
                </p>

                <div className="hero-cta reveal flex justify-center mb-8">
                    <InertLink className="btn-primary inline-flex items-center gap-3 !px-6 !py-3 text-sm uppercase cursor-pointer">
                        Explore all Insurance <MoveRight size={16} />
                    </InertLink>
                </div>

                {/* Hero Sub-nav */}
                <div className="hero-nav reveal flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-8 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-secondary/60">
                    {["Digital Life", "Health Care", "Motor Protection", "Investments"].map((item) => (
                        <InertLink key={item} className="hover:text-brand cursor-pointer transition-colors">
                            {item}
                        </InertLink>
                    ))}
                </div>

                {/* Abstract Dashboard Visual */}
                <div className="hero-visual reveal max-w-3xl mx-auto w-full group relative mb-2">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-transparent blur opacity-25 group-hover:opacity-40 transition" />
                    <div className="relative glass-card bg-black/60 h-40 md:h-56 p-4 md:p-6 flex border-white/[0.08]">
                        {/* Left Side: Claim Settlement */}
                        <div className="flex-1 flex flex-col justify-center items-start text-left">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-[10px] md:border-[14px] border-brand/10 relative flex flex-col items-center justify-center">
                                <ShieldCheck size={28} className="text-brand mb-1 md:mb-2" strokeWidth={2.5} />
                                <div className="text-xl md:text-2xl font-bold leading-none">99%</div>
                                <div className="absolute -bottom-3 bg-black px-3 py-1 rounded-full border border-white/10 text-[8px] uppercase tracking-widest text-brand whitespace-nowrap">Claims Settled</div>
                            </div>
                        </div>

                        {/* Right Side: Data List */}
                        <div className="flex-1 flex flex-col justify-center space-y-3 md:space-y-4 text-left">
                            {[
                                { label: "Insurance Coverage", val: "₹1 Crore+" },
                                { label: "Monthly Premium", val: "From ₹499" },
                                { label: "Hospital Network", val: "10,000+" },
                                { label: "Tax Benefit (80C)", val: "Up to ₹1.5L" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-1 md:pb-2">
                                    <span className="text-[10px] md:text-xs font-medium text-secondary">{item.label}</span>
                                    <span className="text-[10px] md:text-xs font-bold text-foreground">{item.val}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
