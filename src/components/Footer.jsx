import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = ({ currentLang, onOpenReadme }) => {
  const isPt = currentLang === 'pt';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#18181f] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#18181f]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold font-display text-white tracking-tight flex items-center gap-2">
              <span>Anna Luiza</span>
              <span className="text-[#d4af37] font-mono text-base">/&gt;</span>
            </span>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm">
              {isPt
                ? 'Estudante de Engenharia de Software (2º período) na PUC Minas.'
                : 'Software Engineering Student (2nd Semester) at PUC Minas.'}
            </p>
          </div>

          {/* Nav links & Readme button */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#sobre" className="hover:text-[#d4af37] transition-colors">
              {isPt ? 'Sobre Mim' : 'About Me'}
            </a>
            <a href="#projetos" className="hover:text-[#d4af37] transition-colors">
              {isPt ? 'Projetos' : 'Projects'}
            </a>
            <a href="#experiencias" className="hover:text-[#d4af37] transition-colors">
              {isPt ? 'Experiências' : 'Experience'}
            </a>
            <a href="#habilidades" className="hover:text-[#d4af37] transition-colors">
              {isPt ? 'Habilidades' : 'Skills'}
            </a>
            <a href="#contato" className="hover:text-[#d4af37] transition-colors">
              {isPt ? 'Contato' : 'Contact'}
            </a>

            <button
              onClick={onOpenReadme}
              className="text-[#d4af37] hover:underline flex items-center gap-1 font-mono"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>README.md</span>
            </button>
          </div>

          {/* Social icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#15151c] rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#15151c] rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#15151c] rounded-lg transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title="Email"
              className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#15151c] rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title={isPt ? 'Voltar ao topo' : 'Back to top'}
              className="p-2 text-zinc-400 hover:text-black hover:bg-[#d4af37] rounded-lg transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-2">
          <p>© {new Date().getFullYear()} Anna Luiza Pereira Silva. {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
          <p className="flex items-center gap-1">
            <span>{isPt ? 'Desenvolvido com' : 'Crafted with'}</span>
            <span className="text-[#d4af37] font-semibold">React (JSX) + Vite + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
