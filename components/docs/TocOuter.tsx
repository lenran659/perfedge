"use client";

import { motion } from "motion/react";

import TocOuterItem from "@/components/docs/TocOuterItem";

const tocdata = [
  {
    title: "写在前面",
    href: "/preface",
    list: [
      {
        title: "关于",
        href: "/about",
      },
      {
        title: "贡献指南",
        href: "/contributeGuide",
      },
    ],
  },
  {
    title: "性能评判标准",
    href: "/judgingCriteria",
    list: [
      {
        title: "分析工具",
        href: "/analysisTools",
      },
      {
        title: "直观感受",
        href: "/intuitiveFeelings",
      },
    ],
  },
  {
    title: "静态资源优化",
    href: "/resource",
    list: [
      {
        title: "Web图片",
        href: "/webimg",
      },
      {
        title: "Web字体",
        href: "/webfont",
      },
      {
        title: "代码压缩",
        href: "/codecompression",
      },
      {
        title: "代码分包",
        href: "/codepacking",
      },
      {
        title: "缓存策略",
        href: "/cachestrategy",
      },
    ],
  },
  {
    title: "渲染优化",
    href: "/uirendering",
    list: [
      {
        title: "DOM结构",
        href: "/domstructure",
      },
      {
        title: "Web动画",
        href: "/webanimation",
      },
      {
        title: "JS规范",
        href: "/jsstandard",
      },
      {
        title: "Web Worker",
        href: "/webworker",
      },
      {
        title: "Service Worker",
        href: "/serviceworker",
      },
      {
        title: "防抖 节流",
        href: "/debounce_throttle",
      },
      {
        title: "回流 重绘",
        href: "/reflow_repaint",
      },
      {
        title: "事件",
        href: "/event",
      },
      {
        title: "加载优化",
        href: "/load",
      },
      {
        title: "异步编程",
        href: "/asyncprogramming",
      },
      {
        title: "长列表",
        href: "/longlist",
      },
      {
        title: "Vue",
        href: "/vue",
      },
      {
        title: "React",
        href: "/react",
      },
      {
        title: "SSR渲染",
        href: "/ssr",
      },
    ],
  },
  {
    title: "网络",
    href: "/network",
    list: [
      {
        title: "并发请求",
        href: "/concurrentrequest",
      },
      {
        title: "CDN加速",
        href: "/cdnacceleration",
      },
    ],
  },
];

const TocOuter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-2 w-full h-full pl-12 overflow-auto mt-14"
    >
      {tocdata &&
        tocdata.map((item) => {
          return (
            <TocOuterItem
              key={item.href}
              title={item.title}
              href={item.href}
              list={item.list}
            />
          );
        })}
    </motion.div>
  );
};

export default TocOuter;
