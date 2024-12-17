"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface AsyncConcurrencyProps {
    target: number
}

export const AsyncConcurrency: React.FC<AsyncConcurrencyProps> = () => {
    const [debounceCount, setDebounceCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [requestResult, setRequestResult] = useState<string>('');
    const [numberTarget, setNumberTarget] = useState<string>('');

    const handleNumberTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNumberTarget(value);
    }

    async function limitConcurrency(tasks: Array<() => Promise<unknown>>, limit: number) {
        const results: Promise<unknown>[] = [];
        const executing = new Set<Promise<unknown>>();
        for (const task of tasks) {
            const p = task();
            results.push(p);
            executing.add(p);
            if (executing.size >= limit) {
                await Promise.race(executing);
                executing.delete(p); // 删除已完成的 Promise
            }
        }
        return Promise.all(results);
    }

    function fetchData(numberTarget: string) {
        const tasks = new Array(Number(numberTarget)).fill(0).map((_, index) => () => {
            // 模拟异步操作，这里使用setTimeout来模拟
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ data: index });
                }, Math.random() * 1000); // 随机延迟时间
            });
        });
        limitConcurrency(tasks, 10).then(results => { // 假设并发限制为10
            const resultHTML = results.map((result, index) => {
                if (result && typeof result === 'object' && 'data' in result) {
                    return `<p>Data ${index}:${result.data}</p>`;
                } else {
                    return `<p>Data ${index}:未知</p>`;
                }
            }).join('');
            setRequestResult(resultHTML);
            setLoading(false);
        }).catch(error => {
            console.error('An error occurred:', error);
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
    }

    const handleDebounceClick = () => {
        setLoading(true);
        setDebounceCount((prev) => prev + 1);
        fetchData(numberTarget)
    };

    return (
        <div className="space-y-8 card">
            <div className="space-y-2">
                <Input
                    placeholder="请输入并发请求数据条数,默认为100"
                    value={numberTarget}
                    onChange={handleNumberTargetChange}
                />
                <h4 className="font-medium">异步请求按钮：</h4>
                <Button
                    type="primary"
                    onClick={handleDebounceClick}
                    disabled={loading}
                >
                    {loading ? "请求中..." : "点击发送请求"}
                </Button>
                <div className="text-sm text-gray-600">请求次数: {debounceCount}</div>
                <div className="mt-5 p-4 bg-gray-200 border border-gray-300"
                    dangerouslySetInnerHTML={{ __html: requestResult }}
                ></div>
            </div>
        </div>
    );
};
