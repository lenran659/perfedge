"use client";

import { motion } from "motion/react";

const Logo = () => {
  return (
    <motion.img
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      src="/logo.png"
      alt="logo"
      className="w-96 my-8 cursor-pointer"
    />
  );
};

export default Logo;
