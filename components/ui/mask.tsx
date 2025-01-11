'use client';

import { motion } from 'motion/react';
import { CircleX } from 'lucide-react';

interface MaskProps {
    children: React.ReactNode;
    setShowMask: (show: boolean) => void;
}

const Mask: React.FC<MaskProps> = ({ children, setShowMask }) => {
    const handleClose = () => {
        setShowMask(false);
    };

    return (
        <motion.div
            onClick={handleClose}
            className='fixed z-50 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-50'
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    type: 'spring',
                }}
                onClick={(e) => e.stopPropagation()}
                className='relative flex h-2/3 w-2/3 items-center justify-center rounded-xl bg-white'
            >
                <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='absolute right-2 top-2'
                >
                    <CircleX
                        className='cursor-pointer text-primary'
                        onClick={handleClose}
                    />
                </motion.span>
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Mask;
