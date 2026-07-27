"use client";

import Spline from "@splinetool/react-spline";

/**
 * Thin wrapper around the Spline canvas.
 *
 * It exists so the heavy runtime can be reached through a *static* import.
 * `@splinetool/react-spline` publishes an `import`-only exports map, which
 * webpack fails to resolve when it is the target of a `next/dynamic` call —
 * pointing `dynamic()` at this local module instead keeps the code-splitting
 * while letting the package resolve normally.
 */
type SplineSceneProps = {
    scene: string;
    className?: string;
    onLoad?: () => void;
};

export default function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
    return <Spline scene={scene} className={className} onLoad={onLoad} />;
}
