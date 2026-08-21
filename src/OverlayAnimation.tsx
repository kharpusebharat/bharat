import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function OverlayAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1200); // 1.2s animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-white text-3xl font-bold"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Welcome
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
