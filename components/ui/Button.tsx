"use client";

import { motion } from "motion/react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "error" | "default" | "warning";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    type && (
      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        transition={{ type: "spring" }}
        className={`rounded-md px-4 py-2 text-sm font-medium text-white bg-${type} focus:outline-none focus:ring-2 focus:ring-${type}`}
        onClick={onClick}
      >
        {children}
      </motion.button>
    )
  );
};

export default Button;
