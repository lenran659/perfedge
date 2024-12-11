export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-headings:font-semibold prose-headings:text-primary prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-md dark:prose-headings:text-white prose-a:text-primary prose-a:font-semibold prose-a:no-underline prose-a:visited:text-primary prose-a:hover:text-primary/80 prose-a:active:text-primary/80 prose-p:mt-4 prose-p:mb-4 prose-ol:mt-4 prose-ol:mb-4 prose-ul:mt-4 prose-ul:mb-4 prose-li:ml-8">
      {children}
    </div>
  );
}
