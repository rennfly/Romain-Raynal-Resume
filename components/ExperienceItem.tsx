import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceItemProps {
  data: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative pl-8 pb-4 border-l-2 border-[#171F1C]/10 last:border-l-0 last:pb-0 transition-colors duration-300 ${isOpen ? 'border-[#92400E]/30' : ''}`}
    >
      {/* Timeline dot */}
      <div 
        className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${isOpen ? 'bg-[#92400E] border-[#92400E]' : 'bg-[#E8E9E8] border-[#171F1C]/20'}`}
      />

      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer group select-none"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 lg:gap-4 w-full min-w-0">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-2 gap-y-1 flex-1 text-sm md:text-[15px] pr-2 min-w-0">
            <span className="font-bold text-[#171F1C] group-hover:text-[#92400E] transition-colors whitespace-nowrap shrink-0">
              {data.role}
            </span>
            
            {data.projectName && (
              <>
                 <span className="text-[#171F1C]/30 hidden sm:inline shrink-0">•</span>
                 {data.url ? (
                   <a 
                     href={data.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={(e) => e.stopPropagation()}
                     className="text-[#92400E] font-medium hover:underline inline-flex items-center gap-1 shrink-0"
                   >
                     {data.projectName}
                     <ExternalLink size={12} className="opacity-60 -translate-y-[1px]" />
                   </a>
                 ) : (
                   <span className="text-[#92400E] font-medium shrink-0">{data.projectName}</span>
                 )}
              </>
            )}
            
            <span className="text-[#171F1C]/30 hidden lg:inline shrink-0">•</span>
            <span className="text-[#171F1C]/60 italic lg:not-italic truncate flex-1 min-w-[100px]">{data.company}</span>
          </div>

          <div className="flex items-center gap-2 text-[#171F1C]/50 text-xs font-bold uppercase tracking-wider bg-[#E2DACF]/30 lg:bg-transparent px-3 py-1 lg:p-0 rounded-full lg:rounded-none self-start lg:self-auto shrink-0 mt-2 lg:mt-0">
            {data.period}
            <span className="text-[#171F1C]/40 group-hover:text-[#92400E] transition-colors">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </div>
        </div>
      </div>

      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <ul className="space-y-2 pb-2">
          {data.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-[#171F1C]/80 w-full text-sm sm:text-base">
              <span className="mt-2 w-1.5 h-1.5 bg-[#92400E]/60 rounded-full shrink-0" />
              <span className="leading-relaxed flex-1">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};