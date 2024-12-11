interface Toc {
    title: string;
    href: string;
    list?: Toc[];
}

export const tocdata: Toc[] = [
    {
        title: "写在前面",
        href: "/preface",
        list: [
            {
                title: "贡献指南",
                href: "/contribute",
            },
        ],
    },
    {
        title: "性能评判标准",
        href: "/judgingcriteria",
        list: [
            {
                title: "分析工具",
                href: "/analysistools",
            },
            {
                title: "直观感受",
                href: "/intuitivefeelings",
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
        title: "网络优化",
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