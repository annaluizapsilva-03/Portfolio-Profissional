import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ArrowDown, ExternalLink, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = ({ currentLang }) => {
  const isPt = currentLang === 'pt';

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d4af37]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#eab308]/4 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
              <GraduationCap className="w-4 h-4 text-[#d4af37]" />
              <span>{isPt ? 'Engenharia de Software · PUC Minas' : 'Software Engineering · PUC Minas'}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{isPt ? '2º Período' : '2nd Semester'}</span>
            </div>

            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.12] text-balance">
              {isPt ? (
                <>
                  Da lógica à interface:{' '}
                  <span className="text-gold-gradient">engenharia de software na prática</span>.
                </>
              ) : (
                <>
                  From logic to interface:{' '}
                  <span className="text-gold-gradient">software engineering in practice</span>.
                </>
              )}
            </h1>

            
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
              {isPt
                ? 'Olá, sou Anna Luiza Pereira Silva, estudante do 2º período de Engenharia de Software na PUC Minas. Aqui reúno meus projetos acadêmicos, evolução técnica e aplicações desenvolvidas ao longo da graduação.'
                : "Hello, I'm Anna Luiza Pereira Silva, a 2nd-semester Software Engineering student at PUC Minas. Here I showcase my academic projects, technical progression, and applications built throughout my degree."}
            </p>

            
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="px-6 py-3.5 text-sm font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded-xl transition-all shadow-md shadow-[#d4af37]/25 flex items-center gap-2"
              >
                <span>{isPt ? 'Ver Linha do Tempo de Projetos' : 'Explore Projects Timeline'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-sm font-medium text-zinc-200 hover:text-white bg-[#141418] hover:bg-[#1a1a20] border border-[#27272a] hover:border-[#d4af37]/50 rounded-xl transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#d4af37]" />
                <span>GitHub @annaluizapsilva-03</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            
            <div className="pt-4 border-t border-[#27272a]/80 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                {isPt ? 'Redes & Conexões:' : 'Connect & Socials:'}
              </span>

              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#18181b] rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#18181b] rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#18181b] rounded-lg transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  title="Email"
                  className="p-2 text-zinc-400 hover:text-[#d4af37] hover:bg-[#18181b] rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#f59e0b]/20 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />

              
              <div className="relative bg-[#0d0d10] border border-[#27272a] hover:border-[#d4af37]/50 rounded-2xl p-3 transition-all duration-300 overflow-hidden shadow-2xl">
                
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#18181b]">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Anna Luiza Pereira Silva - Estudante de Engenharia de Software"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-white font-semibold text-lg font-display tracking-tight">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-xs text-[#facc15] font-medium">
                      {PERSONAL_INFO.role[currentLang]}
                    </p>
                  </div>
                </div>

                
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-zinc-400">
                  <span>{PERSONAL_INFO.location}</span>
                  <span className="text-[#d4af37] font-mono text-[11px]">{PERSONAL_INFO.institution}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#27272a]/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              2º <span className="text-[#d4af37]">{isPt ? 'Período' : 'Term'}</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {isPt ? 'Engenharia de Software · PUC Minas' : 'Software Engineering · PUC Minas'}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              5 <span className="text-[#d4af37]">{isPt ? 'Projetos' : 'Projects'}</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {isPt ? 'Linha do Tempo no GitHub' : 'Chronological GitHub Showcase'}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">
              Python <span className="text-[#d4af37]">&amp; Java</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {isPt ? 'Lógica e Programação Modular' : 'Core Logic & Modular Programming'}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">
              React <span className="text-[#d4af37]">&amp; JS</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {isPt ? 'Interfaces Web & APIs' : 'Web Interfaces & APIs'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
