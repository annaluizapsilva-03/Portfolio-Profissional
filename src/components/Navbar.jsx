import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileText, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ currentLang, onToggleLang, onOpenReadme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: currentLang === 'pt' ? 'Sobre Mim' : 'About Me' },
    { href: '#projetos', label: currentLang === 'pt' ? 'Projetos' : 'Projects' },
    { href: '#experiencias', label: currentLang === 'pt' ? 'Experiências' : 'Experience' },
    { href: '#habilidades', label: currentLang === 'pt' ? 'Habilidades' : 'Skills' },
    { href: '#contato', label: currentLang === 'pt' ? 'Contato' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="font-display">Anna Luiza</span>
          <span className="text-[#d4af37] text-lg font-mono">/&gt;</span>
        </a>

        {/* Zone 2: Navigation Links (single-line, subtle hover underlines) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#facc15] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#d4af37] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Language switcher & Primary CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* README viewer button */}
          <button
            onClick={onOpenReadme}
            title={currentLang === 'pt' ? 'Ver documentação acadêmica e README' : 'View academic documentation and README'}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-[#18181b] border border-[#27272a] hover:border-[#d4af37]/50 rounded-lg transition-all whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>README.md</span>
          </button>

          {/* Bilingual Switcher */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white bg-[#18181b] border border-[#27272a] hover:border-[#d4af37]/60 rounded-lg transition-all whitespace-nowrap shrink-0"
            aria-label="Alternar idioma"
          >
            <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="uppercase">{currentLang === 'pt' ? 'PT' : 'EN'}</span>
            <span className="text-zinc-500 text-[10px]">|</span>
            <span className="text-zinc-400 text-[10px] uppercase">{currentLang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Primary Action Button */}
          <a
            href="#contato"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded-lg transition-colors shadow-sm shadow-[#d4af37]/20 whitespace-nowrap shrink-0"
          >
            <span>{currentLang === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e11] border-b border-[#27272a] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#d4af37] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#27272a] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReadme();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-medium text-zinc-200 bg-[#18181b] border border-[#27272a] rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span>{currentLang === 'pt' ? 'Ver Documentação & README.md' : 'View Docs & README.md'}</span>
            </button>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded-lg"
            >
              <span>{currentLang === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
