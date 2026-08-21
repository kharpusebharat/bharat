import React, { useState } from "react";
import { motion } from "framer-motion";

const initialPath = "M10,30 L30,10 L50,30 L30,50 Z"; // simple diamond shape
const finalPath = "M30,10 A20,20 0 1,0 29.9,10 Z"; // circle

const LogoMorph: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer"
    >
      <motion.path
        d={hovered ? finalPath : initialPath}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        animate={{ d: hovered ? finalPath : initialPath }}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
};

export default LogoMorph;