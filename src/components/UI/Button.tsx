// src/components/UI/Button.tsx

import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  onClick,
  children,
}) => {
  const baseStyle = 'px-4 py-2 font-semibold rounded focus:outline-none';
  const primaryStyle = 'bg-blue-500 text-white hover:bg-blue-600';
  const secondaryStyle = 'bg-gray-500 text-white hover:bg-gray-600';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${
        variant === 'primary' ? primaryStyle : secondaryStyle
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
