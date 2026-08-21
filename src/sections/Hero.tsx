import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionFooter from "./SectionFooter";
import { Github } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const Hero: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="flex-1 flex flex-col justify-center items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10"
        >
          <img
            src="bharat_imag.jpg"
            alt="Bharat Kharpuse"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
              Bharat Kharpuse
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-300 font-light">
              <Typewriter text="Research Fellow, FOOT-Collaboration, INFN-Torino, Italy – 10125" speed={75} />
            </p>
            <motion.div className="mt-6 flex justify-center md:justify-start gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Button asChild className="px-6 py-3 text-lg bg-black text-white hover:bg-gray-800">
                <a href="Bharat_CVU.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
              <Button asChild className="px-6 py-3 text-lg bg-red-600 text-white hover:bg-red-700">
                <a href="https://web.infn.it/foot/en/home/" target="_blank" rel="noopener noreferrer">Group</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Innovative GitHub logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a
            href="https://github.com/kharpusebharat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
            <span>View My GitHub</span>
          </a>
        </motion.div>
      </div>
      <SectionFooter sectionId="Home" small onNavigate={onNavigate} />
    </div>
  );
};

export default Hero;
