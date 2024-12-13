"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface QASelectProps {
  question: string;
  answer: number;
  options: string[];
  explanation?: string;
}
const QASelect: React.FC<QASelectProps> = ({
  question,
  answer,
  options,
  explanation,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    if (index === answer) {
      setShowExplanation(true);
    } else {
      setShowExplanation(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-4 bg-white rounded-lg shadow-md w-full"
    >
      <div className="flex flex-col gap-4">
        <span className="font-bold text-xl">{question}</span>
        <div className="flex flex-col gap-2">
          {options.map((option, index) => {
            return (
              <div
                onClick={() => handleSelect(index)}
                key={option + index}
                className={`cursor-pointer duration-300 flex items-center gap-2 p-2 rounded-lg
                    ${
                      selected === index && index === answer
                        ? "bg-green-500 text-white"
                        : selected === index && index !== answer
                        ? "bg-red-500 text-white"
                        : "bg-gray-100"
                    }
                  `}
              >
                <span>{index + 1}.</span>
                <span>{option}</span>
              </div>
            );
          })}
        </div>
        {showExplanation && selected === answer && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-100 p-2 rounded-lg text-gray-500"
          >
            <span className="font-bold mr-2 text-black">解释：</span>
            {explanation}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default QASelect;
