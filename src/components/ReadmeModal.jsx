import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, FileText, Download } from 'lucide-react';
import { TEMPLATE_README_CONTENT } from '../data/portfolioData';

export const ReadmeModal = ({ isOpen, onClose, currentLang }) => {
  const [copied, setCopied] = useState(false);
  const isPt = currentLang === 'pt';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(TEMPLATE_README_CONTENT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([TEMPLATE_README_CONTENT], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative bg-[#0d0d12] border border-[#27272a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col z-10"
        >
          
          <div className="px-6 py-4 border-b border-[#222228] bg-[#121217] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#d4af37]" />
              <div>
                <h3 className="text-sm font-bold text-white font-mono">README.md</h3>
                <p className="text-[11px] text-zinc-400">
                  {isPt ? 'Documentação acadêmica e guia de implantação' : 'Academic documentation & deployment guide'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 text-xs font-medium text-zinc-200 bg-[#1c1c22] border border-[#2e2e38] hover:border-[#d4af37]/40 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#d4af37]" />}
                <span>{copied ? (isPt ? 'Copiado!' : 'Copied!') : (isPt ? 'Copiar Markdown' : 'Copy')}</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-3 py-1.5 text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isPt ? 'Baixar' : 'Download'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-[#202026] rounded-lg transition-colors ml-1"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          
          <div className="p-6 overflow-y-auto font-mono text-xs text-zinc-300 leading-relaxed bg-[#0a0a0e] select-text">
            <pre className="whitespace-pre-wrap break-words">{TEMPLATE_README_CONTENT}</pre>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
