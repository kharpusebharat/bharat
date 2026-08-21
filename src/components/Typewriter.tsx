import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  loop?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, loop = false }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (loop) {
      const pause = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [index, text, speed, loop]);

  return <span>{displayed}</span>;
};

export default Typewriter;