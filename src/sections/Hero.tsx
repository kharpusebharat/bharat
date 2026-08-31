import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionFooter from "./SectionFooter";
import { ArrowRight, BookOpen, Github, MapPin } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const Hero: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex h-full min-h-full w-full flex-col bg-[#071b2b] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_30%)]" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.15)]">
            <span className="h-2 w-2 rounded-full bg-cyan-300" /> Nuclear physics researcher
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Bharat<br />
            <span className="bg-gradient-to-r from-cyan-200 via-white to-sky-400 bg-clip-text text-transparent">Kharpuse</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            I study nuclear reactions and detector systems that connect fundamental physics with medical applications.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> INFN Torino, Italy · FOOT Collaboration</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild className="bg-cyan-400 px-5 py-3 text-base font-semibold text-[#071b2b] shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300">
              <a href="#Research" onClick={() => onNavigate?.("Research")}>Explore my research <ArrowRight size={17} /></a>
            </Button>
            <Button asChild variant="outline" className="border-slate-500 bg-transparent px-5 py-3 text-base text-white hover:bg-white/10">
              <a href="Bharat_CVU.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-300 lg:justify-start">
            <a href="https://github.com/kharpusebharat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"><Github size={17} /> GitHub</a>
            <a href="https://baltig.infn.it/kharpuse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"><Github size={17} /> GitLab</a>
            <a href="https://web.infn.it/foot/en/home/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"><BookOpen size={17} /> FOOT experiment</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 relative mx-auto w-full max-w-md lg:order-2"
        >
          <div className="absolute -inset-5 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 blur-sm" />
          <div className="absolute inset-4 rounded-[1.5rem] border border-white/10" />
          <img
            src="bharat_imag.jpeg"
            alt="Bharat Kharpuse"
            className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-[0_25px_80px_rgba(14,165,233,0.25)] grayscale-[15%]"
          />
          <div className="absolute -bottom-5 -left-5 max-w-[13rem] rounded-xl border border-white/10 bg-[#102f43]/90 p-4 shadow-[0_18px_40px_rgba(2,6,23,0.45)] backdrop-blur-sm">
            <p className="text-3xl font-bold text-cyan-300">FOOT</p>
            <p className="mt-1 text-sm leading-5 text-slate-300">Fragmentation studies for particle therapy and space radioprotection.</p>
          </div>
        </motion.div>
      </div>
      <SectionFooter sectionId="Home" small onNavigate={onNavigate} />
    </div>
  );
};

export default Hero;
