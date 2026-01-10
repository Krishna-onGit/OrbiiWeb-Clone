import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcon = ({ children, duration = 2, delay = 0 }: any) => {
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
