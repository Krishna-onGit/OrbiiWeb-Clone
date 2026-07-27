"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// The Spline runtime is ~1.5MB. Never let it into the initial bundle or block
// first paint: it is code-split, client-only, and only requested once the
// browser is idle after hydration.
const Spline = dynamic(() => import("./SplineScene"), {
    ssr: false,
    loading: () => null,
});

const SCENE = "https://prod.spline.design/Qh7B3uJXfzvTIqol/scene.splinecode";

type IdleWindow = Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
};

const HeroSpline = () => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Skip the 3D scene entirely where it would only cost battery/CPU:
        // reduced-motion users, and devices that are clearly not up to it.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) return;

        const idle = window as IdleWindow;
        let handle: number;

        const start = () => setShouldLoad(true);

        if (typeof idle.requestIdleCallback === "function") {
            handle = idle.requestIdleCallback(start, { timeout: 2500 });
            return () => idle.cancelIdleCallback?.(handle);
        }

        handle = window.setTimeout(start, 1200);
        return () => window.clearTimeout(handle);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 -z-10 h-full w-full">
            {/* Instant, zero-cost stand-in. Also stays as the backdrop behind the
                scene so there is never a flash of empty black. */}
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 hero-grid" />

            {shouldLoad && (
                <div
                    className={`absolute inset-0 transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Spline scene={SCENE} className="w-full h-full" onLoad={() => setIsReady(true)} />
                </div>
            )}

            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
    );
};

export default HeroSpline;
