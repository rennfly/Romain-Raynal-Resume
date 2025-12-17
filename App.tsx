import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { resumeData } from './data';
import { User, Briefcase, GraduationCap, Zap, Download, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#E8E9E8] text-[#171F1C] pb-20">
      <Header 
        name={resumeData.name} 
        title={resumeData.title} 
        contact={resumeData.contact}
        avatarUrl={resumeData.avatarUrl}
        logoUrl={resumeData.logoUrl}
      />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        
        {/* Summary Section */}
        <Section title="Résumé" icon={<User size={24} />}>
          <div className="bg-white/40 p-6 rounded-lg border border-[#171F1C]/5 shadow-sm leading-relaxed text-lg text-[#171F1C]/80">
            {resumeData.summary}
          </div>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-2">
            <Section title="Expériences" icon={<Briefcase size={24} />}>
              <div className="space-y-2">
                {resumeData.experience.map((exp) => (
                  <ExperienceItem key={exp.id} data={exp} />
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column: Skills & Education */}
          <div className="space-y-12">
            
            {/* Skills - Using #E2DACF as requested */}
            <Section title="Compétences" icon={<Zap size={24} />}>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-[#E2DACF] text-[#171F1C] border border-[#171F1C]/5 rounded-md text-sm font-bold shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Formations" icon={<GraduationCap size={24} />}>
              <div className="space-y-8">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-[#171F1C]/10">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#171F1C]/20 border border-[#E8E9E8]" />
                    
                    <div className="flex flex-col gap-1">
                      {edu.certificateUrl ? (
                        <a 
                          href={edu.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-bold text-[#171F1C] text-lg hover:text-[#92400E] transition-colors flex items-center gap-2 group"
                        >
                          {edu.degree}
                          <FileText size={16} className="text-[#92400E] opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <h3 className="font-bold text-[#171F1C] text-lg">{edu.degree}</h3>
                      )}
                      
                      <p className="text-[#92400E] font-medium text-sm uppercase tracking-wide">{edu.institution}</p>
                      <p className="text-[#171F1C]/40 text-sm font-bold">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

             {/* Download PDF Action - High contrast button using #171F1C for hierarchy */}
             {resumeData.cvUrl && (
               <div className="mt-8 pt-8 border-t border-[#171F1C]/10">
                  <a 
                    href={resumeData.cvUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-4 bg-[#171F1C] hover:brightness-125 text-[#E8E9E8] font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                  >
                    <Download size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Télécharger le CV complet</span>
                  </a>
               </div>
             )}

          </div>
        </div>
      </main>

      <footer className="text-center py-12 text-[#171F1C]/30 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} {resumeData.name}. Tous droits réservés.</p>
        <p className="mt-1">Compositeur & Sound Designer</p>
      </footer>
    </div>
  );
}

export default App;