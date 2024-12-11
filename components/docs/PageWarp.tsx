"use client";

import Link from "next/link";

export interface PageWarpProps {
  next?: string;
  prev?: string;
}
const PageWarp: React.FC<PageWarpProps> = ({ next, prev }) => {
  return (
    <div className="flex justify-end mt-12 w-full gap-8">
      {prev && (
        <Link
          href={`/docs/${prev}`}
          className="text-sm font-bold text-primary hover:text-gray-700 py-2 rounded-md no-underline"
        >
          上一页面
        </Link>
      )}
      {next && (
        <Link
          href={`/docs/${next}`}
          className="text-sm font-bold text-primary hover:text-gray-700 py-2 rounded-md no-underline"
        >
          下一页面
        </Link>
      )}
    </div>
  );
};

export default PageWarp;
