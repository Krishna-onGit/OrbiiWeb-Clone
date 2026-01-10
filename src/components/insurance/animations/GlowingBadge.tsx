import React from 'react';

const GlowingBadge = ({ children, glowColor = "#39FF14", className = "" }: any) => {
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
