import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-8 py-3 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}