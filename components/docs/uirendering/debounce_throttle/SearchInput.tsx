"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/Input";

type DebounceFn = (value: string) => void;

export const SearchInput = () => {
  const [normalResults, setNormalResults] = useState<string>("");
  const [debounceResults, setDebounceResults] = useState<string>("");
  const [normalCount, setNormalCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);

  const debounce = (fn: DebounceFn, delay: number): DebounceFn => {
    let timer: NodeJS.Timeout;
    return (value: string) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(value), delay);
    };
  };

  // 普通搜索
  const handleNormalSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNormalCount((prev) => prev + 1);
    setNormalResults(`搜索结果: ${value}`);
  };

  // 防抖搜索
  const handleDebounceSearch = debounce((value: string) => {
    setDebounceCount((prev) => prev + 1);
    setDebounceResults(`搜索结果: ${value}`);
  }, 500);

  return (
    <div className="space-y-4 card pt-0">
      <div className="space-y-2">
        <h4 className="font-medium">无防抖搜索：</h4>
        <Input placeholder="输入搜索内容" onChange={handleNormalSearch} />
        <div className="text-sm text-gray-600">
          <div>API调用次数: {normalCount}</div>
          <div>{normalResults}</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">防抖搜索：</h4>
        <Input
          placeholder="输入搜索内容"
          onChange={(e) => handleDebounceSearch(e.target.value)}
        />
        <div className="text-sm text-gray-600">
          <div>API调用次数: {debounceCount}</div>
          <div>{debounceResults}</div>
        </div>
      </div>
    </div>
  );
};
