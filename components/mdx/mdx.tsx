import type { MDXComponents } from "mdx/types";

// coustom components for mdx
const customComponents: MDXComponents = {
  a: ({ children, href }) => (
    <a href={href} className="text-primary hover:underline">
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full rounded-lg h-96" />
  ),
};

export default customComponents;
