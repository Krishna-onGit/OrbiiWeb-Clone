"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    {
        title: "Products",
        items: ["Credit Engine", "Risk Intelligence", "Ledger API", "Decisioning"]
    },
    {
        title: "Solutions",
        items: ["BNPL", "SME Lending", "Revenue Finance", "Embedded Credit"]
    },
    {
        title: "Developers",
        items: ["API Docs", "SDK", "Webhooks", "Sandbox"]
    },
    {
        title: "Company",
        items: ["About", "Careers", "Blog", "Contact"]
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const scrollThreshold = 10;

    // Scroll direction detection for hide/show navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            // Ignore small deltas to prevent flicker
            if (Math.abs(delta) < scrollThreshold) return;

            if (delta > 0 && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false);
                setIsOpen(false); // Close menu when hiding
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animate navbar visibility
    useEffect(() => {
        if (!navRef.current) return;

        gsap.to(navRef.current, {
            y: isVisible ? 0 : "-120%",
            opacity: isVisible ? 1 : 0.8,
            duration: 0.4,
            ease: "power2.out",
        });
    }, [isVisible]);

    // Animate menu open/close
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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[496px] max-w-[calc(100vw-32px)]"
        >
            {/* Main Navbar Container */}
            <div className={cn(
                "relative glass-card bg-black/80 backdrop-blur-xl border-white/[0.06] transition-all duration-300",
                isOpen ? "rounded-3xl" : "rounded-full"
            )}>
                {/* Header Row */}
                <div className="flex items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                            <Zap size={16} className="text-brand" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">orbii</span>
                    </Link>

                    {/* Right Side: CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex btn-primary !py-2 !px-5 text-xs">
                            Book a Demo
                        </button>

                        {/* Hamburger / Close Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="relative w-5 h-4 flex flex-col justify-center items-center">
                                {/* Top Line */}
                                <span
                                    className={cn(
                                        "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                                    )}
                                />
                                {/* Middle Line */}
                                <span
                                    className={cn(
                                        "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                                    )}
                                />
                                {/* Bottom Line */}
                                <span
                                    className={cn(
                                        "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                                    )}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Expanded Menu Content */}
                <div
                    ref={menuRef}
                    className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="px-6 pb-6 pt-4 border-t border-white/[0.06]">
                        {/* Nav Links Grid - Titles in a row, content below */}
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
                                                    href="#"
                                                    className="text-xs text-secondary/70 hover:text-white font-normal transition-colors duration-200"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                            <span className="text-[10px] text-secondary/50 uppercase tracking-widest">Ready to scale?</span>
                            <Link href="#" className="group flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors">
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
