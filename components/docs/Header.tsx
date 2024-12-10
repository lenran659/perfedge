"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import { SquareArrowOutUpRight, Search, Github } from "lucide-react";

import SearchDocs from "@/components/docs/SearchDocs";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between w-screen px-4 fixed top-0 h-14 backdrop-blur-sm z-50 ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          className="flex items-center gap-4 select-none"
        >
          <Tippy content="退出" placement="bottom" theme="light">
            <Link href="/">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                src="/logo.svg"
                alt="logo"
                className="w-10 h-10"
              />
            </Link>
          </Tippy>
          <Tippy content="返回首页" placement="bottom" theme="light">
            <Link href="/docs" className="text-xl font-bold text-header">
              PerfEdge | Web性能优化知识库
            </Link>
          </Tippy>
        </motion.div>
        <div className="flex items-center h-full gap-8">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Tippy content="搜索文档" placement="bottom" theme="light">
              <Search
                className="text-primary w-6 h-6 cursor-pointer outline-none"
                onClick={() => {
                  setIsSearch(true);
                }}
              />
            </Tippy>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Tippy content="分享当前文档" placement="bottom" theme="light">
              <SquareArrowOutUpRight
                className="text-primary w-6 h-6 cursor-pointer outline-none"
                onClick={() => {
                  navigator.clipboard.writeText(location.href);
                }}
              />
            </Tippy>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Tippy content="Github" placement="bottom" theme="light">
              <Link
                href={"https://github.com/minorcell/perfedge"}
                target="_blank"
              >
                <Github className="text-primary w-6 h-6 cursor-pointer outline-none" />
              </Link>
            </Tippy>
          </motion.span>
        </div>
      </header>

      {isSearch && <SearchDocs setIsSearch={setIsSearch} />}
    </>
  );
};

export default Header;
