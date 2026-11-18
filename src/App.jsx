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
      {/* Navigation Top Bar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenReadme={() => setIsReadmeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero currentLang={currentLang} />

        {/* Sobre Mim / About Me */}
        <About currentLang={currentLang} />

        {/* Linha do Tempo de Projetos / Projects */}
        <Projects currentLang={currentLang} />

        {/* Experiências Profissionais / Experiences */}
        <Experiences currentLang={currentLang} />

        {/* Habilidades Técnicas / Skills */}
        <Skills currentLang={currentLang} />

        {/* Contato & Redes Sociais / Contact */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenReadme={() => setIsReadmeOpen(true)}
      />

      {/* Academic README Modal Viewer */}
      <ReadmeModal
        isOpen={isReadmeOpen}
        onClose={() => setIsReadmeOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
