"use client";

import { motion } from "motion/react";
import { CircleX } from "lucide-react";

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
      className="fixed w-screen h-screen z-50 flex items-center justify-center bg-primary bg-opacity-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        onClick={(e) => e.stopPropagation()}
        className="w-2/3 h-2/3 bg-white rounded-xl flex items-center justify-center relative"
      >
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2"
        >
          <CircleX
            className="text-primary cursor-pointer"
            onClick={handleClose}
          />
        </motion.span>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Mask;
