"use client";

import { useState } from 'react';
import QASelect from '@/components/qa/qaSelect';

interface QuestionAnswerProps {
    question: string;
    answer: number;
    options: string[];
    explanation?: string;
}

export const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
    question,
    answer,
    options,
    explanation
}) => {

    const [questions] = useState<string>(question ? question : `请选择正确答案`)
    const [answers] = useState<number>(answer ? answer : 1)
    const [option] = useState<string[]>(options && options.length > 0 ? options : [])
    const [explanations] = useState<string>(explanation ? explanation : ``)

    return (
        <div>
            <QASelect
                question={questions}
                options={option}
                answer={answers}
                explanation={explanations}
            />
        </div>
    );
}

export default QuestionAnswer;


