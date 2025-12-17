import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", icon }) => {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="flex items-center gap-3 mb-6 border-b border-[#171F1C]/10 pb-3">
        {icon && <span className="text-[#92400E]">{icon}</span>}
        <h2 className="text-xl font-bold text-[#171F1C] uppercase tracking-[0.2em]">{title}</h2>
      </div>
      {children}
    </section>
  );
};