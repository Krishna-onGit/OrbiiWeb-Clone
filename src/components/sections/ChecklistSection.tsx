"use client";

import { Check } from "lucide-react";

interface ChecklistSectionProps {
    title: string;
    description: string;
    items: string[];
}

const ChecklistSection = ({ title, description, items }: ChecklistSectionProps) => {
    return (
        <section className="py-24 border-t border-white/[0.03]">
            <div className="section-container flex flex-col md:flex-row gap-16 md:gap-32">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        {title}
                    </h2>
                    <p className="text-secondary text-lg leading-relaxed max-w-sm">
                        {description}
                    </p>
                </div>

                <div className="flex-1 grid grid-cols-1 gap-6 self-center">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-5 group">
                            <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Check size={16} className="text-brand" strokeWidth={3} />
                            </div>
                            <span className="text-lg font-medium text-foreground/90">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChecklistSection;
