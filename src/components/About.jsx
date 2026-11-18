import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Target, Sparkles, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState(currentLang);

  useEffect(() => {
    setActiveTab(currentLang);
  }, [currentLang]);

  const isPt = activeTab === 'pt';
  const content = PERSONAL_INFO.about[activeTab];

  const pillars = [
    {
      icon: GraduationCap,
      title: isPt ? 'Formação Acadêmica' : 'Academic Education',
      description: content.education,
      detail: isPt ? 'PUC Minas · 2º Período de Engenharia de Software' : 'PUC Minas · 2nd Semester Software Engineering'
    },
    {
      icon: Target,
      title: isPt ? 'Objetivos Profissionais' : 'Career Goals',
      description: content.careerGoals,
      detail: isPt ? 'Estágio em Tecnologia · Evolução Contínua' : 'Tech Internship · Continuous Growth'
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 relative bg-[#09090b] border-t border-[#1f1f23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{isPt ? 'Conheça Minha Trajetória' : 'Discover My Journey'}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{isPt ? 'Sobre Mim' : 'About Me'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              {isPt ? 'Formação sólida e ' : 'Solid academic foundation and '}
              <span className="text-gold-gradient">{isPt ? 'aprendizado contínuo' : 'continuous learning'}</span>.
            </h2>
          </div>

          
          <div className="flex items-center p-1 bg-[#141418] border border-[#27272a] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('pt')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'pt'
                  ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Português (PT-BR)
            </button>
            <button
              onClick={() => setActiveTab('en')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'en'
                  ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              English (EN-US)
            </button>
          </div>
        </div>

       
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0f0f13] border border-[#27272a] rounded-2xl p-6 sm:p-8 md:p-10 mb-8 relative overflow-hidden"
        >
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/5 blur-3xl pointer-events-none" />

          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
            {content.bio}
          </p>

          <div className="mt-6 pt-6 border-t border-[#27272a]/60 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle className="w-4 h-4 text-[#d4af37]" />
              <span>{isPt ? 'Em busca de estágio em Engenharia de Software' : 'Seeking a Software Engineering Internship'}</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <span>{isPt ? 'Instituição:' : 'University:'}</span>
              <span className="text-zinc-300 font-medium">PUC Minas · 2º Período</span>
            </div>
          </div>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0e0e12] border border-[#27272a] hover:border-[#d4af37]/40 rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#18181e] border border-[#27272a] flex items-center justify-center text-[#d4af37] mb-5 group-hover:scale-105 group-hover:border-[#d4af37]/40 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#27272a]/60 text-xs text-[#facc15] font-mono">
                  {pillar.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
