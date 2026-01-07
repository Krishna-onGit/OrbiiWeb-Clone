"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Copy, Check, Terminal, Code2, Webhook, FileJson } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const codeSnippet = `import { Orbii } from '@orbii/sdk';

const orbii = new Orbii({ apiKey: process.env.ORBII_KEY });

// Create a credit decision in milliseconds
const decision = await orbii.decisions.create({
  borrower_id: 'bor_123abc',
  product: 'working_capital',
  amount: 50000,
});

console.log(decision.status); // 'approved'`;

const features = [
    { icon: Terminal, label: "REST & GraphQL APIs" },
    { icon: Webhook, label: "Real-time Webhooks" },
    { icon: FileJson, label: "OpenAPI Spec" },
    { icon: Code2, label: "TypeScript SDK" },
];

const DevSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".dev-heading",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".dev-heading", start: "top 85%", once: true }
                }
            );

            // Code block animation
            gsap.fromTo(".code-block",
                { opacity: 0, y: 25, scale: 0.98 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out",
                    scrollTrigger: { trigger: ".code-block", start: "top 80%", once: true }
                }
            );

            // Features stagger
            gsap.fromTo(".dev-feature",
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: { trigger: ".dev-features", start: "top 85%", once: true }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative bg-background border-t border-white/[0.03]">
            <div className="section-container">
                {/* Heading */}
                <div className="dev-heading text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">For Developers</span>
                    <h2 className="heading-hero text-4xl md:text-6xl max-w-3xl mx-auto">
                        Built for modern dev teams
                    </h2>
                    <p className="text-secondary/60 text-lg mt-6 max-w-xl mx-auto">
                        Ship credit products faster with our developer-first APIs and SDKs.
                    </p>
                </div>

                {/* Code Block */}
                <div className="code-block max-w-3xl mx-auto mb-16">
                    <div className="glass-card bg-[#0a0a0a] border-white/[0.06] overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.01]">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                </div>
                                <span className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest ml-2">index.ts</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-xs text-secondary/50 hover:text-brand transition-colors"
                            >
                                {copied ? <Check size={14} className="text-brand" /> : <Copy size={14} />}
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                        {/* Code */}
                        <pre className="p-6 text-sm font-mono text-secondary/80 overflow-x-auto leading-relaxed">
                            <code>{codeSnippet}</code>
                        </pre>
                    </div>
                </div>

                {/* Features */}
                <div className="dev-features flex flex-wrap justify-center gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="dev-feature flex items-center gap-3 px-6 py-3 glass-card bg-white/[0.01] border-white/5 hover:border-brand/20 transition-colors"
                        >
                            <feature.icon size={18} className="text-brand" />
                            <span className="text-sm font-medium text-white/80">{feature.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevSection;
