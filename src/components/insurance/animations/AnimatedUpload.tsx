import React from 'react';

interface AnimatedUploadProps {
    children: React.ReactNode;
    delay?: number;
}

const AnimatedUpload = ({ children }: AnimatedUploadProps) => {
    return <div>{children}</div>;
};

export default AnimatedUpload;
