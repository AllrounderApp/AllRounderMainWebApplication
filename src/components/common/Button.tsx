import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all active:scale-95 px-[1.5rem] py-[0.75rem] rounded-[0.75rem] text-[1rem]';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10',
    outline: 'border-[0.0625rem] border-slate-200 text-slate-700 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:bg-slate-100',
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
