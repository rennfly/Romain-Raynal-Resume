import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
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

  // Background decoration provided by user
  const decorativeBgUrl = "https://drive.google.com/thumbnail?id=1geGVIy6ZjseN_1DGW6MHxwdo4v-0Xqez&sz=w1000";

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="bg-[#E8E9E8] border-b border-[#171F1C]/10 pb-10 pt-10 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background element provided by user */}
      <div className="absolute top-0 right-0 h-full w-1/2 md:w-1/3 opacity-10 pointer-events-none">
        <img src={decorativeBgUrl} alt="" className="w-full h-full object-contain object-right-top grayscale" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#E2DACF] shadow-sm overflow-hidden bg-white flex items-center justify-center">
              {!imgError && avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={name} 
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-3xl font-bold text-[#171F1C]/30">{initials}</span>
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
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#171F1C]">
                    {name.split(' ')[0]} <span className="text-[#92400E]">{name.split(' ')[1]}</span>
                  </h1>
                )}
              </div>
              
              <p className="text-xl md:text-2xl text-[#92400E] font-medium tracking-wide uppercase">{title}</p>
            </div>

            {/* Contact Grid */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm md:text-base text-[#171F1C]/70">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#92400E] shrink-0" />
                <span>{contact.location}</span>
              </div>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-[#92400E] transition-colors">
                <Phone size={16} className="text-[#92400E] shrink-0" />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-[#92400E] transition-colors">
                <Mail size={16} className="text-[#92400E] shrink-0" />
                <span>{contact.email}</span>
              </a>
              <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#92400E] transition-colors">
                <Globe size={16} className="text-[#92400E] shrink-0" />
                <span>{contact.website}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};