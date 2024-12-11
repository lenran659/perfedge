import type { Metadata } from "next";

import "./globals.css";
import "tippy.js/dist/tippy.css";

export const metadata: Metadata = {
  title: "PerfEdge | Web性能优化知识库",
  icons: {
    icon: "/logo.webp",
  },
  description:
    "PerfEdge，一个专注于体验 Web 性能优化的知识库，旨在帮助前端开发者更好地理解和使用前端性能优化技术，提高网站和应用的用户体验。",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-mono">{children}</body>
    </html>
  );
};

export default RootLayout;
