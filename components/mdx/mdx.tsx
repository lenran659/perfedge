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
  p: ({ children }) => <p className="text-lg text-primary">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
  li: ({ children }) => <li className="text-lg text-primary">{children}</li>,
  a: ({ children, href }) => (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 pl-4 text-gray-500">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-800 p-4 text-white">{children}</pre>
  ),
  code: ({ children }) => (
    <code className="bg-gray-800 p-1 text-white">{children}</code>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full rounded-lg w-96" />
  ),
};

export default customComponents;
