"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight, ShieldCheck } from "lucide-react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

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
        <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center pt-16 pb-8">
            {/* 3D Spline Background */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Spline
                    scene="https://prod.spline.design/Qh7B3uJXfzvTIqol/scene.splinecode"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>


            <div className="section-container text-center relative z-10 w-full flex flex-col items-center">
                {/* Badge */}
                <div ref={badgeRef} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold tracking-wide mb-4">
                    <span>Life</span>
                    <span className="opacity-30">·</span>
                    <span>Health</span>
                    <span className="opacity-30">·</span>
                    <span>General</span>
                </div>

                {/* Title */}
                <h1 ref={titleRef} className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 max-w-4xl mx-auto !leading-[1.1] text-white">
                    The future of <br /> Intelligent Insurance
                </h1>

                {/* Subheading */}
                <p ref={subRef} className="text-sub max-w-2xl mx-auto mb-6 text-xs md:text-sm opacity-80">
                    AI-powered technology for modern risk management. <br className="hidden md:block" />
                    Protect your future with data-driven insights and smart coverage.
                </p>

                <div ref={ctaRef} className="flex justify-center mb-8">
                    <Link href={ROUTES.insurance.index} className="btn-primary flex items-center gap-3 !px-6 !py-3 text-sm uppercase">
                        Explore all Insurance <MoveRight size={16} />
                    </Link>
                </div>

                {/* Hero Sub-nav */}
                <div ref={navRef} className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mb-8 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-secondary/60">
                    <Link href={ROUTES.insurance.term} className="hover:text-brand cursor-pointer transition-colors">Digital Life</Link>
                    <Link href={ROUTES.insurance.health} className="hover:text-brand cursor-pointer transition-colors">Health Care</Link>
                    <Link href={ROUTES.insurance.car} className="hover:text-brand cursor-pointer transition-colors">Motor Protection</Link>
                    <Link href={ROUTES.insurance.investment} className="hover:text-brand cursor-pointer transition-colors">Investments</Link>
                </div>

                {/* Abstract Dashboard Visual */}
                <div ref={visualRef} className="max-w-3xl mx-auto w-full group relative mb-2">
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
