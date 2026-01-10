import React from 'react';

interface GlowingBadgeProps {
    children: React.ReactNode;
    glowColor?: string;
    className?: string;
}

const GlowingBadge = ({ children, glowColor = "#39FF14", className = "" }: GlowingBadgeProps) => {
    return (
        <div
            className={className}
            style={{ boxShadow: `0 0 20px ${glowColor}20` }}
        >
            {children}
        </div>
    );
};

export default GlowingBadge;
