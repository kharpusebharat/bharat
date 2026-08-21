import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CursorParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setParticles((p) => [...p, { id, x, y }]);
      setTimeout(() => {
        setParticles((p) => p.filter((pt) => pt.id !== id));
      }, 800);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {particles.map((pt) => (
        <span
          key={pt.id}
          className="absolute block w-2 h-2 bg-white rounded-full opacity-80 animate-pulse"
          style={{ left: pt.x, top: pt.y }}
        />
      ))}
    </div>
  );
};

export default CursorParticles;