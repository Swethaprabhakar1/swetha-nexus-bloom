import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const colors = ["#00d4ff", "#8b5cf6", "#00ff88", "#ff70f1"];

  useEffect(() => {
    const particleCount = 50;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles(newParticles);

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          let newSpeedX = particle.speedX;
          let newSpeedY = particle.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newSpeedX = -particle.speedX;
            newX = particle.x + newSpeedX;
          }
          if (newY <= 0 || newY >= 100) {
            newSpeedY = -particle.speedY;
            newY = particle.y + newSpeedY;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-background opacity-90" />
      
      {/* Animated Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}30`,
            transition: "all 0.05s linear",
          }}
        />
      ))}

      {/* Connection Lines (Static for performance) */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {particles.slice(0, 20).map((particle, index) => {
          const nextParticle = particles[(index + 1) % particles.length];
          return (
            <line
              key={`line-${particle.id}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nextParticle?.x}%`}
              y2={`${nextParticle?.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
      </svg>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-pulse float" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-neon-purple/10 rounded-full blur-xl animate-pulse float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-neon-green/10 rounded-full blur-xl animate-pulse float" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default ParticleBackground;