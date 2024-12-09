"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 my-4 text-white hover:bg-blue-700"
      onClick={() => setCount(count + 1)}
    >
      点击 {count} 次
    </button>
  );
}
