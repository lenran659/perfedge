import type { MDXComponents } from "mdx/types";

const customComponents: MDXComponents = {
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="rounded-lg w-full shadow border border-gray-300"
    />
  ),
};

export default customComponents;
