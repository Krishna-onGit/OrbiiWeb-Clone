"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, Cpu, BarChart3, Globe, Users } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Instant Insights",
        description: "Real-time data processing that gives you the edge you need to stay ahead.",
        icon: Zap,
        color: "text-yellow-400",
    },
    {
        title: "Secure by Design",
        description: "Enterprise-grade security built into every layer of our infrastructure.",
        icon: Shield,
        color: "text-blue-400",
    },
    {
        title: "AI-Powered",
        description: "Neural networks that learn from your patterns to optimize performance.",
        icon: Cpu,
        color: "text-purple-400",
    },
    {
        title: "Scaling Tools",
        description: "Effortlessly scale from startup to enterprise with our modular stack.",
        icon: BarChart3,
        color: "text-green-400",
    },
    {
        title: "Global Reach",
        description: "Deploy globally with edge computing that minimizes latency.",
        icon: Globe,
        color: "text-cyan-400",
    },
    {
        title: "Team Sync",
        description: "Collaborate seamlessly with integrated communication tools.",
        icon: Users,
        color: "text-orange-400",
    },
];

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const validCards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
            gsap.from(validCards, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-32 bg-[#0A0B1A]">
            <div className="section-container">
                <div className="text-center mb-20">
                    <h2 className="heading-h2 mb-6">Built for the future of work</h2>
                    <p className="text-secondary text-xl max-w-2xl mx-auto">
                        Everything you need to accelerate your business and streamline your engineering workflow in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.title}
                            ref={(el) => { cardsRef.current[idx] = el; }}
                            className="glass-card p-8 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", feature.color)}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
