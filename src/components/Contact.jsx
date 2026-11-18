import React from 'react';
import { motion } from 'motion/react';
import {
  Mail, MessageSquare, Sparkles, Linkedin, Github, Instagram, ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = ({ currentLang }) => {
  const isPt = currentLang === 'pt';

  const socialChannels = [
    {
      name: 'LinkedIn',
      handle: 'annaluizapereira03',
      url: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      description: isPt ? 'Perfil profissional e conexões' : 'Professional profile & network'
    },
    {
      name: 'GitHub',
      handle: 'annaluizapsilva-03',
      url: PERSONAL_INFO.github,
      icon: Github,
      description: isPt ? 'Repositórios e projetos de estudo' : 'Repositories & study projects'
    },
    {
      name: 'Instagram',
      handle: '@annapsilval',
      url: PERSONAL_INFO.instagram,
      icon: Instagram,
      description: isPt ? 'Rede social e dia a dia' : 'Social profile'
    },
   {
      name: 'WhatsApp',
      handle: isPt ? 'Conversa Direta' : 'Direct Chat',
      url: PERSONAL_INFO.whatsappUrl,
      icon: MessageSquare,
      description: isPt ? 'Contato rápido via WhatsApp' : 'Quick chat on WhatsApp'
    },
    {
      name: 'E-mail',
      handle: PERSONAL_INFO.email,
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      description: isPt ? 'Contato por correio eletrônico' : 'Direct email contact'
    }
  ];

  return (
    <section id="contato" className="py-20 md:py-28 relative bg-[#09090b] border-t border-[#1a1a20]">
      
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isPt ? 'Canais Diretos' : 'Direct Channels'}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">{isPt ? 'Contato' : 'Contact'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            {isPt ? 'Onde me ' : 'Where to '}
            <span className="text-gold-gradient">{isPt ? 'encontrar' : 'reach me'}</span>.
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            {isPt
              ? 'Aberta a conexões, trocas acadêmicas e oportunidades de estágio em Engenharia de Software.'
              : 'Open to connections, academic collaborations, and Software Engineering internship opportunities.'}
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialChannels.map((channel, idx) => {
            const IconComp = channel.icon;
            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 bg-[#0e0e13] border border-[#24242c] hover:border-[#d4af37]/50 rounded-xl flex items-center justify-between gap-4 group transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-lg bg-[#181820] border border-[#2a2a34] group-hover:border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:scale-105 transition-all shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white group-hover:text-[#d4af37] transition-colors truncate">
                      {channel.name}
                    </div>
                    <div className="text-xs text-[#facc15]/90 font-mono truncate">
                      {channel.handle}
                    </div>
                    <div className="text-xs text-zinc-400 font-normal mt-0.5 truncate">
                      {channel.description}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
