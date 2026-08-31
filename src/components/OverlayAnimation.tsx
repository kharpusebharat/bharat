// components/OverlayAnimation.tsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type OverlayAnimationProps = {
  logoSrc?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  visibleMs?: number;
  dismissible?: boolean;
};

export default function OverlayAnimation({
  logoSrc,
  fromColor = "#071029",
  viaColor = "#0ea5e9",
  toColor = "#061021",
  visibleMs = 1800,
  dismissible = true,
}: OverlayAnimationProps) {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dismissible) setVisible(false);
    }, visibleMs);
    return () => clearTimeout(timer);
  }, [dismissible, visibleMs]);

  const name = useMemo(
    () => ["Bharat", " Kharpuse"].map((part, index) => (
      <span key={part + index} className={index === 0 ? "text-white" : "text-cyan-300"}>
        {part}
      </span>
    )),
    []
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(circle at top, ${viaColor} 0%, ${fromColor} 38%, ${toColor} 100%)`,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
            animate={prefersReducedMotion ? undefined : { x: [0, 35, -20, 0], y: [0, 25, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl"
            animate={prefersReducedMotion ? undefined : { x: [0, -25, 20, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {logoSrc ? (
              <motion.img
                src="bharat_imag_1.jpg"
                alt="bharat portrait"
                className="mb-6 h-14 w-14 rounded-full border border-white/15 bg-white/5 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
              />
            ) : null}

            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-200/90 backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Research Fellow
            </motion.div>

            <motion.h1
              className="mb-3 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              {name}
            </motion.h1>

            <motion.p
              className="mb-5 max-w-xl text-sm text-slate-200/85 md:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
              INFN Torino · FOOT Collaboration
            </motion.p>

            <motion.div
              className="relative h-[2px] w-32 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div
                className="h-full w-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
                initial={{ x: "-110%" }}
                animate={{ x: "110%" }}
                transition={{ delay: 0.8, duration: 1.1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Nuclear Physics · Medical Applications
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
