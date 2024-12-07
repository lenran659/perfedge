import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PerfEdge",
  description:
    "PerfEdge，一个专注于体验 Web 性能优化的知识库，旨在帮助前端开发者更好地理解和使用前端性能优化技术，提高网站和应用的用户体验。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
