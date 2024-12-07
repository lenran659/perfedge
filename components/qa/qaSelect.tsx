"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { Check, X } from "lucide-react";

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
    setShowExplanation(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 bg-white rounded-lg shadow-md w-96"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl border-l-4 border-primary">
            {question}
          </h1>
          <div className="flex flex-col gap-2">
            {options.map((option, index) => {
              return (
                <div
                  onClick={() => handleSelect(index)}
                  key={option + index}
                  className={`cursor-pointer duration-300 flex items-center gap-2 p-2 rounded-lg ${
                    index === answer && selected === index
                      ? "bg-green-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <span>{index + 1}.</span>
                  <span>{option}</span>
                </div>
              );
            })}
          </div>
          {showExplanation && (
            <>
              {selected === answer ? (
                <Check className="text-green-500" />
              ) : (
                <X className="text-red-500" />
              )}
              <p className="bg-gray-100 p-2 rounded-lg text-gray-500">
                <span className="font-bold mr-2 text-black">解释：</span>
                {explanation}
              </p>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default QASelect;
