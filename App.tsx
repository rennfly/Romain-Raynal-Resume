import { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { resumeData } from './data';
import { User, Briefcase, GraduationCap, Zap, Download, FileText, PlayCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoCarousel = ({ title, videoIds }: { title: string, videoIds: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoIds.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoIds.length) % videoIds.length);
  };

  return (
    <div className="space-y-3">
      <h4 className="text-[#171F1C] font-bold text-sm uppercase tracking-wider flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <PlayCircle size={16} className="text-[#92400E]" />
          {title}
        </span>
        {videoIds.length > 1 && (
          <span className="text-xs text-[#171F1C]/40 font-normal normal-case">
            {currentIndex + 1} / {videoIds.length}
          </span>
        )}
      </h4>
      
      <div className="relative group">
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#171F1C]/10 bg-black shadow-sm relative z-0">
          <iframe 
            key={videoIds[currentIndex]} // Force reload on change
            src={`https://www.youtube.com/embed/${videoIds[currentIndex]}`}
            title={`${title} - Video ${currentIndex + 1}`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Navigation Arrows - Only show if multiple videos */}
        {videoIds.length > 1 && (
          <>
            <button 
              onClick={prevVideo}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#171F1C] p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextVideo}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#171F1C] p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next video"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

function App() {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E8E9E8] text-[#171F1C] pb-20">
      <Header 
        name={resumeData.name} 
        title={resumeData.title} 
        contact={resumeData.contact}
        avatarUrl={resumeData.avatarUrl}
      />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        
        {/* Summary Section with Expandable Bio */}
        <Section title="Summary" icon={<User size={24} />}>
          <div className="bg-white/40 p-6 rounded-lg border border-[#171F1C]/5 shadow-sm space-y-4">
            <p className="leading-relaxed text-lg text-[#171F1C]/80">
              {resumeData.summary}
            </p>
            
            <button 
              onClick={() => setIsBioOpen(!isBioOpen)}
              className="flex items-center gap-2 text-[#92400E] font-bold text-sm uppercase tracking-widest hover:translate-x-1 transition-transform"
            >
              {isBioOpen ? (
                <><ChevronUp size={16}/> Show less</>
              ) : (
                <><ChevronDown size={16}/> Read full bio</>
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isBioOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="pt-4 border-t border-[#171F1C]/5 text-[#171F1C]/70 leading-relaxed whitespace-pre-line">
                {resumeData.fullBio}
              </div>
            </div>
          </div>
        </Section>

        {/* Portfolio Section */}
        <Section title="Portfolio" icon={<PlayCircle size={24} />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/20 p-6 rounded-xl border border-[#171F1C]/5">
            {/* 
                AJOUTER VOS VIDÉOS ICI
                Ajoutez les ID Youtube séparés par des virgules pour activer le carrousel.
                Exemple: ['ID_VIDEO_1', 'ID_VIDEO_2']
            */}
            <VideoCarousel 
              title="Sound Design" 
              videoIds={['DT-2ucQjcfU', 'DT-2ucQjcfU']} 
            />
            <VideoCarousel 
              title="Composition" 
              videoIds={['aMqrpzTirok', 'aMqrpzTirok']} 
            />
            <VideoCarousel 
              title="Music Design" 
              videoIds={['U33Eb9WWaPo', 'U33Eb9WWaPo']} 
            />
          </div>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-2">
            <Section title="Experience" icon={<Briefcase size={24} />}>
              <div className="space-y-2">
                {resumeData.experience.map((exp) => (
                  <ExperienceItem key={exp.id} data={exp} />
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column: Skills & Education */}
          <div className="space-y-12">
            
            {/* Skills */}
            <Section title="Skills" icon={<Zap size={24} />}>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-[#E2DACF] text-[#171F1C] border border-[#171F1C]/5 rounded-md text-sm font-bold shadow-sm cursor-default hover:brightness-95 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education" icon={<GraduationCap size={24} />}>
              <div className="space-y-8">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-[#171F1C]/10">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#171F1C]/20 border border-[#E8E9E8]" />
                    
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-[#171F1C] text-lg flex items-center gap-2 group">
                        {edu.degree}
                        {edu.certificateUrl && (
                           <a 
                            href={edu.certificateUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#92400E] opacity-50 group-hover:opacity-100 transition-opacity"
                            title="View Certificate"
                          >
                            <FileText size={16} />
                          </a>
                        )}
                      </h3>
                      
                      {edu.institutionUrl ? (
                         <a 
                          href={edu.institutionUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#92400E] font-medium text-sm uppercase tracking-wide hover:underline"
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        <p className="text-[#92400E] font-medium text-sm uppercase tracking-wide">{edu.institution}</p>
                      )}
                      
                      <p className="text-[#171F1C]/40 text-sm font-bold">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

             {/* Download PDF Action */}
             {resumeData.cvUrl && (
               <div className="mt-8 pt-8 border-t border-[#171F1C]/10">
                  <a 
                    href={resumeData.cvUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-4 bg-[#171F1C] hover:brightness-125 text-[#E8E9E8] font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                  >
                    <Download size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Download Full Resume</span>
                  </a>
               </div>
             )}

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;