"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, ShieldCheck, Calculator, LifeBuoy, HeartPulse, Car, Banknote, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";

const navLinks = [
    {
        title: "INSURANCE",
        items: [
            { label: "Health Insurance", icon: HeartPulse, path: ROUTES.insurance.health },
            { label: "Life Insurance", icon: LifeBuoy, path: ROUTES.insurance.term },
            { label: "Car Insurance", icon: Car, path: ROUTES.insurance.car },
            { label: "Other Insurance", icon: Globe, path: ROUTES.insurance.other },
        ]
    },
    {
        title: "INVESTMENT",
        items: [
            { label: "Investment Plans", icon: Banknote, path: ROUTES.insurance.investment },
            { label: "Goal Based", icon: Banknote, path: ROUTES.insurance.investment },
            { label: "Tax Saving", icon: Banknote, path: ROUTES.insurance.investment },
            { label: "Retirement", icon: Banknote, path: ROUTES.insurance.investment },
        ]
    },
    {
        title: "UTILITIES",
        items: [
            { label: "Calculators Hub", icon: Calculator, path: ROUTES.calculators.hub },
            { label: "Premium Calculator", icon: Calculator, path: ROUTES.calculators.premium },
            { label: "Term Selection", icon: Calculator, path: ROUTES.insurance.oneCroreTerm },
            { label: "Dynamic Pricing", icon: Calculator, path: ROUTES.tools.dynamicPricing },
            { label: "Claims Process", icon: ShieldCheck, path: ROUTES.insurance.health },
        ]
    },
    {
        title: "FOR PARTNERS",
        items: [
            { label: "For Insurers", icon: ShieldCheck, path: ROUTES.business.insurers },
            { label: "Actuarial Tech", icon: ShieldCheck, path: ROUTES.tech.actuarial },
            { label: "API Docs", icon: ShieldCheck, path: ROUTES.business.insurers },
            { label: "Resources", icon: Globe, path: ROUTES.home },
            { label: "Contact Us", icon: ShieldCheck, path: ROUTES.home },
        ]
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            // Sensitivity threshold
            if (Math.abs(delta) < 5) return;

            if (delta > 0 && currentScrollY > 100) {
                // Scrolling Down -> Hide by sliding up
                setIsVisible(false);
                setIsOpen(false);
            } else if (delta < 0) {
                // Scrolling Up -> Show by sliding down
                setIsVisible(true);
            }

            // Always show at the very top
            if (currentScrollY < 10) {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
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

    useEffect(() => {
        if (!menuRef.current) return;
        if (isOpen) {
            gsap.fromTo(menuRef.current,
                { opacity: 0, scale: 0.96, y: -8 },
                { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power2.out" }
            );
        } else {
            gsap.to(menuRef.current, {
                opacity: 0,
                scale: 0.96,
                y: -8,
                duration: 0.25,
                ease: "power2.out",
            });
        }
    }, [isOpen]);

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
                    <Link href={ROUTES.home} onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                            <ShieldCheck size={16} className="text-brand" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">Vioratech</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex btn-primary !py-1 !px-3 text-[10px]" onClick={() => { router.push(ROUTES.calculators.hub); setIsOpen(false); }}>
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
                    className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="px-6 pb-6 pt-4 border-t border-white/[0.06]">
                        <div className="grid grid-cols-4 gap-4">
                            {navLinks.map((section, i) => (
                                <div key={i} className="space-y-3">
                                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {section.items.map((item, j) => (
                                            <li key={j}>
                                                <Link
                                                    href={item.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-1.5 text-left text-xs text-secondary/70 hover:text-white font-normal transition-colors duration-200"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                            <span className="text-[10px] text-secondary/50 uppercase tracking-widest">Secure your future?</span>
                            <Link href={ROUTES.insurance.health} onClick={() => setIsOpen(false)} className="group flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors">
                                Get Started <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
