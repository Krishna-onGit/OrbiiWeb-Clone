"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Umbrella, Car, Bike, TrendingUp } from "lucide-react";
import { initializeSpotlightEffects } from "@/hooks/useSpotlightEffect";

gsap.registerPlugin(ScrollTrigger);


import Link from "next/link";
import { ROUTES } from "@/config/routes";

const businessTypes = [
    { icon: Heart, label: "Health Insurance", description: "Comprehensive family & senior plans", path: ROUTES.insurance.health },
    { icon: Umbrella, label: "Life Insurance", description: "Term & endowment protection", path: ROUTES.insurance.term },
    { icon: Car, label: "Car Insurance", description: "Zero-dep & comprehensive cover", path: ROUTES.insurance.car },
    { icon: Bike, label: "Bike Insurance", description: "Instant third-party & own damage", path: ROUTES.insurance.car }, // Motor Insurance
    { icon: TrendingUp, label: "Investment", description: "Market-linked wealth growth", path: ROUTES.insurance.investment },
];

const logos = ["Care Health", "Niva Bupa", "HDFC ERGO", "Star Health", "TATA AIG", "Reliance"];

const BusinessGrid = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            initializeSpotlightEffects('.business-card', {
                size: 250,
                intensity: 0.1,
                color: '180, 255, 57'
            });

            // Heading animation

            gsap.fromTo(".business-heading",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".business-heading", start: "top 85%", once: true }
                }
            );

            // Cards stagger animation
            gsap.fromTo(".business-card",
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: { trigger: ".business-cards-grid", start: "top 80%", once: true }
                }
            );

            // Logo strip animation
            gsap.fromTo(".logo-item",
                { opacity: 0, y: 15 },
                {
                    opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
                    stagger: 0.08,
                    scrollTrigger: { trigger: ".logo-strip", start: "top 90%", once: true }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="business-heading text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Our Offerings</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-3xl mx-auto text-white">
                        Built for your financial security
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="business-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
                    {businessTypes.map((item, i) => (
                        <Link
                            key={i}
                            href={item.path}
                            className="business-card block glass-card p-8 bg-white/[0.01] border-white/5 hover:border-brand/20 transition-all duration-500 group no-underline"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-colors">
                                <item.icon size={22} />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-brand transition-colors">{item.label}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                        </Link>
                    ))}
                </div>

                {/* Logo Strip */}
                <div className="logo-strip border-t border-white/[0.03] pt-12">
                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
                        Our Insurance Partners
                    </p>
                    <div className="flex justify-center items-center gap-12 flex-wrap">
                        {logos.map((logo, i) => (
                            <span key={i} className="logo-item text-sm font-bold text-brand hover:text-white transition-colors cursor-default">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessGrid;
