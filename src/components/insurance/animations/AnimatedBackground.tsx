import React from 'react';

const AnimatedBackground = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-30" />
            {children}
        </div>
    );
};

export default AnimatedBackground;
