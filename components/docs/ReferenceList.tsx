import React, { memo } from "react";

interface ReferenceItem {
  name: string;
  url: string;
  description: string;
}

interface ReferenceListProps {
  references: ReferenceItem[];
}

const ReferenceList: React.FC<ReferenceListProps> = ({ references }) => {
  if (!references || references.length === 0) return null;

  return (
    <div className="reference-list">
      <h2 className="text-lg font-semibold text-gray-800">参考文档</h2>
      <ul className="list-disc mt-2 space-y-1">
        {references.map((ref, index) => (
          <li key={index} className="text-black transition-colors duration-200">
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline mr-4"
            >
              {ref.name} :
            </a>
            {ref.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ReferenceList);
