import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, FileText, Github, Home, Linkedin, Mail } from "lucide-react";

interface SectionFooterProps {
  sectionId: string;
  onNavigate?: (id: string) => void;
  small?: boolean;
}

const SectionFooter: React.FC<SectionFooterProps> = ({ sectionId, onNavigate, small }) => {
  const handleBackToTop = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      const panel = el.closest(".section-panel") as HTMLElement | null;
      if (panel) {
        panel.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleGoHome = () => {
    if (onNavigate) {
      onNavigate("Home");
    }
  };

  if (small) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 px-5 py-5"
      >
        <button
          onClick={handleBackToTop}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-300 hover:text-cyan-300"
        >
          <ArrowUp size={16} />
          Top
        </button>
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#071b2b] transition-colors hover:bg-cyan-300"
        >
          <Home size={16} />
          Home
        </button>
      </motion.div>
    );
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-8 border-t border-slate-200 bg-[#102f43] text-white"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.3fr_1fr_auto] md:items-center">
        <div>
          <h3 className="text-lg font-bold tracking-tight">Bharat Kharpuse</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">Nuclear physics researcher working on detector systems and medical applications.</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">INFN Torino · FOOT Collaboration</p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <a href="mailto:bharatkharpuse@gmail.com" className="flex items-center gap-2 hover:text-cyan-300"><Mail size={16} /> bharatkharpuse@gmail.com</a>
          <a href="Bharat_CVU.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-300"><FileText size={16} /> Curriculum vitae</a>
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for collaboration</span>
        </div>
        <div className="flex items-center gap-3 md:justify-self-end">
          <a href="https://github.com/kharpusebharat" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="rounded-lg border border-white/15 p-2 text-slate-300 hover:border-cyan-300 hover:text-cyan-300"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/bharat-kharpuse-369728161/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="rounded-lg border border-white/15 p-2 text-slate-300 hover:border-cyan-300 hover:text-cyan-300"><Linkedin size={18} /></a>
          <button onClick={handleBackToTop} aria-label="Back to top" title="Back to top" className="rounded-lg bg-cyan-400 p-2 text-[#071b2b] hover:bg-cyan-300"><ArrowUp size={18} /></button>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-400 sm:px-8 md:text-left">
        © {new Date().getFullYear()} Bharat Kharpuse. Built for research, collaboration, and discovery.
      </div>
    </motion.footer>
  );
};

export default SectionFooter;