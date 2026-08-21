// components/OverlayAnimation.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OverlayAnimation() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // 2s total display
    return () => clearTimeout(timer);
  }, []);

  const name = "Bharat Kharpuse";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-110%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Animated name */}
          <motion.h1
            className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 text-base md:text-lg mb-2 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Research Fellow — INFN Torino&nbsp;·&nbsp;FOOT Collaboration
          </motion.p>

          {/* Underline animation */}
          <motion.div
            className="h-[2px] bg-sky-400 rounded-full w-32"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Fade-out message */}
          <motion.span
            className="absolute bottom-12 text-white/60 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            It's Your Day …
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
