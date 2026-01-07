"use client";

import { motion } from "framer-motion";
import { Landmark, Rocket, ShieldCheck } from "lucide-react";

const audiences = [
    {
        title: "Fintech Lenders",
        description: "Modernize your lending stack with modular infrastructure built for speed.",
        icon: Rocket,
    },
    {
        title: "Neobanks",
        description: "Launch complex credit cards and personal loans within your existing app.",
        icon: Landmark,
    },
    {
        title: "Embedded Credit",
        description: "Integrate lending into your platform to increase user LTV and retention.",
        icon: ShieldCheck,
    }
];

const AudienceBlocks = () => {
    return (
        <section className="py-24 bg-section-glow border-y border-border/50">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="heading-h2 mb-4">Built for every stage</h2>
                    <p className="text-muted">From seed-stage startups to established financial institutions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiences.map((a, idx) => (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            whileHover={{ y: -4 }}
                            className="p-8 border border-border bg-surface hover:border-brand/20 transition-all cursor-default rounded-xl"
                        >
                            <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center mb-6">
                                <a.icon className="text-brand w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{a.title}</h3>
                            <p className="text-secondary/80 leading-relaxed text-sm">
                                {a.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceBlocks;
