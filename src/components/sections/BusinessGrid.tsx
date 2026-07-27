"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Heart, Umbrella, Car, Bike, TrendingUp } from "lucide-react";
import { initializeSpotlightEffects } from "@/hooks/useSpotlightEffect";
import { initGsap, prefersReducedMotion, revealOnScroll } from "@/lib/animations";
import InertLink from "@/components/ui/InertLink";

const businessTypes = [
    { icon: Heart, label: "Health Insurance", description: "Comprehensive family & senior plans" },
    { icon: Umbrella, label: "Life Insurance", description: "Term & endowment protection" },
    { icon: Car, label: "Car Insurance", description: "Zero-dep & comprehensive cover" },
    { icon: Bike, label: "Bike Insurance", description: "Instant third-party & own damage" },
    { icon: TrendingUp, label: "Investment", description: "Market-linked wealth growth" },
];

const logos = ["Care Health", "Niva Bupa", "HDFC ERGO", "Star Health", "TATA AIG", "Reliance"];

const BusinessGrid = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        initGsap();

        const disposeSpotlight = prefersReducedMotion()
            ? undefined
            : initializeSpotlightEffects(".business-card", {
                size: 250,
                intensity: 0.1,
                color: "180, 255, 57",
            });

        const ctx = gsap.context(() => {
            revealOnScroll(".business-heading", { y: 30, duration: 0.8 });
            revealOnScroll(".business-card", {
                y: 25,
                duration: 0.7,
                stagger: 0.08,
                trigger: ".business-cards-grid",
                start: "top 85%",
            });
            revealOnScroll(".logo-item", {
                y: 14,
                duration: 0.5,
                stagger: 0.06,
                trigger: ".logo-strip",
                start: "top 92%",
            });
        }, sectionRef);

        return () => {
            disposeSpotlight?.();
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="business-heading reveal text-center mb-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">Our Offerings</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-3xl mx-auto text-white">
                        Built for your financial security
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="business-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
                    {businessTypes.map((item) => (
                        <InertLink
                            key={item.label}
                            className="business-card reveal block glass-card p-8 bg-white/[0.01] border-white/5 hover:border-brand/20 transition-colors duration-300 group no-underline cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-colors">
                                <item.icon size={22} />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-brand transition-colors">{item.label}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                        </InertLink>
                    ))}
                </div>

                {/* Logo Strip */}
                <div className="logo-strip border-t border-white/[0.03] pt-12">
                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
                        Our Insurance Partners
                    </p>
                    <div className="flex justify-center items-center gap-12 flex-wrap">
                        {logos.map((logo) => (
                            <span key={logo} className="logo-item reveal text-sm font-bold text-brand hover:text-white transition-colors cursor-default">
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
