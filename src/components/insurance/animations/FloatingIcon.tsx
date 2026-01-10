import React from 'react';
import { motion } from 'framer-motion';

interface FloatingIconProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
}

const FloatingIcon = ({ children, duration = 2, delay = 0 }: FloatingIconProps) => {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingIcon;
