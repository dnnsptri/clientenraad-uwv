import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { QuoteBox } from '@/components/ui/QuoteBox'

/**
 * Custom MDX components for the annual report
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default components
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold text-neutral-900 mb-6 mt-8 first:mt-0" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-bold text-neutral-900 mb-4 mt-8" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold text-neutral-900 mb-3 mt-6" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="text-xl font-semibold text-neutral-900 mb-2 mt-4" {...props}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p className="text-lg leading-relaxed mb-4" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-lg" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-lg" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <QuoteBox {...props}>
        {children}
      </QuoteBox>
    ),
    a: ({ href, children, ...props }) => (
      <a 
        href={href} 
        className="text-primary-500 hover:text-primary-600 underline decoration-2 underline-offset-2"
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
    code: ({ children, ...props }) => (
      <code className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre className="bg-neutral-100 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
        {children}
      </pre>
    ),
    // Custom components
    Card: ({ children, ...props }) => <Card {...props}>{children}</Card>,
    ColorBar: ({ color = 'primary', className = '', ...props }) => (
      <div 
        className={`h-2 w-full rounded-full ${
          color === 'primary' ? 'bg-primary-500' : 
          color === 'secondary' ? 'bg-secondary-500' : 
          'bg-neutral-300'
        } ${className}`}
        {...props}
      />
    ),
    // Image component with Next.js Image optimization
    img: ({ src, alt, width, height, ...props }) => {
      if (!src) return null
      
      return (
        <figure className="my-6">
          <Image
            src={src}
            alt={alt || ''}
            width={Number(width) || 800}
            height={Number(height) || 600}
            className="rounded-lg w-full h-auto"
            {...props}
          />
          {alt && (
            <figcaption className="text-sm text-neutral-600 mt-2 text-center">
              {alt}
            </figcaption>
          )}
        </figure>
      )
    },
    // Table components
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-neutral-300" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-neutral-100" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr className="border-b border-neutral-300" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }) => (
      <th className="border border-neutral-300 px-4 py-2 text-left font-semibold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-neutral-300 px-4 py-2" {...props}>
        {children}
      </td>
    ),
    ...components,
  }
}