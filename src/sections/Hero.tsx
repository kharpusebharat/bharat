import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionFooter from "./SectionFooter";
import { ArrowRight, BookOpen, Github, MapPin } from "lucide-react";

const Hero: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex h-full min-h-full w-full flex-col bg-[#f7f8f5] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),transparent_30%)]" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
            <span className="h-px w-8 bg-cyan-600" /> Nuclear physics researcher
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl">
            Bharat <span className="text-cyan-700">Kharpuse</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-slate-800 sm:text-2xl sm:leading-9">
            Nuclear reactions, detector systems, and the measurements that move physics toward medicine.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} /> INFN Torino, Italy · FOOT Collaboration</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild className="bg-cyan-600 px-5 py-3 text-base font-semibold text-white shadow-[0_0_24px_rgba(8,145,178,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-700">
              <a href="#Research" onClick={() => onNavigate?.("Research")}>Explore my research <ArrowRight size={17} /></a>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 bg-white/60 px-5 py-3 text-base text-slate-800 hover:bg-white">
              <a href="Bharat_CVU.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
          </div>
          <div className="mt-9 grid w-full max-w-xl grid-cols-3 border-y border-slate-200 py-4 text-left">
            <div className="border-r border-slate-200 pr-3"><p className="text-lg font-bold text-slate-900">FOOT</p><p className="mt-1 text-xs leading-4 text-slate-500">collaboration</p></div>
            <div className="border-r border-slate-200 px-3"><p className="text-lg font-bold text-slate-900">Vi-Hi</p><p className="mt-1 text-xs leading-4 text-slate-500">Collaboration</p></div>
            <div className="pl-3"><p className="text-lg font-bold text-slate-900">INFN</p><p className="mt-1 text-xs leading-4 text-slate-500">Torino, Italy</p></div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-600 lg:justify-start">
            <a href="https://github.com/kharpusebharat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-700"><Github size={17} /> GitHub</a>
            <a href="https://baltig.infn.it/kharpuse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-700"><Github size={17} /> GitLab</a>
            <a href="https://web.infn.it/foot/en/home/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-700"><BookOpen size={17} /> FOOT experiment</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 relative mx-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:order-2 lg:max-w-[20rem]"
        >
          <div className="absolute -inset-4 rounded-[1.75rem] bg-[#102f43] shadow-[0_22px_60px_rgba(16,47,67,0.2)]" />
          <div className="absolute -right-4 -top-4 h-20 w-20 border-r border-t border-cyan-500/70" />
          <img
            src="bharat_imag.jpeg"
            alt="Bharat Kharpuse"
            className="relative aspect-[4/5] w-full rounded-[1.35rem] object-cover shadow-[0_22px_65px_rgba(14,165,233,0.22)] grayscale-[15%]"
          />
          <div className="absolute -bottom-4 -left-4 max-w-[11rem] rounded-lg border border-white/10 bg-[#102f43]/95 p-3 shadow-[0_16px_34px_rgba(2,6,23,0.26)] backdrop-blur-sm">
            <p className="text-2xl font-bold text-cyan-300">FOOT</p>
            <p className="mt-1 text-xs leading-5 text-slate-200">Fragmentation studies for particle therapy and space radioprotection.</p>
          </div>
        </motion.div>
      </div>
      <SectionFooter sectionId="Home" small onNavigate={onNavigate} />
    </div>
  );
};

export default Hero;
