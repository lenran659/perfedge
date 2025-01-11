'use client';

import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'primary' | 'secondary' | 'default';
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'default',
    className = '',
    disabled = false,
}) => {
    const baseStyles = 'px-4 py-2 rounded-md transition-colors';
    const typeStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    };

    return (
        <button
            className={`${baseStyles} ${typeStyles[type]} ${className} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
