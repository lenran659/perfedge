"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const FPandFCP: React.FC = () => {
  const [paintInfo, setPaintInfo] = useState<PerformancePaintTiming[]>([]);

  const fetchPaintTimings = (): PerformancePaintTiming[] => {
    if (typeof window !== "undefined" && typeof performance !== "undefined") {
      return performance.getEntriesByType("paint") as PerformancePaintTiming[];
    }
    return [];
  };

  useEffect(() => {
    const paintTimings = fetchPaintTimings();
    setPaintInfo(paintTimings);
  }, []);

  return (
    <div className="card">
      <Button
        type="primary"
        onClick={() => {
          location.reload();
        }}
      >
        点击重新加载页面信息
      </Button>
      <div>
        {paintInfo.length > 0 ? (
          paintInfo.map((paintTiming) => (
            <p key={paintTiming.name}>
              {paintTiming.name.toUpperCase()}: {paintTiming.startTime.toFixed(2)} ms
            </p>
          ))
        ) : (
          <p>
            无 Paint Timings 数据 或<strong> 打开开发者工具后点击按钮重新加载</strong>。
          </p>
        )}
      </div>
    </div>
  );
};

export default FPandFCP;
