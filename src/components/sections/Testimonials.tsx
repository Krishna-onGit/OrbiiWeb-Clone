"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Orbii has completely transformed how our engineering team handles observability. The AI insights are scary accurate.",
        author: "Sarah Chen",
        role: "CTO at NexusFlow",
    },
    {
        quote: "The interface is beautiful, but the speed is what really sold us. It's the first tool that actually keeps up with our deploy cycle.",
        author: "Marcus Thorne",
        role: "VP Engineering at CloudScale",
    },
    {
        quote: "We were able to cut our infrastructure costs by 30% within the first month of using the automated scaling engine.",
        author: "Elena Rodriguez",
        role: "DevOps Lead at FinTech Global",
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-[#0A0B1A]" id="customers">
            <div className="section-container">
                <div className="text-center mb-20">
                    <h2 className="heading-h2">What industry leaders say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 relative"
                        >
                            <Quote className="text-primary/20 absolute top-8 right-8 w-12 h-12" />
                            <p className="text-xl text-white/90 mb-8 italic leading-relaxed">
                                "&quot;{t.quote}&quot;"
                            </p>
                            <div>
                                <div className="font-bold text-lg">{t.author}</div>
                                <div className="text-primary/60 text-sm">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
