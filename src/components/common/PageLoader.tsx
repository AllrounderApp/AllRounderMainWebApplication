import React, { useEffect, useState, useRef, useCallback } from 'react';

// ─── Particle System ────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const ParticleCanvas: React.FC<{ phase: number }> = ({ phase }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const colors = ['#3b82f6', '#60a5fa', '#22c55e', '#4ade80', '#818cf8', '#a78bfa'];

  const createParticle = useCallback((canvas: HTMLCanvasElement, burst = false): Particle => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const angle = Math.random() * Math.PI * 2;
    const radius = burst ? Math.random() * 50 : 100 + Math.random() * 300;

    return {
      id: Math.random(),
      x: burst ? centerX : centerX + Math.cos(angle) * radius,
      y: burst ? centerY : centerY + Math.sin(angle) * radius,
      size: burst ? 2 + Math.random() * 4 : 1 + Math.random() * 2.5,
      speedX: burst ? (Math.random() - 0.5) * 8 : (Math.random() - 0.5) * 0.8,
      speedY: burst ? (Math.random() - 0.5) * 8 : (Math.random() - 0.5) * 0.8,
      opacity: burst ? 1 : 0.1 + Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: burst ? 60 + Math.random() * 40 : 200 + Math.random() * 200,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse for interactive particles
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particlesRef.current.push(createParticle(canvas));
    }

    // Burst particles on phase change
    if (phase >= 2) {
      for (let i = 0; i < 40; i++) {
        particlesRef.current.push(createParticle(canvas, true));
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife);

      // Maintain particle count
      while (particlesRef.current.length < 80) {
        particlesRef.current.push(createParticle(canvas));
      }

      particlesRef.current.forEach(p => {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse attraction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.speedX += dx * 0.00008;
          p.speedY += dy * 0.00008;
        }

        // Fade lifecycle
        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio < 0.1 ? lifeRatio * 10 : lifeRatio > 0.8 ? (1 - lifeRatio) * 5 : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * alpha;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach(p2 => {
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 120 && d > 0) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - d / 120) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [phase, createParticle]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

// ─── Orbiting Ring ────────────────────────────────────────
const OrbitRing: React.FC<{ size: number; duration: number; delay: number; color: string; thickness: number; dashArray?: string }> = ({
  size, duration, delay, color, thickness, dashArray = '8 4'
}) => (
  <div
    className="absolute rounded-full border-0"
    style={{
      width: `${size}rem`,
      height: `${size}rem`,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      animation: `orbitSpin ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    <svg className="w-full h-full" viewBox="0 0 200 200">
      <circle
        cx="100"
        cy="100"
        r={95}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeDasharray={dashArray}
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  </div>
);

// ─── Morphing Blob ────────────────────────────────────────
const MorphBlob: React.FC<{ color: string; size: number; delay: number; position: { top: string; left: string } }> = ({
  color, size, delay, position
}) => (
  <div
    className="absolute rounded-full blur-[4rem] pointer-events-none"
    style={{
      width: `${size}rem`,
      height: `${size}rem`,
      background: color,
      top: position.top,
      left: position.left,
      animation: `morphBlob 8s ease-in-out infinite, blobFloat 12s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

// ─── Main Loader ────────────────────────────────────────
const PageLoader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [phase, setPhase] = useState(0); // 0: logo reveal, 1: text reveal, 2: progress, 3: exit
  const [progress, setProgress] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);

  // Phase control
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);   // Logo finishes → reveal text
    const t2 = setTimeout(() => setPhase(2), 1600);   // Text finishes → start progress
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Progress bar on phase 2
  useEffect(() => {
    if (phase < 2) return;
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        const speed = p < 30 ? 4 : p < 70 ? 3 : p < 90 ? 2 : 1;
        return Math.min(p + speed, 100);
      });
    }, 35);
    return () => clearInterval(timer);
  }, [phase]);

  // Exit when progress completes
  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => setExitAnim(true), 400);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (exitAnim) {
      const t = setTimeout(() => onFinish(), 800);
      return () => clearTimeout(t);
    }
  }, [exitAnim, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${
        exitAnim ? 'loader-exit' : ''
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, #0c1a35 0%, #070e1f 50%, #030712 100%)',
      }}
    >
      {/* Interactive Particle Canvas */}
      <ParticleCanvas phase={phase} />

      {/* Morphing Background Blobs */}
      <MorphBlob color="rgba(59,130,246,0.12)" size={28} delay={0} position={{ top: '10%', left: '15%' }} />
      <MorphBlob color="rgba(34,197,94,0.1)" size={24} delay={2} position={{ top: '60%', left: '70%' }} />
      <MorphBlob color="rgba(139,92,246,0.08)" size={20} delay={4} position={{ top: '30%', left: '80%' }} />

      {/* Orbiting Rings */}
      <OrbitRing size={14} duration={12} delay={0} color="#3b82f6" thickness={0.8} dashArray="12 6" />
      <OrbitRing size={18} duration={18} delay={1} color="#22c55e" thickness={0.5} dashArray="6 10" />
      <OrbitRing size={22} duration={25} delay={2} color="#818cf8" thickness={0.4} dashArray="3 8" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center gap-[1.5rem]">

        {/* Logo with Reveal Animation */}
        <div className={`relative ${phase >= 0 ? 'logo-entrance' : 'opacity-0'}`}>
          {/* Glow Ring behind logo */}
          <div className="absolute inset-[-1rem] rounded-full loader-glow-ring" />
          
          {/* Rotating border ring */}
          <div className="absolute inset-[-0.5rem] rounded-full border border-blue-400/20 loader-ring-spin" />

          {/* Logo Image */}
          <div className="relative w-[5.5rem] h-[5.5rem] flex items-center justify-center">
            <img
              src="/LOGO.png"
              alt="AllRounder"
              className="w-[5rem] h-[5rem] object-contain drop-shadow-[0_0_2rem_rgba(59,130,246,0.4)] loader-logo-breathe"
            />
          </div>

          {/* Scanning line effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="loader-scan-line" />
          </div>
        </div>

        {/* Brand Name - Letter by letter with wave */}
        <div className={`flex items-center gap-[0.15rem] ${phase >= 1 ? 'visible' : 'invisible'}`}>
          {'ALLROUNDER'.split('').map((letter, i) => (
            <span
              key={i}
              className="text-[2rem] font-bold text-white loader-letter-wave"
              style={{
                animationDelay: `${i * 0.06}s`,
                textShadow: '0 0 1.5rem rgba(59,130,246,0.3)',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline with typing effect */}
        <div className={`overflow-hidden ${phase >= 1 ? 'visible' : 'invisible'}`}>
          <p
            className="text-[0.875rem] font-medium tracking-[0.25em] uppercase loader-tagline-slide"
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #4ade80, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Connecting Skills with Needs
          </p>
        </div>

        {/* Circular Progress + Linear Progress */}
        {phase >= 2 && (
          <div className="flex flex-col items-center gap-[1rem] mt-[0.5rem] loader-progress-entrance">
            {/* Circular progress ring */}
            <div className="relative w-[3.5rem] h-[3.5rem]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 24}`}
                  strokeDashoffset={`${2 * Math.PI * 24 * (1 - progress / 100)}`}
                  style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Percentage in center */}
              <span className="absolute inset-0 flex items-center justify-center text-[0.75rem] font-bold text-white/70">
                {progress}
              </span>
            </div>

            {/* Linear progress bar */}
            <div className="w-[14rem] h-[0.1875rem] bg-white/5 rounded-full overflow-hidden relative">
              <div
                className="h-full rounded-full transition-all duration-100 ease-out relative"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #3b82f6, #22c55e, #818cf8)',
                  boxShadow: '0 0 1rem rgba(59,130,246,0.6), 0 0 2rem rgba(34,197,94,0.3)',
                }}
              >
                {/* Glowing tip */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[0.5rem] h-[0.5rem] rounded-full bg-white shadow-[0_0_0.5rem_rgba(255,255,255,0.8)]" />
              </div>
            </div>

            {/* Loading text */}
            <span className="text-[0.6875rem] text-blue-300/40 tracking-[0.3em] uppercase font-medium">
              {progress < 100 ? 'Initializing...' : 'Ready'}
            </span>
          </div>
        )}
      </div>

      {/* Bottom subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
        }}
      />
    </div>
  );
};

export default PageLoader;
