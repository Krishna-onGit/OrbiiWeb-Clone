"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
            <MeshDistortMaterial
                color="#3BE8FF"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
                metalness={0.8}
                emissive="#0066ff"
                emissiveIntensity={0.2}
            />
        </Sphere>
    );
}

export default function HeroBackground() {
    const [isLowPower, setIsLowPower] = useState(false);

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (isMobile || prefersReducedMotion) {
            setIsLowPower(true);
        }
    }, []);

    return (
        <div className="w-full h-full opacity-40">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={[1, 2]} // Optimize pixel ratio
                gl={{
                    antialias: !isLowPower,
                    powerPreference: "high-performance",
                    alpha: true
                }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3BE8FF" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />

                {!isLowPower ? (
                    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                        <AnimatedSphere />
                    </Float>
                ) : (
                    <AnimatedSphere /> // Static or simpler version
                )}

                <Stars
                    radius={100}
                    depth={50}
                    count={isLowPower ? 1000 : 5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={isLowPower ? 0.5 : 1}
                />
            </Canvas>
        </div>
    );
}
