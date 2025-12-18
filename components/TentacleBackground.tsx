import React from 'react';

const TentacleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-military-950">
      
      {/* 1. TEXTURA DE BASE (Noise) - Essencial para não parecer "plástico" */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOcctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 2. O "SPOTLIGHT" (A Iluminação Volumétrica) - O SEGREDO DO PREENCHIMENTO */}
      {/* Isso cria um "teto de luz" verde que desce, tirando a sensação de vazio do topo */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-military-500/20 rounded-full blur-[120px] mix-blend-screen" />
      
      {/* 3. FORMAS DE FUNDO (Deep Depth) */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-military-800/30 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gold-600/5 rounded-full blur-[120px]" />

      {/* 4. CAMADA DE LINHAS (Tentáculos) - Agora com "Glow" e mais visíveis */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradGoldVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#C5A028" stopOpacity="0.1" /> {/* Fade in */}
            <stop offset="50%" stopColor="#C5A028" stopOpacity="0.6" /> {/* Meio forte */}
            <stop offset="80%" stopColor="#C5A028" stopOpacity="0.1" /> {/* Fade out */}
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Linha Hero (Ouro) - Mais grossa e brilhante */}
        <path 
          d="M800 -200 Q 600 400 1400 1200" 
          vectorEffect="non-scaling-stroke"
          stroke="url(#gradGoldVertical)" 
          strokeWidth="2"
          fill="none"
          filter="url(#glow)" 
          className="animate-float-slow opacity-60" 
        />

        {/* Linhas de Preenchimento (Verde/Cinza) */}
        <path 
          d="M-100 600 C 200 500, 500 100, 900 -200" 
          vectorEffect="non-scaling-stroke"
          stroke="#4a5e42" 
          strokeWidth="1.5"
          fill="none"
          className="animate-float-delay-1 opacity-40"
        />

        <path 
          d="M200 1200 Q 500 600 1000 1200" 
          vectorEffect="non-scaling-stroke"
          stroke="#3f4a36"
          strokeWidth="1"
          fill="none"
          className="animate-float-delay-2 opacity-30"
        />
        
        {/* Detalhes finos para textura */}
        <path 
          d="M1200 -100 C 1300 200, 1500 300, 1800 100" 
          vectorEffect="non-scaling-stroke"
          stroke="#C5A028"
          strokeWidth="0.5"
          fill="none"
          className="animate-float-reverse opacity-30"
        />
      </svg>

      {/* 5. VIGNETTE AGRESSIVA (Foca o olhar no centro) */}
      <div className="absolute inset-0 bg-radial-gradient-vignette pointer-events-none" />

      <style jsx>{`
        .bg-radial-gradient-vignette {
            background: radial-gradient(circle at center, transparent 40%, rgba(10, 15, 10, 0.8) 100%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float-slow { animation: float 12s ease-in-out infinite; will-change: transform; }
        .animate-float-delay-1 { animation: float 16s ease-in-out infinite reverse; animation-delay: -2s; will-change: transform; }
        .animate-float-delay-2 { animation: float 20s ease-in-out infinite; animation-delay: -5s; will-change: transform; }
        .animate-float-reverse { animation: float 18s ease-in-out infinite reverse; will-change: transform; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  );
};

export default TentacleBackground;