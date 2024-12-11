'use client'

import { ChangeEvent } from 'react';

interface InputProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({ 
  placeholder, 
  onChange,
  className = '',
  value
}) => {
  return (
    <input
      type="text"
      className={`w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}; 