'use client';

import React, { useState } from 'react';

//结果数据量
const FIBONACCI_NUMBER = 42; 

function calculateWithoutWorker(n: number) {
  const startTime = performance.now();
  
  function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const result = fibonacci(n);
  const endTime = performance.now();
  
  return {
    result,
    time: endTime - startTime
  };
}

function calculateWithWorker(n: number) {
  return new Promise<{result: number, time: number}>((resolve) => {
    const startTime = performance.now();
    const worker = new Worker(new URL('./fibonacci.worker.ts', import.meta.url));
    
    worker.onmessage = function(e) {
      const endTime = performance.now();
      worker.terminate();
      
      resolve({
        result: e.data,
        time: endTime - startTime
      });
    };
    
    worker.postMessage(n);
  });
}

export function WebWorkerDemo() {
  const [withWorkerResult, setWithWorkerResult] = useState<{time: number, result: number} | null>(null);
  const [withoutWorkerResult, setWithoutWorkerResult] = useState<{time: number, result: number} | null>(null);
  const [isCalculatingWorker, setIsCalculatingWorker] = useState(false);
  const [isCalculatingNoWorker, setIsCalculatingNoWorker] = useState(false);
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleButtonClick = () => {
    setButtonClicks(prev => prev + 1);
  };

  const runWithWorker = async () => {
    setIsCalculatingWorker(true);
    const result = await calculateWithWorker(FIBONACCI_NUMBER);
    setWithWorkerResult(result);
    setIsCalculatingWorker(false);
  };

  const runWithoutWorker = () => {
    setIsCalculatingNoWorker(true);
    const result = calculateWithoutWorker(FIBONACCI_NUMBER);
    setWithoutWorkerResult(result);
    setIsCalculatingNoWorker(false);
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-white">
      <div className="text-center mb-4">
        <h3 className="font-bold text-xl">计算斐波那契数列第 {FIBONACCI_NUMBER} 项</h3>
        <p className="text-sm text-gray-600 mt-1">
          对比使用和不使用 Web Worker 时的性能差异
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 不使用 Worker 的测试区域 */}
        <div className="p-4 border rounded-lg space-y-4">
          <h3 className="font-bold text-lg">不使用 Web Worker</h3>
          <p className="text-sm text-gray-600">计算过程会阻塞主线程</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={runWithoutWorker}
              disabled={isCalculatingNoWorker}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-red-300 transition-colors"
            >
              {isCalculatingNoWorker ? '计算中...' : '开始计算'}
            </button>
            {withoutWorkerResult && (
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded">
                  耗时: <span className="font-mono">{withoutWorkerResult.time.toFixed(2)}ms</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <div className="font-semibold mb-1">计算结果:</div>
                  <div className="font-mono text-sm break-all">
                    {withoutWorkerResult.result.toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 使用 Worker 的测试区域 */}
        <div className="p-4 border rounded-lg space-y-4">
          <h3 className="font-bold text-lg">使用 Web Worker</h3>
          <p className="text-sm text-gray-600">计算过程在后台进行</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={runWithWorker}
              disabled={isCalculatingWorker}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
            >
              {isCalculatingWorker ? '计算中...' : '开始计算'}
            </button>
            {withWorkerResult && (
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded">
                  耗时: <span className="font-mono">{withWorkerResult.time.toFixed(2)}ms</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <div className="font-semibold mb-1">计算结果:</div>
                  <div className="font-mono text-sm break-all">
                    {withWorkerResult.result.toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 响应性测试区域 */}
      <div className="border-t pt-4">
        <div className="text-center space-y-2">
          <h3 className="font-bold text-lg">测试页面响应性</h3>
          <p className="text-sm text-gray-600">
            在计算过程中点击下方按钮，观察页面响应情况。
            <br />
            使用 Worker 时页面保持响应，不使用时会出现卡顿。
          </p>
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            点击测试 (点击次数: {buttonClicks})
          </button>
        </div>
      </div>
    </div>
  );
}