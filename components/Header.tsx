import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Music, ExternalLink } from 'lucide-react';
import { ContactInfo } from '../types';

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
  avatarUrl?: string;
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({ name, title, contact, avatarUrl, logoUrl }) => {
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="bg-slate-800 border-b border-slate-700 pb-10 pt-10 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Music size={200} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-700 shadow-xl overflow-hidden bg-slate-900 flex items-center justify-center">
              {!imgError && avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.error("Error loading profile image:", avatarUrl);
                    setImgError(true);
                  }}
                />
              ) : (
                <span className="text-3xl font-bold text-slate-600">{initials}</span>
              )}
            </div>
          </div>

          {/* Main Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-2">
              {/* Logo / Name */}
              <div className="flex justify-center md:justify-start h-16 md:h-20 items-center">
                {!logoError && logoUrl ? (
                  <img 
                     src={logoUrl} 
                     alt={name}
                     className="h-full w-auto object-contain"
                     referrerPolicy="no-referrer"
                     onError={() => setLogoError(true)}
                  />
                ) : (
                  // Fallback to text if logo fails or is missing
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    {name.split(' ')[0]} <span className="text-amber-500">{name.split(' ')[1]}</span>
                  </h1>
                )}
              </div>
              
              <p className="text-xl md:text-2xl text-amber-500 font-medium tracking-wide">{title}</p>
            </div>

            {/* Contact Grid */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm md:text-base text-slate-300">
              <div className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <MapPin size={16} className="text-amber-500 shrink-0" />
                <span>{contact.location}</span>
              </div>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone size={16} className="text-amber-500 shrink-0" />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <span>{contact.email}</span>
              </a>
              <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Globe size={16} className="text-amber-500 shrink-0" />
                <span>{contact.website}</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="shrink-0 mt-2 md:mt-0">
            {contact.portfolioUrl && (
                <a 
                  href={contact.portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all hover:scale-105"
                >
                  <ExternalLink size={18} />
                  <span>View Portfolio</span>
                </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};