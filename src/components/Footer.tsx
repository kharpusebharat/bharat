import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-sm text-slate-500 bg-white">
      © {new Date().getFullYear()} Bharat Kharpuse — Bharat Kharpuse
    </footer>
  );
};

export default Footer;
