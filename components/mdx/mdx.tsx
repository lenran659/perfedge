import type { MDXComponents } from "mdx/types";

const customComponents: MDXComponents = {
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full rounded-lg h-96 shadow border border-gray-300"
    />
  ),
};

export default customComponents;
