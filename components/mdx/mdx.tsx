import type { MDXComponents } from "mdx/types";

const customComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-primary w-full">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold text-primary">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-bold text-primary">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-bold text-primary">{children}</h4>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-p">{children}</strong>
  ),
  p: ({ children }) => <p className="text-lg text-p">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
  li: ({ children }) => <li className="text-lg text-p">{children}</li>,
  a: ({ children, href }) => (
    <a href={href} className="text-primary hover:underline">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 font-thin">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="bg-slate-200 p-4 shadow-md">{children}</pre>
  ),
  code: ({ children }) => {
    return <code className="bg-slate-200 p-1 text-black">{children}</code>;
  },
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full rounded-lg h-96" />
  ),
};

export default customComponents;
