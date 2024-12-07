"use client";

const TocOuter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Table of Contents</h2>
      <div className="flex flex-col gap-2">
        <a href="#introduction" className="text-lg font-medium">
          Introduction
        </a>
        <a href="#installation" className="text-lg font-medium">
          Installation
        </a>
        <a href="#usage" className="text-lg font-medium">
          Usage
        </a>
        <a href="#customization" className="text-lg font-medium">
          Customization
        </a>
        <a href="#contributing" className="text-lg font-medium">
          Contributing
        </a>
        <a href="#license" className="text-lg font-medium">
          License
        </a>
      </div>
    </div>
  );
};

export default TocOuter;
