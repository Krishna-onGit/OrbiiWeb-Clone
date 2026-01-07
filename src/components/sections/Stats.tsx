"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Active Users", value: 50, suffix: "K+" },
    { label: "Data Processed", value: 12, suffix: "PB" },
    { label: "Uptime SLA", value: 99.9, suffix: "%" },
    { label: "Integrations", value: 200, suffix: "+" },
];

const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const el = ref.current;
            if (!el) return;

            ScrollTrigger.create({
                trigger: el,
                start: "top 90%",
                onEnter: () => {
                    const obj = { val: 0 };
                    gsap.to(obj, {
                        val: value,
                        duration: 2,
                        ease: "power3.out",
                        onUpdate: () => setCount(obj.val),
                    });
                },
                once: true,
            });
        });

        return () => ctx.revert();
    }, [value]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold mb-2">
            {count.toFixed(value % 1 === 0 ? 0 : 1)}
            {suffix}
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0A0B1A] to-[#0D0E25]">
            <div className="section-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <StatCounter value={stat.value} suffix={stat.suffix} />
                            <div className="text-white/40 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
