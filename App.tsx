import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { resumeData } from './data';
import { User, Briefcase, GraduationCap, Zap, Download, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 pb-20">
      <Header 
        name={resumeData.name} 
        title={resumeData.title} 
        contact={resumeData.contact}
        avatarUrl={resumeData.avatarUrl}
        logoUrl={resumeData.logoUrl}
      />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        
        {/* Summary Section */}
        <Section title="Summary" icon={<User size={24} />}>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 shadow-sm leading-relaxed text-lg text-slate-300">
            {resumeData.summary}
          </div>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Experience (Main focus) */}
          <div className="lg:col-span-2">
            <Section title="Work Experience" icon={<Briefcase size={24} />}>
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
            <Section title="Key Skills" icon={<Zap size={24} />}>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-slate-800 text-slate-200 border border-slate-600 rounded-md text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-colors cursor-default"
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
                  <div key={edu.id} className="relative pl-6 border-l-2 border-slate-700">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-900" />
                    
                    <div className="flex flex-col gap-1">
                      {edu.certificateUrl ? (
                        <a 
                          href={edu.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-bold text-white text-lg hover:text-amber-400 transition-colors flex items-center gap-2 group"
                        >
                          {edu.degree}
                          <FileText size={16} className="text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                      )}
                      
                      <p className="text-amber-500 font-medium">{edu.institution}</p>
                      <p className="text-slate-500 text-sm">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

             {/* Download PDF Action */}
             {resumeData.cvUrl && (
               <div className="mt-8 pt-8 border-t border-slate-700">
                  <a 
                    href={resumeData.cvUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                  >
                    <Download size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Download Full PDF</span>
                  </a>
               </div>
             )}

          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        <p className="mt-1">Designed with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;