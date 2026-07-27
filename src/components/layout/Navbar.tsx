"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { ArrowRight, ShieldCheck } from "lucide-react";
import InertLink from "@/components/ui/InertLink";

const navLinks = [
    {
        title: "INSURANCE",
        items: ["Health Insurance", "Life Insurance", "Car Insurance", "Other Insurance"],
    },
    {
        title: "INVESTMENT",
        items: ["Investment Plans", "Goal Based", "Tax Saving", "Retirement"],
    },
    {
        title: "UTILITIES",
        items: ["Calculators Hub", "Premium Calculator", "Term Selection", "Dynamic Pricing", "Claims Process"],
    },
    {
        title: "FOR PARTNERS",
        items: ["For Insurers", "Actuarial Tech", "API Docs", "Resources", "Contact Us"],
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        let ticking = false;

        // Reads are batched into a single rAF so fast scrolling never triggers
        // layout reads (and React re-renders) more than once per frame.
        const update = () => {
            ticking = false;
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            // Sensitivity threshold
            if (Math.abs(delta) < 5) return;
            lastScrollY.current = currentScrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (delta > 0 && currentScrollY > 100) {
                // Scrolling Down -> Hide by sliding up
                setIsVisible(false);
                setIsOpen(false);
            } else if (delta < 0) {
                // Scrolling Up -> Show by sliding down
                setIsVisible(true);
            }
        };

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!navRef.current) return;
        gsap.to(navRef.current, {
            y: isVisible ? 0 : "-130%",
            opacity: isVisible ? 1 : 0,
            duration: 0.4,
            ease: "power2.inOut",
        });
    }, [isVisible]);


    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[496px] max-w-[calc(100vw-32px)]"
        >
            <div className={cn(
                "relative glass-card bg-black/80 backdrop-blur-xl border-white/[0.06] transition-all duration-300",
                isOpen ? "rounded-3xl" : "rounded-full"
            )}>
                <div className="flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2 group select-none">
                        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                            <ShieldCheck size={16} className="text-brand" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">Insurely</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button type="button" className="hidden sm:flex btn-primary !py-1 !px-3 text-[10px]">
                            Calculator Premiums
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="relative w-5 h-4 flex flex-col justify-center items-center">
                                <span className={cn("absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300", isOpen ? "rotate-45" : "-translate-y-1.5")} />
                                <span className={cn("absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300", isOpen ? "opacity-0" : "opacity-100")} />
                                <span className={cn("absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300", isOpen ? "-rotate-45" : "translate-y-1.5")} />
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    ref={menuRef}
                    aria-hidden={!isOpen}
                    className={cn(
                        "overflow-hidden transition-[max-height,opacity] duration-300 ease-out will-change-[max-height]",
                        isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    )}
                >
                    <div className="px-6 pb-6 pt-4 border-t border-white/[0.06]">
                        <div className="grid grid-cols-4 gap-4">
                            {navLinks.map((section, i) => (
                                <div key={i} className="space-y-3">
                                    {/* `!` beats the global `h1-h6 { font-weight: 100 !important }` */}
                                    <h4 className="text-[10px] !font-bold uppercase tracking-[0.2em] text-brand/90">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li key={item}>
                                                <InertLink className="flex items-center gap-1.5 text-left text-xs text-white/75 hover:text-white font-normal transition-colors duration-200 cursor-pointer">
                                                    {item}
                                                </InertLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                            <span className="text-[10px] text-white/55 uppercase tracking-widest">Secure your future?</span>
                            <InertLink className="group flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors cursor-pointer">
                                Get Started <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                            </InertLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
