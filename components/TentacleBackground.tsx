import React from 'react';

const TentacleBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-military-950">
            
            {/* 1. TEXTURA DE BASE (Noise) - Static Base64 for Performance */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none z-0" 
                 style={{ 
                     backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAABMTExERERmZmYzMzMyMjJec4xqAAAACHRSTlMzAJmZzMxmZgC1+W8FAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABGUlEQVQ4jX2SwW3DQAxEnzRpA1R+8k0A5yTiBNIAnMMZHALxy7d8r44O468Y/z/435w451+V+f2f/f7P/v1/Veb3f/b7P/v3/1WZ3//Z7//s3/9XZX7/Z7//s3//X5X5/Z/9/s/+/X9V5vd/9vs/+/f/VZnf/9nv/+zf/1dlfv9nv/+zf/9flfn9n/3+z/79f1Xm93/2+z/79/9Vmd//2e//7N//V2V+/2e//7N//1+V+f2f/f7P/v1/Veb3f/b7P/v3/1WZ3//Z7//s3/9XZX7/Z7//s3//X5X5/Z/9/s/+/X9V5vd/9vs/+/f/VZnf/9nv/+zf/1dlfv9nv/+zf/9flfn9n/3+z/79f1Xm93/2+z/79/9V87g5+d03iQAAAABJRU5ErkJggg==")`,
                     backgroundRepeat: 'repeat',
                 }} 
            />

            {/* 2. BACKGROUND "BAKED" (Simulated via CSS)
               Em vez de 3-4 divs com blurs gigantes, usamos divs com gradientes radiais simples
               que simulam a luz "assada". Menos camadas = Menos overdraw.
            */}
            
            {/* "Spotlight" Topo (Verde) */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-transparent"
                 style={{
                     background: 'radial-gradient(ellipse at top, rgba(74, 94, 66, 0.15) 0%, transparent 70%)',
                     willChange: 'transform' // Dica para o compositor
                 }}
            />

            {/* "Glow" Direito (Verde Escuro) */}
            <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[60vh] bg-transparent"
                 style={{
                     background: 'radial-gradient(ellipse at center, rgba(35, 46, 35, 0.2) 0%, transparent 70%)',
                 }}
            />

            {/* "Glow" Inferior (Dourado Sutil) */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vh] bg-transparent"
                 style={{
                    background: 'radial-gradient(ellipse at center, rgba(142, 115, 28, 0.08) 0%, transparent 70%)',
                 }}
            />

            {/* 4. CAMADA DE LINHAS (Tentáculos) - Dual Layer Technica (Mantida & Otimizada) */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gradGoldVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="20%" stopColor="#C5A028" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#C5A028" stopOpacity="0.6" />
                        <stop offset="80%" stopColor="#C5A028" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {/* Tentáculo Hero */}
                <path 
                    d="M800 -200 Q 600 400 1400 1200" 
                    vectorEffect="non-scaling-stroke"
                    stroke="#C5A028" strokeWidth="15" fill="none" opacity="0.08"
                    className="animate-float-slow gpu-accelerated" 
                />
                <path 
                    d="M800 -200 Q 600 400 1400 1200" 
                    vectorEffect="non-scaling-stroke"
                    stroke="url(#gradGoldVertical)" strokeWidth="2" fill="none"
                    className="animate-float-slow gpu-accelerated" 
                />

                {/* Tentáculo Secundário */}
                <path 
                    d="M-100 600 C 200 500, 500 100, 900 -200" 
                    vectorEffect="non-scaling-stroke"
                    stroke="#4a5e42" strokeWidth="12" fill="none" opacity="0.08"
                    className="animate-float-delay-1 gpu-accelerated"
                />
                <path 
                    d="M-100 600 C 200 500, 500 100, 900 -200" 
                    vectorEffect="non-scaling-stroke"
                    stroke="#4a5e42" strokeWidth="1.5" fill="none" opacity="0.4"
                    className="animate-float-delay-1 gpu-accelerated"
                />
                
                 {/* Tentáculo Fundo */}
                <path 
                    d="M200 1200 Q 500 600 1000 1200" 
                    vectorEffect="non-scaling-stroke"
                    stroke="#3f4a36" strokeWidth="6" fill="none" opacity="0.04"
                    className="animate-float-delay-2 gpu-accelerated"
                />
                <path 
                    d="M200 1200 Q 500 600 1000 1200" 
                    vectorEffect="non-scaling-stroke"
                    stroke="#3f4a36" strokeWidth="1" fill="none" opacity="0.3"
                    className="animate-float-delay-2 gpu-accelerated"
                />
            </svg>

            {/* 5. VIGNETTE OTIMIZADA */}
            <div 
                className="absolute inset-0 pointer-events-none" 
                style={{
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(10, 15, 10, 0.9) 100%)'
                }}
            />
        </div>
    );
};

export default TentacleBackground;