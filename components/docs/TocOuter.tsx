"use client";

import { motion } from "motion/react";

import TocOuterItem from "@/components/docs/TocOuterItem";

import { tocdata } from "@/lib/data/toc";

const TocOuter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-2 w-full h-full pl-12 overflow-scroll mt-14 select-none"
    >
      {tocdata &&
        tocdata.map((item) => {
          return (
            <TocOuterItem
              key={item.href}
              title={item.title}
              href={item.href}
              list={item.list}
            />
          );
        })}
    </motion.div>
  );
};

export default TocOuter;
