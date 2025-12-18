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
      className={`relative pl-8 pb-8 border-l-2 border-[#171F1C]/10 last:border-l-0 last:pb-0 transition-colors duration-300 ${isOpen ? 'border-[#92400E]/30' : ''}`}
    >
      {/* Timeline dot */}
      <div 
        className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${isOpen ? 'bg-[#92400E] border-[#92400E]' : 'bg-[#E8E9E8] border-[#171F1C]/20'}`}
      />

      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer group"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#171F1C] group-hover:text-[#92400E] transition-colors flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span>{data.role}</span>
              {data.projectName && (
                <>
                   <span className="hidden sm:inline text-[#171F1C]/20">•</span>
                   {data.url ? (
                     <a 
                       href={data.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       onClick={(e) => e.stopPropagation()}
                       className="text-[#92400E] font-medium tracking-wide hover:underline inline-flex items-center gap-1.5"
                     >
                       {data.projectName}
                       <ExternalLink size={14} className="opacity-60" />
                     </a>
                   ) : (
                     <span className="text-[#92400E] font-medium tracking-wide">{data.projectName}</span>
                   )}
                </>
              )}
            </h3>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#171F1C]/60 font-medium text-base">{data.company}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#171F1C]/50 text-xs font-bold uppercase tracking-wider bg-[#E2DACF]/30 px-3 py-1 rounded-full self-start md:self-auto whitespace-nowrap mt-2 md:mt-0">
            {data.period}
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </div>

        {!isOpen && (
          <p className="text-[#171F1C]/40 text-sm mt-2 italic group-hover:text-[#171F1C]/60 transition-colors">
            Click to view details...
          </p>
        )}
      </div>

      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <ul className="space-y-2 pb-1">
          {data.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-[#171F1C]/80 w-full">
              <span className="mt-2.5 w-1.5 h-1.5 bg-[#92400E] rounded-full shrink-0" />
              <span className="leading-relaxed flex-1">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};