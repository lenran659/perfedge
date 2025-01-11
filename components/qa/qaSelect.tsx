'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

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
            className='w-full rounded-lg bg-white p-4 shadow-md'
        >
            <div className='flex flex-col gap-4'>
                <span className='text-xl font-bold'>{question}</span>
                <div className='flex flex-col gap-2'>
                    {options.map((option, index) => {
                        return (
                            <div
                                onClick={() => handleSelect(index)}
                                key={option + index}
                                className={`flex cursor-pointer items-center gap-2 rounded-lg p-2 duration-300 ${
                                    selected === index && index === answer
                                        ? 'bg-green-500 text-white'
                                        : selected === index && index !== answer
                                          ? 'bg-red-500 text-white'
                                          : 'bg-gray-100'
                                } `}
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
                        className='rounded-lg bg-gray-100 p-2 text-gray-500'
                    >
                        <span className='mr-2 font-bold text-black'>
                            解释：
                        </span>
                        {explanation}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

export default QASelect;
