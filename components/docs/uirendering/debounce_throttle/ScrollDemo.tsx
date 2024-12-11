"use client";

import { useEffect, useState, useRef } from "react";

export const ScrollDemo = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const throttle = <T extends (...args: void[]) => void>(
    fn: T,
    delay: number
  ) => {
    let lastTime = 0;
    return () => {
      const now = Date.now();
      if (now - lastTime >= delay) {
        fn();
        lastTime = now;
      }
    };
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 普通滚动处理
    const handleNormalScroll = () => {
      setNormalCount((prev) => prev + 1);
    };

    // 节流滚动处理
    const handleThrottleScroll = throttle(() => {
      setThrottleCount((prev) => prev + 1);
    }, 500); // 降低延迟以使效果更明显

    container.addEventListener("scroll", handleNormalScroll);
    container.addEventListener("scroll", handleThrottleScroll);

    return () => {
      container.removeEventListener("scroll", handleNormalScroll);
      container.removeEventListener("scroll", handleThrottleScroll);
    };
  }, []);

  return (
    <div className="space-y-4 border rounded-md p-4">
      <div className="text-sm text-gray-600 space-y-1">
        <div>无节流触发次数: {normalCount}</div>
        <div>节流触发次数: {throttleCount}</div>
        <div className="text-xs text-gray-500">
          (快速滚动下面的内容查看效果)
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="h-96 overflow-y-auto border rounded p-4"
      >
        <div className="space-y-4">
          {Array(30)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="p-3 bg-gray-100 rounded text-sm">
                滚动内容 {i + 1}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
