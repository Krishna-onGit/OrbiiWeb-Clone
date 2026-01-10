"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

import Hero from "@/components/sections/Hero";
import InfraSection from "@/components/sections/InfraSection";
import StickyNarrativeSection from "@/components/sections/StickyNarrativeSection";
import BusinessGrid from "@/components/sections/BusinessGrid";
import LaunchTimeline from "@/components/sections/LaunchTimeline";
import StatsIntelligence from "@/components/sections/StatsIntelligence";
import DevSection from "@/components/sections/DevSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // CTA Section entry animation
      gsap.fromTo(".cta-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ".cta-heading", start: "top 85%", once: true }
        }
      );

      gsap.fromTo(".cta-buttons",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          delay: 0.15,
          scrollTrigger: { trigger: ".cta-buttons", start: "top 90%", once: true }
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Hero />
      <InfraSection />
      <StickyNarrativeSection />
      <BusinessGrid />
      <LaunchTimeline />
      <StatsIntelligence />
      <DevSection />
      <section ref={ctaRef} className="py-32 relative overflow-hidden">
        <div className="section-container text-center">
          <h2 className="cta-heading heading-hero text-4xl md:text-6xl mb-10 max-w-4xl mx-auto">
            The future of <br /> Intelligent Insurance
          </h2>
          <div className="cta-buttons flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href={ROUTES.insurance.health} className="btn-primary !px-10 !py-4">Start Now</Link>
            <Link href={ROUTES.calculators.hub} className="btn-ghost flex items-center gap-2 !px-10 !py-4">
              View Calculators <MoveRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
