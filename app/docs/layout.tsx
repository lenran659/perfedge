"use client";

import Header from "@/components/docs/Header";
import TocOuter from "@/components/docs/TocOuter";
import MdxLayout from "@/components/mdx/mdx-layout";
import { motion } from "motion/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-white mx-auto">
      <Header />
      <main className="w-4/5 h-full flex items-center justify-center mx-auto">
        <aside className="w-1/6 h-full pt-14 pb-12 flex items-center justify-center relative">
          <TocOuter />
        </aside>
        <motion.article
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="w-5/6 h-full p-4 overflow-y-auto px-12 py-24 prose"
        >
          <MdxLayout>{children}</MdxLayout>
        </motion.article>
      </main>
    </div>
  );
};

export default RootLayout;
