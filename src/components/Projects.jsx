import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, ExternalLink, Play, ArrowUpDown, 
  Sparkles, Layers
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ currentLang }) => {
  const [sortOrder, setSortOrder] = useState('oldestFirst');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const isPt = currentLang === 'pt';

  const categories = [
    { id: 'all', label: isPt ? 'Todos os Projetos' : 'All Projects' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'produtividade', label: isPt ? 'Produtividade' : 'Productivity' },
    { id: 'gastronomia', label: isPt ? 'Gastronomia' : 'Dining' },
    { id: 'educacao', label: isPt ? 'Educação' : 'Education' },
    { id: 'saude', label: isPt ? 'Saúde' : 'Health' },
  ];

  
  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'fintech') return p.id === 'finansmart';
    if (selectedCategory === 'produtividade') return p.id === 'lista-de-tarefas';
    if (selectedCategory === 'gastronomia') return p.id === 'cardapio-restaurante';
    if (selectedCategory === 'educacao') return p.id === 'cadastro-alunos';
    if (selectedCategory === 'saude') return p.id === 'calculadora-imc';
    return true;
  });

  
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    return sortOrder === 'oldestFirst' ? a.order - b.order : b.order - a.order;
  });

  return (
    <section id="projetos" className="py-20 md:py-28 relative bg-[#09090b]">
      
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/4 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{isPt ? 'Linha do Tempo de Engenharia' : 'Engineering Timeline'}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{isPt ? 'Projetos em Destaque' : 'Featured Works'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              {isPt ? 'Evolução cronológica de ' : 'Chronological evolution of '}
              <span className="text-gold-gradient">{isPt ? 'sistemas e aplicações' : 'systems & applications'}</span>.
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              {isPt
                ? 'Apresentados do mais antigo ao mais recente, cada projeto possui repositório com código aberto no GitHub e demonstração interativa funcional.'
                : 'Arranged from earliest to most recent milestone, featuring public GitHub repositories and live interactive testing sandboxes.'}
            </p>
          </div>

          
          <div className="flex items-center gap-2 bg-[#121217] border border-[#27272a] p-1.5 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSortOrder(sortOrder === 'oldestFirst' ? 'newestFirst' : 'oldestFirst')}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:text-white bg-[#1a1a20] hover:bg-[#202028] border border-[#2e2e38] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>
                {sortOrder === 'oldestFirst'
                  ? isPt
                    ? 'Ordem: Mais Antigos Primeiro (Cronológica)'
                    : 'Order: Oldest First (Timeline)'
                  : isPt
                  ? 'Ordem: Mais Recentes Primeiro'
                  : 'Order: Newest First'}
              </span>
            </button>
          </div>
        </div>

        
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#d4af37] text-black font-semibold shadow-sm shadow-[#d4af37]/20'
                  : 'bg-[#141418] border border-[#27272a] text-zinc-400 hover:text-white hover:border-[#383842]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        
        <div className="mb-8 py-2 px-4 bg-[#121218] border border-[#22222a] rounded-xl flex items-center justify-between text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {isPt ? 'Linha do Tempo Ativa:' : 'Active Timeline:'}{' '}
              <strong className="text-zinc-200">
                {sortOrder === 'oldestFirst' ? 'Jul 2026 → Nov 2026' : 'Nov 2026 → Jul 2026'}
              </strong>
            </span>
          </div>
          <span className="text-zinc-500">
            {sortedProjects.length} {isPt ? 'projetos catalogados' : 'projects listed'}
          </span>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {sortedProjects.map((project, idx) => {
            const isFeatured = project.id === 'finansmart' || project.id === 'cardapio-restaurante';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group bg-[#0d0d12] border border-[#24242d] hover:border-[#d4af37]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 ${
                  isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div className={isFeatured ? 'grid grid-cols-1 lg:grid-cols-12 gap-6' : ''}>
                  
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className={`relative overflow-hidden cursor-pointer bg-[#14141b] group ${
                      isFeatured ? 'lg:col-span-7 aspect-[16/10] sm:aspect-[16/9]' : 'aspect-video'
                    }`}
                  >
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity" />

                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <div className="px-4 py-2.5 bg-[#d4af37] text-black font-semibold text-xs rounded-xl flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isPt ? 'Abrir Demonstração & Telas' : 'Launch Interactive Demo'}</span>
                      </div>
                    </div>

                    
                    <div className="absolute top-3 left-3 bg-[#0d0d11]/85 backdrop-blur-md border border-[#27272a] px-2.5 py-1 rounded-md text-[11px] font-mono text-[#facc15] flex items-center gap-1.5">
                      <span>#{project.order}</span>
                      <span className="text-zinc-600">·</span>
                      <span>{project.date}</span>
                    </div>
                  </div>

                  
                  <div className={`p-6 flex flex-col justify-between ${isFeatured ? 'lg:col-span-5' : ''}`}>
                    <div>
                      
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-2.5">
                        <span className="text-[#d4af37]">{project.category}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span className="text-zinc-400">Anna Luiza</span>
                      </div>

                      <h3 className="text-2xl font-bold font-display text-white tracking-tight mb-2 group-hover:text-[#d4af37] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[#facc15]/90 mb-3 leading-relaxed">
                        {project.tagline[currentLang]}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-5 line-clamp-3">
                        {project.description[currentLang]}
                      </p>

                      
                      <div className="pt-2 pb-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-zinc-300 bg-[#16161d] border border-[#27272a] px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    
                    <div className="pt-4 border-t border-[#222228] flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-3.5 py-2 text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{isPt ? 'Testar Aplicação' : 'Test Live'}</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-[#181820] border border-[#27272a] hover:border-[#d4af37]/40 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <Github className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          currentLang={currentLang}
        />
      )}
    </section>
  );
};
