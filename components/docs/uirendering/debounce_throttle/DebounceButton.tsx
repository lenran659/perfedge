"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

interface DebounceButtonProps {
  target: number;
}

export const DebounceButton: React.FC<DebounceButtonProps> = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);
  const [loading, setLoading] = useState({ normal: false, debounce: false });

  const debounce = <T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number
  ) => {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const debouncedFnRef = useRef(
    debounce(() => {
      setLoading((prev) => ({ ...prev, debounce: true }));
      setDebounceCount((prev) => prev + 1);
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, debounce: false }));
      }, 500);
    }, 300)
  );

  const handleNormalClick = () => {
    setLoading((prev) => ({ ...prev, normal: true }));
    setNormalCount((prev) => prev + 1);
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, normal: false }));
    }, 500);
  };

  const handleDebounceClick = () => {
    debouncedFnRef.current();
  };

  return (
    <div className="space-y-8 card">
      <div className="space-y-2">
        <h4 className="font-medium">无防抖按钮：</h4>
        <Button
          type="primary"
          onClick={handleNormalClick}
          disabled={loading.normal}
        >
          {loading.normal ? "请求中..." : "点击发送请求"}
        </Button>
        <div className="text-sm text-gray-600">请求次数: {normalCount}</div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">防抖按钮：</h4>
        <Button
          type="primary"
          onClick={handleDebounceClick}
          disabled={loading.debounce}
        >
          {loading.debounce ? "请求中..." : "点击发送请求"}
        </Button>
        <div className="text-sm text-gray-600">请求次数: {debounceCount}</div>
      </div>
    </div>
  );
};
