import type { MDXComponents } from 'mdx/types';
import customComponents from '@/components/mdx/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...customComponents,
        ...components,
    };
}
