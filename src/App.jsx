import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experiences } from './components/Experiences';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReadmeModal } from './components/ReadmeModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState('pt');
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenReadme={() => setIsReadmeOpen(true)}
      />

      
      <main>
        
        <Hero currentLang={currentLang} />

        
        <About currentLang={currentLang} />

        
        <Projects currentLang={currentLang} />

        
        <Experiences currentLang={currentLang} />

        
        <Skills currentLang={currentLang} />

        
        <Contact currentLang={currentLang} />
      </main>

     
      <Footer
        currentLang={currentLang}
        onOpenReadme={() => setIsReadmeOpen(true)}
      />

      
      <ReadmeModal
        isOpen={isReadmeOpen}
        onClose={() => setIsReadmeOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
