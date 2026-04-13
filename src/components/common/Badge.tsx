import React from 'react';

interface BadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  iconBgColor?: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, label, value, className = '', iconBgColor = 'bg-amber-100' }) => {
  return (
    <div className={`inline-flex items-center gap-[0.75rem] bg-white/90 backdrop-blur-md border-[0.0625rem] border-white/50 p-[0.75rem] px-[1.25rem] rounded-[1rem] shadow-xl ${className}`}>
      <div className={`w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-[0.75rem] ${iconBgColor} text-[1.25rem]`}>
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[0.75rem] text-slate-500 font-medium leading-none mb-[0.25rem]">{label}</p>
        <p className="text-[1.125rem] text-slate-900 font-bold leading-none">{value}</p>
      </div>
    </div>
  );
};

export default Badge;
