import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Home } from "lucide-react";

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
        className="flex justify-center gap-4 mt-8"
      >
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <ArrowUp size={16} />
          Top
        </button>
        <button
          onClick={handleGoHome}
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-500 transition-colors"
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
      className="mt-8 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="w-full px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Bharat Kharpuse</h3>
            {/* <p className="text-gray-300">Research Fellow | Nuclear Physics Enthusiast</p> */}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>
            <button
              onClick={handleGoHome}
              className="flex items-center gap-2 px-6 py-3 bg-sky-500 rounded-full hover:bg-sky-400 transition-all duration-300 hover:scale-105"
            >
              <Home size={18} />
              Home
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default SectionFooter;