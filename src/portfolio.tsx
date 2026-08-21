import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import OverlayAnimation from "@/components/OverlayAnimation";
import Navbar from "@/sections/Navbar";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Research from "@/sections/Research";
import Publications from "@/sections/Publications";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";
//import CursorParticles from "@/components/CursorParticles";

const NAV_ITEMS = [
  "Home",
  "About",
  "Research",
  "Publications",
  "Gallery",
  "Contact",
] as const;
type SectionId = (typeof NAV_ITEMS)[number];

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<SectionId>("Home");

  const idxMap = useMemo(
    () =>
      NAV_ITEMS.reduce<Record<string, number>>(
        (acc, v, i) => ({ ...acc, [v]: i }),
        {}
      ),
    []
  );

  // hash → active
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && NAV_ITEMS.includes(hash as SectionId)) {
      setActive(hash as SectionId);
    }
  }, []);

  // arrow keys / page up‑down
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const nextIdx = Math.min(idxMap[active] + 1, NAV_ITEMS.length - 1);
        navigateTo(NAV_ITEMS[nextIdx]);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prevIdx = Math.max(idxMap[active] - 1, 0);
        navigateTo(NAV_ITEMS[prevIdx]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, idxMap]);

  // scroll‐to‐top when switching panels
  useEffect(() => {
    const el = document.getElementById(active);
    if (el) {
      const panel = el.closest(".section-panel") as HTMLElement | null;
      if (panel) panel.scrollTo({ top: 0 });
    }
  }, [active]);

  const navigateTo = (id: SectionId) => {
    setActive(id);
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <>
      <OverlayAnimation
        logoSrc="/logo.png"
        fromColor="#071029"
        viaColor="#0ea5e9"
        toColor="#061021"
        visibleMs={1200}
        dismissible
      />
      <Navbar
        items={NAV_ITEMS}
        active={active}
        onNavigate={navigateTo}
      />
      {/* <CursorParticles /> */}

      <main id="site-root" className="w-full h-screen overflow-hidden relative">
        <div id="section-wrapper" className="w-full h-full relative">
          <motion.div
            id="Home"
            className={`section-panel absolute inset-0 overflow-y-auto ${
              active === "Home" ? "z-10" : "pointer-events-none"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={active === "Home" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
              <Hero onNavigate={navigateTo} />
          </motion.div>

          <motion.div
            id="About"
            className={`section-panel absolute inset-0 overflow-y-auto ${
              active === "About" ? "z-10" : "pointer-events-none"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={
              active === "About" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <About onNavigate={navigateTo} />
          </motion.div>

          <motion.div
            id="Research"
            className={`section-panel absolute inset-0 overflow-y-auto ${
              active === "Research" ? "z-10" : "pointer-events-none"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={
              active === "Research" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <Research onNavigate={navigateTo} />
          </motion.div>

          <motion.div
            id="Publications"
            className={`section-panel absolute inset-0 overflow-y-auto ${
              active === "Publications" ? "z-10" : "pointer-events-none"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={
              active === "Publications" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <Publications onNavigate={navigateTo} />
          </motion.div>

          <motion.div
            id="Gallery"
            className={`section-panel absolute inset-0 overflow-y-auto ${
              active === "Gallery" ? "z-10" : "pointer-events-none"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={
              active === "Gallery" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <Gallery onNavigate={navigateTo} />
          </motion.div>

          <motion.div
            id="Contact"
            className={`section-panel absolute inset-0 overflow-y-auto ${
              active === "Contact" ? "z-10" : "pointer-events-none"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={
              active === "Contact" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <Contact onNavigate={navigateTo} />
          </motion.div>
        </div>
      </main>
      {/* <footer className="py-6 text-center text-sm text-slate-500 bg-white">
        © {new Date().getFullYear()} Bharat Kharpuse
      </footer> */}
    </>
  );
};

export default Portfolio;