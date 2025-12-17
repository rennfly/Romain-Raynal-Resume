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
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-3">
        {icon && <span className="text-amber-500">{icon}</span>}
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{title}</h2>
      </div>
      {children}
    </section>
  );
};