'use client'

import { useState, ChangeEvent, useCallback, useRef } from "react";
import { Input } from "@/components/ui/Input";

export const AutoSaveInput = () => {
  const [normalValue, setNormalValue] = useState("");
  const [throttleValue, setThrottleValue] = useState("");
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const [lastSaveTime, setLastSaveTime] = useState<string>("");
  const [currentInput, setCurrentInput] = useState("");
  const lastTimeRef = useRef(0);

  // 普通保存
  const handleNormalInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNormalValue(value);
    // 模拟保存操作
    setNormalCount(prev => prev + 1);
  };

  // 节流保存
  const handleThrottleInput = useCallback((value: string) => {
    const now = Date.now();
    if (now - lastTimeRef.current >= 1000) {
      setThrottleValue(value);
      setThrottleCount(prev => prev + 1);
      setLastSaveTime(new Date().toLocaleTimeString());
      lastTimeRef.current = now;
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="font-medium">无节流输入框：</h4>
        <Input
          placeholder="输入时实时保存"
          onChange={handleNormalInput}
        />
        <div className="text-sm space-y-1">
          <div className="text-gray-600">保存次数: {normalCount}</div>
          <div className="text-gray-500">当前内容: {normalValue}</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">节流输入框（1秒内最多保存一次）：</h4>
        <Input
          placeholder="输入时节流保存"
          value={currentInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setCurrentInput(value); // 实时更新输入显示
            handleThrottleInput(value); // 节流处理保存操作
          }}
        />
        <div className="text-sm space-y-1">
          <div className="text-gray-600">保存次数: {throttleCount}</div>
          <div className="text-gray-500">实时输入: {currentInput}</div>
          <div className="text-gray-500">已保存内容: {throttleValue}</div>
          {lastSaveTime && (
            <div className="text-gray-400">
              最后保存时间: {lastSaveTime}
            </div>
          )}
          <div className="text-xs text-gray-400 mt-2">
            提示：快速输入文字，观察"已保存内容"的更新频率
          </div>
        </div>
      </div>
    </div>
  );
}; 