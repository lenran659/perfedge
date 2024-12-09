"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const BlockButton = () => {
  const [count, setCount] = useState(0);

  function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const handleClick = () => {
    setCount(fibonacci(45));
  };

  return (
    <Button type="primary" onClick={handleClick}>
      {count ? `计算结果: ${count}` : "点击计算斐波那契前45项"}
    </Button>
  );
};

export default BlockButton;
