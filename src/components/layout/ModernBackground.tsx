/**
 * Fixed atmospheric backdrop.
 *
 * Intentionally has no JS at all. The previous version drove `backgroundPosition`
 * with GSAP, which repaints a full-viewport gradient every frame, forever — the
 * single most expensive thing on the page. Both layers now drift on `transform`
 * via CSS keyframes, so the compositor handles them with no main-thread work,
 * and the glows are radial gradients instead of `blur(160px)` + `mix-blend-mode`.
 */
const ModernBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-[20] overflow-hidden bg-background" aria-hidden="true">
            {/* Slow-drifting brand tint */}
            <div className="bg-drift absolute -inset-[15%] opacity-40" />

            {/* Sparse dot field */}
            <div className="bg-dots absolute -inset-[10%] opacity-[0.05]" />
        </div>
    );
};

export default ModernBackground;
