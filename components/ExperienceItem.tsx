import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceItemProps {
  data: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Stop propagation for the link button so it doesn't toggle the accordion
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`relative pl-8 pb-8 border-l-2 border-slate-700 last:border-l-0 last:pb-0 transition-colors duration-300 ${isOpen ? 'border-amber-500/50' : ''}`}
    >
      {/* Timeline dot */}
      <div 
        className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${isOpen ? 'bg-amber-500 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-slate-900 border-slate-600'}`}
      />

      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer group"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span>{data.role}</span>
              {data.projectName && (
                <>
                   <span className="hidden sm:inline text-slate-600">•</span>
                   <span className="text-amber-500 font-medium tracking-wide">{data.projectName}</span>
                </>
              )}
            </h3>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="text-slate-400 font-medium text-base">{data.company}</span>
              {data.url && (
                <a 
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1 text-xs text-amber-500 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/20 transition-colors"
                  title="Visit Project/Company Page"
                >
                  Visit <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm font-mono bg-slate-800/50 px-3 py-1 rounded-full self-start md:self-auto whitespace-nowrap mt-2 md:mt-0">
            {data.period}
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </div>

        {/* Short description / Hint */}
        {!isOpen && (
          <p className="text-slate-500 text-sm mt-2 italic group-hover:text-slate-400 transition-colors">
            Click to view details...
          </p>
        )}
      </div>

      {/* Expandable Content - Robust Max-Height Animation */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <ul className="space-y-2 pb-1">
          {data.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-300 w-full">
              <span className="mt-2 w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
              <span className="leading-relaxed flex-1 break-words">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};