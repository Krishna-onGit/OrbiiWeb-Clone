"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ShieldCheck, Database, Cpu, FileCheck2 } from "lucide-react";

/**
 * Isometric visual for the AI Hub section — the pipeline that turns raw policy
 * data into an issued, protected policy.
 *
 * Built from CSS-3D planes and a handful of keyframes: everything animates on
 * `transform` / `opacity` only, so it composites on the GPU and costs no layout
 * or paint work. Animations are also paused while the section is off-screen.
 */

const layers = [
    { icon: Database, title: "Policy Data", meta: "Ingest" },
    { icon: Cpu, title: "Risk Engine", meta: "Score" },
    { icon: FileCheck2, title: "Issued Policy", meta: "Bind" },
];

const IsometricStack = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const node = rootRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsActive(entry.isIntersecting),
            { rootMargin: "120px" }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={rootRef} className="w-full">
            <div className={`iso-scene ${isActive ? "" : "iso-paused"}`} aria-hidden="true">
                <div className="iso-stage">
                    {/* Ground grid */}
                    <div className="iso-plate iso-grid" />

                    {layers.map((layer, i) => (
                        <div
                            key={layer.title}
                            className="iso-plate iso-card"
                            style={{ "--depth": `${i * 62}px`, "--delay": `${i * 0.5}s` } as CSSProperties}
                        >
                            <div className="iso-card-face">
                                <span className="iso-dot" />
                                <span className="iso-dot iso-dot--muted" />
                                <div className="iso-bars">
                                    <i style={{ width: "70%" }} />
                                    <i style={{ width: "44%" }} />
                                    <i style={{ width: "58%" }} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Data pulse travelling up through the stack */}
                    <div className="iso-pulse" />
                    <div className="iso-pulse iso-pulse--lag" />

                    {/* Shield cap, billboarded back toward the viewer */}
                    <div className="iso-plate iso-shield" style={{ "--depth": "214px" } as CSSProperties}>
                        <span className="iso-shield-mark">
                            <ShieldCheck size={30} strokeWidth={1.6} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Labels live outside the 3D transform so the text stays crisp and upright */}
            <ul className="iso-labels">
                {layers.map((layer) => (
                    <li key={layer.title}>
                        <layer.icon size={13} className="text-brand shrink-0" />
                        <span className="text-white/70">{layer.title}</span>
                        <span className="text-white/25">{layer.meta}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IsometricStack;
