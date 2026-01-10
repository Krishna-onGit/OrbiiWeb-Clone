import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedInputProps {
    children: React.ReactNode;
    delay?: number;
}

const AnimatedInput = ({ children, delay = 0 }: AnimatedInputProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedInput;
