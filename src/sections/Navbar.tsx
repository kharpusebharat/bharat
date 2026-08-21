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
    <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/60 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div>
          <span className="text-xl font-bold text-black">Bharat Kharpuse</span>
          <span className="text-sm text-gray-600 block">Research Fellow</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {items.map((id) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`transition-colors ${
                  active === id
                    ? "text-sky-500"
                    : "text-gray-800 hover:text-sky-500"
                }`}
                aria-current={active === id ? "page" : undefined}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden p-2 rounded-md text-gray-800"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {items.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`w-full text-left transition-colors ${
                    active === id
                      ? "text-sky-500"
                      : "text-gray-800 hover:text-sky-500"
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