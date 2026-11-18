import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experiences = ({ currentLang }) => {
  const isPt = currentLang === 'pt';

  return (
    <section id="experiencias" className="py-20 md:py-28 relative bg-[#09090b] border-t border-[#1a1a20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isPt ? 'Trajetória Acadêmica' : 'Academic Background'}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">{isPt ? 'Experiências & Formação' : 'Experience'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            {isPt ? 'Formação na PUC Minas, projetos e ' : 'PUC Minas studies, projects and '}
            <span className="text-gold-gradient">{isPt ? 'vivência em tecnologia' : 'tech community engagement'}</span>.
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            {isPt
              ? 'Registro da minha jornada acadêmica em Engenharia de Software, disciplinas de laboratório e participação em eventos e projetos de estudo.'
              : 'Record of my academic journey in Software Engineering, practical coursework labs, and participation in tech events and study projects.'}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#27272a] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Gold Marker Pin */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#09090b] border-2 border-[#d4af37] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="bg-[#0e0e13] border border-[#24242c] hover:border-[#d4af37]/40 rounded-xl p-6 sm:p-7 transition-all duration-300">
                {/* Meta details with zero pills */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <span className="text-[#facc15] font-semibold">{exp.type[currentLang]}</span>
                    <span className="text-zinc-600">/</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.period[currentLang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role and Institution */}
                <h3 className="text-xl font-bold font-display text-white tracking-tight mb-1 group-hover:text-[#d4af37] transition-colors">
                  {exp.role[currentLang]}
                </h3>

                <div className="text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#d4af37]" />
                  <span>{exp.company}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-5">
                  {exp.description[currentLang]}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-5">
                  {exp.achievements[currentLang].map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Applied Technologies */}
                <div className="pt-4 border-t border-[#1f1f26] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1 mr-1">
                    <Terminal className="w-3 h-3 text-[#d4af37]" />
                    <span>Stack:</span>
                  </span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-zinc-300 bg-[#16161e] border border-[#27272a] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
