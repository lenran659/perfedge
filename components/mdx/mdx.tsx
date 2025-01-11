import type { MDXComponents } from 'mdx/types';

const customComponents: MDXComponents = {
    img: ({ src, alt }) => (
        <img
            src={src}
            alt={alt}
            className='w-full rounded-lg border border-gray-300 shadow'
        />
    ),
};

export default customComponents;
