"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

interface AsyncButtonProps {
  target: number;
}

interface ResponseData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface SuccessResponse {
  status: "success";
  message: string;
  data: ResponseData;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

// 联合类型，表示请求的响应可以是成功或失败
type ApiResponse = SuccessResponse | ErrorResponse;

export const AsyncButton: React.FC<AsyncButtonProps> = () => {
  const [debounceCount, setDebounceCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [requestResult, setRequestResult] = useState<string | null>(null);

  const debounce = <T extends (...args: unknown[]) => void>(fn: T, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  // 模拟异步请求的函数
  function simulateAsyncRequest(url: string, callback: (error: Error | null, data?: ApiResponse) => void) {
    console.log(`请求发送到: ${url}`);
    setTimeout(() => {
      const successData: SuccessResponse = {
        status: "success",
        message: "请求成功！",
        data: {
          userId: 1,
          id: 101,
          title: "模拟数据",
          completed: false,
        },
      };
      if (Math.random() > 0.8) {
        callback(new Error("请求失败，请稍后再试！"), undefined);
        return;
      }
      callback(null, successData);
    }, 2000);
  }

  const debouncedFnRef = useRef(
    debounce(() => {
      setLoading(true);
      setDebounceCount((prev) => prev + 1);
      simulateAsyncRequest("/api/data", (error, data) => {
        setLoading(false);
        if (error) {
          console.error(error);
          setRequestResult(`请求失败: ${error.message}`);
        } else if (data && data.status === "success") {
          console.log("异步请求完成，数据已接收:", data);
          setRequestResult(`
                        <h3>请求成功！</h3>
                        <p>用户ID: ${data?.data?.userId}</p>
                        <p>任务ID: ${data.data.id}</p>
                        <p>标题: ${data.data.title}</p>
                        <p>完成状态: ${data.data.completed ? "已完成" : "未完成"}</p>
                    `);
        }
      });
    }, 300)
  );

  const handleDebounceClick = () => {
    debouncedFnRef.current();
  };

  return (
    <div className="space-y-8 card">
      <div className="space-y-2">
        <h4 className="font-medium">异步请求按钮：</h4>
        <Button type="primary" onClick={handleDebounceClick} disabled={loading}>
          {loading ? "请求中..." : "点击发送请求"}
        </Button>
        <div className="text-sm text-gray-600">请求结果: {debounceCount}</div>
        <div className="mt-5 p-4 bg-gray-200 border border-gray-300" dangerouslySetInnerHTML={{ __html: requestResult || "" }}></div>
      </div>
    </div>
  );
};
