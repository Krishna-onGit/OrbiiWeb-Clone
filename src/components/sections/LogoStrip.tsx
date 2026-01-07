"use client";

import { motion } from "framer-motion";

const logos = [
    "Acme Corp", "Globex", "Initech", "Umbrella", "Cyberdyne", "Hooli", "Siedel", "Stark Industries"
];

const LogoStrip = () => {
    return (
        <section className="py-20 border-y border-white/5 bg-[#0A0B1A]">
            <div className="section-container">
                <p className="text-center text-white/40 mb-10 font-medium tracking-widest uppercase text-xs">
                    Trusted by the world's most innovative teams
                </p>

                <div className="relative overflow-hidden flex gap-12 group">
                    <motion.div
                        className="flex gap-20 whitespace-nowrap min-w-full"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...logos, ...logos].map((logo, idx) => (
                            <div
                                key={idx}
                                className="text-white/30 text-2xl font-bold italic transition-opacity hover:opacity-100"
                            >
                                {logo}
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient masking for smooth fade */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0B1A] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0B1A] to-transparent z-10" />
                </div>
            </div>
        </section>
    );
};

export default LogoStrip;
