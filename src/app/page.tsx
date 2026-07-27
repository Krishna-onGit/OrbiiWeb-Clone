"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";

import { initGsap, revealOnScroll } from "@/lib/animations";
import InertLink from "@/components/ui/InertLink";
import Hero from "@/components/sections/Hero";
import InfraSection from "@/components/sections/InfraSection";
import StickyNarrativeSection from "@/components/sections/StickyNarrativeSection";
import BusinessGrid from "@/components/sections/BusinessGrid";
import LaunchTimeline from "@/components/sections/LaunchTimeline";
import StatsIntelligence from "@/components/sections/StatsIntelligence";
import DevSection from "@/components/sections/DevSection";

export default function Home() {
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initGsap();

    const ctx = gsap.context(() => {
      revealOnScroll(".cta-heading", { y: 30, duration: 0.8 });
      revealOnScroll(".cta-buttons", { y: 20, duration: 0.7, delay: 0.1, start: "top 92%" });
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
          <h2 className="cta-heading reveal heading-hero text-4xl md:text-6xl mb-10 max-w-4xl mx-auto">
            The future of <br /> Intelligent Insurance
          </h2>
          <div className="cta-buttons reveal flex flex-col sm:flex-row justify-center items-center gap-6">
            <InertLink className="btn-primary !px-10 !py-4 cursor-pointer">Start Now</InertLink>
            <InertLink className="btn-ghost inline-flex items-center gap-2 !px-10 !py-4 cursor-pointer">
              View Calculators <MoveRight size={18} />
            </InertLink>
          </div>
        </div>
      </section>
    </>
  );
}
