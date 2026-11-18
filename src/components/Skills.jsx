import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles, Code, FileCode2, Terminal, Cpu, Layout,
  Palette, Zap, Server, Layers, Database, HardDrive,
  ArrowLeftRight, GitBranch, Cloud
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills = ({ currentLang }) => {
  const isPt = currentLang === 'pt';

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
      case 'Atom':
        return <Code className="w-4 h-4" />;
      case 'FileCode2':
        return <FileCode2 className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'HardDrive':
        return <HardDrive className="w-4 h-4" />;
      case 'ArrowLeftRight':
        return <ArrowLeftRight className="w-4 h-4" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 md:py-28 relative bg-[#09090b] border-t border-[#1a1a20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isPt ? 'Stack Técnica' : 'Tech Stack'}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">{isPt ? 'Habilidades' : 'Skills'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            {isPt ? 'Tecnologias e ' : 'Core technologies & '}
            <span className="text-gold-gradient">{isPt ? 'ferramentas' : 'tools'}</span>.
          </h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title.pt}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: catIdx * 0.08 }}
              className="bg-[#0e0e13] border border-[#24242c] hover:border-[#d4af37]/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1f1f26]">
                <h3 className="text-base font-bold font-display text-white tracking-tight">
                  {cat.title[currentLang]}
                </h3>
                <span className="text-xs text-[#d4af37] font-mono">0{catIdx + 1}</span>
              </div>

              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2.5 text-sm text-zinc-200"
                  >
                    <span className="text-[#d4af37] shrink-0">{renderIcon(skill.icon)}</span>
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
