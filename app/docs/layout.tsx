"use client";

import Header from "@/components/docs/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
