'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import QASelect from '@/components/qa/qaSelect';

const NotFound = () => {
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-12 bg-gray-100 text-center'>
            <motion.h1
                initial={{
                    scale: 0,
                    rotate: 0,
                }}
                drag
                dragConstraints={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 5, -5, 5, -5, 5, -5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold text-red-500'
            >
                <span className='shadow-red-500 text-shadow-xl'>404</span>
            </motion.h1>
            <motion.span
                initial={{
                    scale: 0,
                    y: 50,
                }}
                animate={{
                    scale: 1,
                    y: 0,
                }}
                transition={{
                    type: 'spring',
                }}
                className='flex gap-4 text-2xl'
            >
                <Link
                    href='/'
                    className='mt-6 rounded bg-primary px-4 py-2 text-white duration-300 hover:bg-primary-dark'
                >
                    返回首页
                </Link>
                <div
                    onClick={() => window.history.back()}
                    className='mt-6 cursor-pointer rounded bg-primary px-4 py-2 text-white duration-300 hover:bg-primary-dark'
                >
                    返回前一页
                </div>
            </motion.span>

            <div className='w-96'>
                <QASelect
                    question='404页面对性能优化有作用吗？'
                    options={['没有', '有']}
                    answer={1}
                    explanation={
                        'not-found 本身并不直接算性能优化，但它在以下方面对性能有积极影响：减少不必要的服务器负担。提升用户体验和响应效率。简化错误处理代码。从整体架构优化的角度来看，确实可以间接提升性能和稳定性。'
                    }
                />
            </div>
        </div>
    );
};

export default NotFound;
