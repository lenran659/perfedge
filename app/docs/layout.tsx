"use client";

import Header from "@/components/docs/Header";
import TocOuter from "@/components/docs/TocOuter";
import { motion } from "motion/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-white">
      <Header />
      <main className="w-full h-full flex items-center">
        <aside className="w-[12.5%] h-full pt-14 pb-12 flex items-center justify-center border-r border-r-primary/40 relative">
          <TocOuter />
        </aside>
        <motion.article
          initial={{ scaleX: 0.8, scaleY: 0.8, opacity: 0 }}
          animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          className="w-[87.5%] h-full p-4 overflow-y-auto px-12 pt-24 prose"
        >
          {children}
        </motion.article>
      </main>
    </div>
  );
};

export default RootLayout;
