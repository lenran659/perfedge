"use client";

import { useState } from "react";

import Mask from "@/components/ui/mask";
import { motion } from "motion/react";

interface SearchDocsProps {
  setIsSearch: (show: boolean) => void;
}

interface res {
  title: string;
  content: string;
}

const MockRes = [
  {
    title: "文档1",
    content: "这是文档1的内容",
  },
  {
    title: "文档2",
    content: "这是文档2的内容",
  },
  {
    title: "文档3",
    content: "这是文档3的内容",
  },
  {
    title: "文档4",
    content:
      "这是文档4的内容这是文档9的内容这是文档9的内容这是文档9的内容这是文档9的内容这是文档9的内容这是文档9的内容这是文档9的内容这是文档9的内容",
  },
  {
    title: "文档5",
    content: "这是文档5的内容",
  },
  {
    title: "文档6",
    content: "这是文档6的内容",
  },
  {
    title: "文档7",
    content: "这是文档7的内容",
  },
  {
    title: "文档8",
    content: "这是文档8的内容",
  },
  {
    title: "文档9",
    content: "这是文档9的内容",
  },
];

const SearchDocs: React.FC<SearchDocsProps> = ({ setIsSearch }) => {
  const [input, setInput] = useState<string>("");
  const [res, setRes] = useState<res[]>();

  const handleSearch = () => {
    setRes(MockRes);
    setInput("");
  };

  return (
    <Mask setShowMask={setIsSearch}>
      <div className="w-full flex flex-col items-center h-full p-8 pb-4 gap-4">
        <div className="w-1/2 flex items-center ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="输入内容以搜索"
            className="outline-none border border-primary rounded-l-xl p-3 w-5/6 h-10"
          />
          <button
            onClick={handleSearch}
            className="duration-300 bg-primary rounded-r-xl p-2 h-10 text-white w-1/6 hover:bg-primary-dark"
          >
            搜索
          </button>
        </div>

        <div className="w-1/2 flex-1 flex flex-col overflow-auto select-none">
          {res &&
            res.map((item, index) => {
              return (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    x: 10,
                  }}
                  whileTap={{
                    scale: 0.9,
                    rotate: -2,
                  }}
                  key={index + item.title}
                  className="p-2"
                >
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-1 ...">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
        </div>
        {MockRes && (
          <span className="text-primary">共搜索到{MockRes.length}条数据</span>
        )}
      </div>
    </Mask>
  );
};

export default SearchDocs;
