import React, { useEffect, useState } from "react";
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

const NAV_ITEMS = ["Home", "Research", "Publications", "About", "Gallery", "Contact"] as const;
type SectionId = (typeof NAV_ITEMS)[number];

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<SectionId>("Home");

  const navigateTo = (id: SectionId) => {
    setActive(id);
    window.history.pushState(null, "", `#${id}`);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && NAV_ITEMS.includes(hash as SectionId)) {
      setActive(hash as SectionId);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = NAV_ITEMS.indexOf(active);
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        navigateTo(NAV_ITEMS[Math.min(currentIndex + 1, NAV_ITEMS.length - 1)]);
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        navigateTo(NAV_ITEMS[Math.max(currentIndex - 1, 0)]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as SectionId;
      if (NAV_ITEMS.includes(hash)) setActive(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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

      <main id="site-root" className="relative h-screen w-full overflow-hidden">
        <div className="relative h-full w-full">
          {[
            ["Home", <Hero onNavigate={navigateTo} />],
            ["Research", <Research onNavigate={navigateTo} />],
            ["Publications", <Publications onNavigate={navigateTo} />],
            ["About", <About onNavigate={navigateTo} />],
            ["Gallery", <Gallery onNavigate={navigateTo} />],
            ["Contact", <Contact onNavigate={navigateTo} />],
          ].map(([id, content]) => (
            <motion.section
              key={id}
              id={id}
              className={`section-panel ${active === id ? "z-10" : "pointer-events-none"}`}
              initial={{ opacity: 0, x: 80 }}
              animate={active === id ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              aria-hidden={active !== id}
            >
              {content}
            </motion.section>
          ))}
        </div>
      </main>
    </>
  );
};

export default Portfolio;