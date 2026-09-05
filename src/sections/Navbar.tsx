// src/sections/Navbar.tsx

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export type SectionId = string;

interface NavbarProps {
  items: readonly SectionId[];
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, active, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: SectionId) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/90 bg-[#f7f8f5]/95 text-slate-900 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-20 w-full max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => handleClick("Home")} className="text-left" aria-label="Go to home">
          <span className="block text-base font-bold tracking-tight sm:text-lg">Bharat Kharpuse</span>
          <span className="block text-xs text-cyan-700">Nuclear physics researcher</span>
        </button>
        <div className="hidden rounded-full border border-slate-200 bg-white/70 p-1 md:block">
        <ul className="flex gap-1 text-sm font-medium">
          {items.map((id) => (
            <li key={id}>
              <button onClick={() => handleClick(id)} className={`rounded-full px-4 py-2 transition-colors ${active === id ? "bg-cyan-600 font-semibold text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`} aria-current={active === id ? "page" : undefined}>
                {id}
              </button>
            </li>
          ))}
        </ul>
        </div>
        <button
          className="rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-[#f7f8f5] md:hidden">
          <ul className="grid grid-cols-2 gap-2 p-4">
            {items.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`w-full rounded-lg px-3 py-3 text-left transition-colors ${
                    active === id
                      ? "bg-cyan-600 font-semibold text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  aria-current={active === id ? "page" : undefined}
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;