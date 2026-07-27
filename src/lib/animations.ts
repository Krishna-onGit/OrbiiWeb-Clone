import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let initialized = false;

/**
 * Registers ScrollTrigger exactly once for the whole app and re-measures
 * trigger positions after webfonts settle — otherwise every `start: "top 88%"`
 * is computed against pre-font layout and reveals fire at the wrong scroll
 * position (the classic "animation already played / never plays" bug).
 */
export function initGsap() {
    if (initialized || typeof window === "undefined") return;
    initialized = true;

    gsap.registerPlugin(ScrollTrigger);

    // Mobile browsers resize the viewport when the URL bar hides; without this,
    // every such resize invalidates triggers mid-scroll and causes jumps.
    ScrollTrigger.config({ ignoreMobileResize: true });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

export const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type RevealOptions = {
    /** Vertical travel in px. */
    y?: number;
    scale?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    /** ScrollTrigger `start`. Defaults to a value that fires just inside the fold. */
    start?: string;
    /** Element that drives the trigger, when it differs from the animated targets. */
    trigger?: gsap.DOMTarget;
};

/**
 * The single reveal primitive used by every section.
 *
 * Targets are expected to carry the `.reveal` class, which hides them in CSS so
 * there is no flash of un-animated content before hydration. Because of that,
 * the reduced-motion path must still explicitly reveal them.
 */
export function revealOnScroll(targets: gsap.DOMTarget, opts: RevealOptions = {}) {
    const { y = 24, scale, duration = 0.7, stagger = 0, delay = 0, start = "top 88%", trigger } = opts;

    if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0, scale: 1, clearProps: "transform,willChange" });
        return;
    }

    return gsap.fromTo(
        targets,
        { opacity: 0, y, ...(scale !== undefined ? { scale } : {}) },
        {
            opacity: 1,
            y: 0,
            ...(scale !== undefined ? { scale: 1 } : {}),
            duration,
            stagger,
            delay,
            ease: "power2.out",
            // Drop the compositor hint once we're done so long pages don't keep
            // dozens of promoted layers alive.
            clearProps: "willChange",
            scrollTrigger: {
                trigger: trigger ?? targets,
                start,
                once: true,
            },
        }
    );
}
