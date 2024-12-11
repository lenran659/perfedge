"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface TocOuterList {
  title: string;
  href: string;
}

interface TocOuterItemProps {
  title: string;
  href: string;
  list?: TocOuterList[];
}

const TocOuterItem: React.FC<TocOuterItemProps> = ({ title, href, list }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Link
        href={"/docs" + href}
        className="font-bold text-primary text-xl line-clamp-1"
      >
        {title}
      </Link>
      {list &&
        list.map((item, index) => {
          return (
            <motion.span
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={"/docs" + href + item.href}
                className="pl-4 text-lg text-p line-clamp-1"
              >
                {item.title}
              </Link>
            </motion.span>
          );
        })}
    </div>
  );
};

export default TocOuterItem;
