import React, { useRef, useState } from 'react';
import TentacleBackground from './components/TentacleBackground';
import { StickyCTA } from './components/StickyCTA';
import { 
  Heart, 
  Brain, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Users, 
  Briefcase, 
  Zap, 
  BarChart3, 
  PieChart, 
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Calendar,
  Video,
  Download,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, useInView, AnimatePresence, useScroll } from 'framer-motion';

// --- Shared Components ---

const Section: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  darker?: boolean;
}> = ({ children, className = "", id, darker = false }) => (
  <section id={id} className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${darker ? 'bg-military-900/40' : 'bg-transparent'} ${className}`}>
    <div className="max-w-7xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; align?: 'left' | 'center' }> = ({ children, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className="block text-gold-500 font-bold tracking-[0.2em] text-sm mb-4 uppercase font-sans">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
      {children}
    </h2>
    <div className={`h-1 w-24 bg-gold-500 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-zinc-300 group-hover:text-gold-400 transition-colors font-serif">{question}</span>
        {isOpen ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-zinc-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative min-h-screen bg-military-950 text-zinc-300 font-sans selection:bg-gold-500/30 selection:text-gold-400">
      <TentacleBackground />

      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-military-950/95 border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif text-white tracking-widest">OCTO <span className="text-gold-500">GROWTH</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-[0.15em] uppercase">
            <a href="#metodo" className="hover:text-gold-400 transition-colors">O Método</a>
            <a href="#entregaveis" className="hover:text-gold-400 transition-colors">A Mentoria</a>
            <a href="#mentor" className="hover:text-gold-400 transition-colors">O Mentor</a>
            <a href="#faq" className="hover:text-gold-400 transition-colors">Dúvidas</a>
          </div>
          <button className="bg-gold-600 hover:bg-gold-500 text-black font-bold py-2 px-6 rounded-sm transition-all transform hover:scale-105 uppercase tracking-wide text-xs">
            Candidatar-se
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-military-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="inline-block py-2 px-4 border border-gold-500/30 rounded-sm bg-gold-500/10 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">
              Exclusivo para Operações R$ 100k+
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
          >
            CONTROLE.<br />
            MARGEM.<br />
            <span className="text-gold-500">LIBERDADE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Sua empresa cresceu, mas o dinheiro sumiu?<br/>
            Nós estancamos o sangramento e devolvemos o comando para suas mãos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
             <button className="bg-gold-600 hover:bg-gold-500 text-black font-bold py-4 px-8 rounded-sm transition-all transform hover:scale-105 tracking-widest uppercase w-full md:w-auto">
               Candidatar-se à Mentoria
             </button>
            <a href="#metodo" className="group inline-flex items-center gap-3 text-white border-b border-gold-500 pb-1 hover:text-gold-400 transition-all text-sm font-bold uppercase tracking-widest">
              <span>Entenda o Método</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <div className="bg-military-950 border-y border-white/5 overflow-hidden py-8 relative">
        <div className="absolute inset-0 bg-military-950/50 z-10 pointer-events-none"></div>
        <div className="flex relative z-0 overflow-hidden">
          <div className="flex gap-16 whitespace-nowrap min-w-max px-8 animate-ticker">
            {[...Array(4)].map((_, i) => (
               <span key={i} className="text-2xl font-serif text-white/40 flex items-center gap-4">
                  <span className="text-gold-500 font-bold">+R$ 30 MILHÕES GERADOS</span>
                  <span className="w-2 h-2 rounded-full bg-military-500"></span>
                  <span className="text-white/40">+350 EMPRESAS MENTORADAS</span>
                  <span className="w-2 h-2 rounded-full bg-military-500"></span>
                  <span className="text-white/40">METODOLOGIA OCTO GROWTH</span>
                  <span className="w-2 h-2 rounded-full bg-military-500"></span>
                  <span className="text-white/40">MARGEM & LUCRO</span>
                  <span className="w-2 h-2 rounded-full bg-military-500"></span>
                  <span className="text-gold-500 font-bold">12 ANOS DE MERCADO</span>
                  <span className="w-2 h-2 rounded-full bg-military-500"></span>
               </span>
            ))}
          </div>
        </div>
      </div>

      {/* The Problem */}
      <Section id="problema" darker>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl font-serif text-white mb-6">
              A ARMADILHA<br />
              <span className="text-military-500">DO FATURAMENTO.</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Você construiu uma máquina de gerar boletos, não de gerar lucro. A equipe inchou, a complexidade explodiu e você virou o funcionário mais caro e estressado do próprio negócio.
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Isso não é empreender. É punição. Não resolvemos isso trabalhando mais. Resolvemos cortando o que não traz margem.
            </p>
            <div className="pl-6 border-l-2 border-gold-500">
              <p className="text-xl text-white italic font-serif">
                "Empresa Rica, Dono Pobre."
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-military-900/50 border border-white/5 p-8 rounded-sm relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold-500/50" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold-500/50" />
              
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">
                Sintomas Comuns
              </h3>
              <ul className="space-y-4">
                {[
                  "Faturamento alto, caixa vazio",
                  "Equipe inchada sem processos definidos",
                  "Você centraliza todas as decisões difíceis",
                  "Guerra de preços para fechar vendas",
                  "Sensação de apagar incêndios todo dia"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <XCircle className="w-5 h-5 text-red-900/80 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* TRANSFORMATION: From Chaos to Order */}
      <Section>
        <SectionTitle subtitle="A Transformação">DO CAOS À ORDEM</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {/* Left: Current State */}
           <FadeIn>
             <div className="bg-military-900/30 p-8 border border-red-900/20 rounded-sm h-full opacity-70 hover:opacity-100 transition-opacity">
               <h3 className="text-2xl font-serif text-red-900/80 mb-6 flex items-center gap-3">
                 <XCircle /> O Cenário Atual
               </h3>
               <ul className="space-y-4">
                 <li className="text-zinc-500">❌ O dono trabalha na operação 12h/dia.</li>
                 <li className="text-zinc-500">❌ Vendas instáveis e sem previsão.</li>
                 <li className="text-zinc-500">❌ Lucro corroído por custos invisíveis.</li>
                 <li className="text-zinc-500">❌ Equipe perdida esperando ordens.</li>
               </ul>
             </div>
           </FadeIn>

           {/* Right: Octo State */}
           <FadeIn delay={0.2}>
             <div className="bg-military-900/30 p-8 border border-gold-500/30 rounded-sm h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[80px]"></div>
               <h3 className="text-2xl font-serif text-gold-500 mb-6 flex items-center gap-3">
                 <CheckCircle2 /> O Cenário Octo
               </h3>
               <ul className="space-y-4">
                 <li className="text-zinc-300">✅ O dono foca em estratégia e expansão.</li>
                 <li className="text-zinc-300">✅ Máquina de vendas previsível.</li>
                 <li className="text-zinc-300">✅ Margem líquida otimizada e caixa forte.</li>
                 <li className="text-zinc-300">✅ Processos que funcionam sem você.</li>
               </ul>
             </div>
           </FadeIn>
        </div>
      </Section>

      {/* The Metaphor */}
      <Section className="text-center" darker>
        <FadeIn>
          <div className="inline-block p-4 rounded-full bg-military-950 border border-military-700 mb-8 shadow-2xl">
            <span className="text-4xl grayscale brightness-150">🐙</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
            A LÓGICA DO POLVO
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            O polvo é a criatura mais adaptável dos oceanos. Não pela força bruta, mas pela <span className="text-gold-500 font-bold">inteligência descentralizada</span>. Ele possui <span className="text-white">3 corações</span> e <span className="text-white">9 cérebros</span>. 
            <br/><br/>
            Nada é excesso. Tudo é controle. É assim que sua empresa deve operar: autônoma, inteligente e com múltiplos centros de comando.
          </p>
        </FadeIn>
      </Section>

      {/* 3 Hearts */}
      <Section id="metodo">
        <SectionTitle subtitle="O que mantém a empresa viva">OS 3 CORAÇÕES</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <DollarSign className="w-10 h-10 text-gold-500" />,
              title: "1. CAIXA (Oxigênio)",
              desc: "Faturamento é vaidade, Caixa é sanidade. Sem caixa, você não tem uma empresa, tem um hobby caro. Blindamos o financeiro primeiro."
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-gold-500" />,
              title: "2. MARGEM (Saúde)",
              desc: "Você provavelmente está pagando para trabalhar. Ajustamos sua oferta para que cada venda deixe lucro real, não apenas movimento."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-gold-500" />,
              title: "3. AUTORIDADE (Força)",
              desc: "Saia da guerra de preços. Reposicionamos sua marca para que o cliente pague mais caro e ainda agradeça."
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="bg-military-900/50 border border-military-800 p-8 hover:border-gold-500/30 transition-all group h-full hover:bg-military-900">
                <div className="mb-6 bg-military-950 w-20 h-20 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-500 border border-military-800 shadow-lg">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wide">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 9 Brains */}
      <Section id="cerebros" darker>
        <SectionTitle subtitle="Os Módulos de Comando">OS 9 CÉREBROS</SectionTitle>
        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
          Cada tentáculo do polvo opera de forma independente, mas coordenado pelo centro. 
          Na Octo Growth, implementamos 9 sistemas de gestão no seu negócio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <Target className="w-12 h-12" />, title: "Posicionamento", desc: "Pare de vender para todo mundo. Venda para quem paga." },
            { icon: <ShoppingBag className="w-12 h-12" />, title: "Oferta & Produto", desc: "Produtos de alta margem desenhados para escala." },
            { icon: <DollarSign className="w-12 h-12" />, title: "Precificação", desc: "Estratégia de lucro, não matemática de custo." },
            { icon: <Users className="w-12 h-12" />, title: "Aquisição", desc: "Clientes qualificados, não curiosos." },
            { icon: <Briefcase className="w-12 h-12" />, title: "Operação & Processos", desc: "Processos que funcionam sem você na sala." },
            { icon: <Users className="w-12 h-12" />, title: "Gestão de Pessoas", desc: "Quem não se paga, está fora. Gestão por performance." },
            { icon: <Zap className="w-12 h-12" />, title: "Marketing de Resposta", desc: "Zero branding vazio. 100% resposta direta." },
            { icon: <BarChart3 className="w-12 h-12" />, title: "Comercial", desc: "Scripts de fechamento rápido. Sem 'vou pensar'." },
            { icon: <PieChart className="w-12 h-12" />, title: "Gestão do Dono", desc: "Saia do operacional. Assuma o estratégico." },
          ].map((brain, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <motion.div 
                className="p-6 border border-military-800 bg-military-900/40 rounded-sm hover:border-gold-500 hover:bg-military-800/60 transition-colors duration-300 cursor-default group relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity text-gold-500 duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  {brain.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-gold-400 font-serif text-lg mb-3 uppercase tracking-wide">{brain.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-military-800 pl-3 group-hover:border-gold-500 transition-colors duration-300">
                      {brain.desc}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS / DELIVERABLES */}
      <Section id="entregaveis">
        <SectionTitle subtitle="Como Funciona">O PROTOCOLO DE RESGATE</SectionTitle>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-8">
                <FadeIn>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-military-800 flex items-center justify-center rounded-sm shrink-0 text-gold-500">
                      <Calendar />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">6 Meses de Acompanhamento</h3>
                      <p className="text-zinc-400 text-sm">Não é um curso. É uma intervenção cirúrgica no seu negócio. Tempo suficiente para implementar, corrigir e colher resultados.</p>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-military-800 flex items-center justify-center rounded-sm shrink-0 text-gold-500">
                      <Video />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Encontros Quinzenais ao Vivo</h3>
                      <p className="text-zinc-400 text-sm">Sessões de mentoria em grupo e Hotseat (análise individual do seu negócio na frente de todos).</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-military-800 flex items-center justify-center rounded-sm shrink-0 text-gold-500">
                      <MessageCircle />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Acesso à Mesa Octo</h3>
                      <p className="text-zinc-400 text-sm">Você é a média das pessoas com quem convive. Sente-se ao lado de quem já superou seus problemas atuais.</p>
                    </div>
                  </div>
                </FadeIn>
             </div>

             <div className="bg-military-900 border border-military-800 p-8 rounded-sm">
                <h3 className="text-gold-500 font-bold tracking-widest uppercase mb-6 text-sm">Materiais Inclusos</h3>
                <ul className="space-y-4">
                  {[
                    "Planilhas de Precificação Automática",
                    "Modelos de Contrato e Propostas",
                    "Playbook de Vendas e Scripts",
                    "Dashboards Financeiros em Power BI",
                    "Templates de Anúncios de Alta Conversão",
                    "Ferramenta de Diagnóstico de Negócio"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-3 last:border-0">
                      <Download className="w-4 h-4 text-military-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 text-sm font-bold uppercase tracking-widest transition-colors">
                  Ver Grade Completa
                </button>
             </div>
          </div>
        </div>
      </Section>

      {/* THE MENTOR */}
      {/* THE MENTOR */}
      <Section id="mentor" darker>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 w-full">
             {/* Mentor Image */}
             <div className="aspect-[3/4] bg-military-800 relative overflow-hidden rounded-sm border border-gold-500/20 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="/gustavo/gustavo.webp" 
                  alt="Gustavo Neves" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-military-950 via-transparent to-transparent"></div>
             </div>
          </div>
          <div className="md:w-2/3 w-full">
            <h2 className="text-gold-500 font-bold tracking-[0.2em] text-sm mb-2 uppercase">QUEM COMANDA</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">GUSTAVO NEVES</h3>
            <p className="text-xl text-zinc-300 font-serif italic mb-6">
              "De Executor a Estrategista."
            </p>
            
            <div className="space-y-4 text-zinc-400 mb-8 leading-relaxed text-lg">
              <p>
                Eu não sou um guru de palco que nunca sujou a mão de graxa. Sou empresário de campo de batalha.
              </p>
              <p>
                Comecei em 2009, como envelopador. Construí a <strong>Filmtech Luxury</strong>, hoje referência nacional em estética automotiva de alto padrão, atendendo milhares de clientes e celebridades com a chancela de qualidade da 3M.
              </p>
              <p>
                Mas eu conheço a sua dor, porque eu vivi ela. Durante anos, eu fui o gargalo da minha própria empresa. A centralização me custou caro.
              </p>
              <p>
                A virada de chave não foi trabalhar mais. Foi criar processos. Decidi que minha empresa não dependeria do meu braço, mas da minha mente.
              </p>
              <p>
                Criei a <strong>Octo Growth</strong> para entregar exatamente esse "Manual de Operações" que me faltou no começo. Para tirar você do operacional e te colocar no comando estratégico.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-military-800 pt-8">
               <div>
                 <span className="block text-2xl md:text-3xl font-serif text-white">15+</span>
                 <span className="text-xs text-zinc-500 uppercase tracking-widest">Anos de Mercado</span>
               </div>
               <div>
                 <span className="block text-2xl md:text-3xl font-serif text-white">3M</span>
                 <span className="text-xs text-zinc-500 uppercase tracking-widest">Referência Mundial</span>
               </div>
               <div>
                 <span className="block text-2xl md:text-3xl font-serif text-white">Filmtech</span>
                 <span className="text-xs text-zinc-500 uppercase tracking-widest">Luxury & Academy</span>
               </div>
               <div>
                 <span className="block text-2xl md:text-3xl font-serif text-white">Milhares</span>
                 <span className="text-xs text-zinc-500 uppercase tracking-widest">De Clientes Atendidos</span>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* RESULTS / SOCIAL PROOF */}
      <Section>
        <SectionTitle subtitle="Resultados Reais">NÃO ACREDITE EM PALAVRAS</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
           <FadeIn>
             <div className="bg-military-900 p-8 border border-military-800 relative">
               <div className="text-gold-500 text-4xl font-serif absolute top-4 left-6">"</div>
               <p className="text-zinc-300 italic mb-6 mt-4 relative z-10">
                 Cheguei faturando 150k e sem ver a cor do dinheiro. Em 4 meses de Octo, reduzimos o custo fixo em 20% e dobramos a margem líquida. Pela primeira vez tirei férias sem o celular.
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-military-800 rounded-full"></div>
                 <div>
                   <p className="text-white font-bold text-sm">Ricardo Silva</p>
                   <p className="text-zinc-500 text-xs">Agência de Marketing</p>
                 </div>
               </div>
             </div>
           </FadeIn>

           <FadeIn delay={0.1}>
             <div className="bg-military-900 p-8 border border-military-800 relative">
               <div className="text-gold-500 text-4xl font-serif absolute top-4 left-6">"</div>
               <p className="text-zinc-300 italic mb-6 mt-4 relative z-10">
                 Eu achava que meu problema era vender mais. O Roberto me mostrou que eu estava pagando para trabalhar. Reajustamos preços e a demanda aumentou pela autoridade.
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-military-800 rounded-full"></div>
                 <div>
                   <p className="text-white font-bold text-sm">Amanda Costa</p>
                   <p className="text-zinc-500 text-xs">Clínica de Estética</p>
                 </div>
               </div>
             </div>
           </FadeIn>

           <FadeIn delay={0.2}>
             <div className="bg-military-900 p-8 border border-military-800 relative">
               <div className="text-gold-500 text-4xl font-serif absolute top-4 left-6">"</div>
               <p className="text-zinc-300 italic mb-6 mt-4 relative z-10">
                 O módulo de gestão de pessoas salvou minha empresa. Tinha 20 funcionários batendo cabeça. Hoje tenho 12 voando baixo. Menos custo, mais resultado.
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-military-800 rounded-full"></div>
                 <div>
                   <p className="text-white font-bold text-sm">Carlos Mendes</p>
                   <p className="text-zinc-500 text-xs">Indústria Têxtil</p>
                 </div>
               </div>
             </div>
           </FadeIn>
        </div>
      </Section>

      {/* Audience Checklist */}
      <Section darker>
        <div className="max-w-4xl mx-auto bg-military-950 border border-gold-500/20 p-8 md:p-12 relative overflow-hidden">
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 p-4">
              <div className="w-16 h-1 bg-gold-500/20 rotate-45 transform origin-top-right"></div>
           </div>

          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 text-center">
            PARA QUEM É A OCTO GROWTH?
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Fatura acima de R$ 100k/mês",
              "Trabalha muito e lucra pouco",
              "Fluxo de caixa apertado e imprevisível",
              "Problemas de gestão de equipe",
              "Empresa depende demais do dono",
              "Sente que está perdendo o controle"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-military-800 flex items-center justify-center border border-military-600 text-gold-400 shrink-0">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-zinc-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black font-bold py-4 px-12 text-lg rounded-sm tracking-wide shadow-[0_0_20px_rgba(197,160,40,0.3)] transition-all transform hover:scale-105 uppercase">
               Candidatar-se à Mentoria
             </button>
             <p className="mt-4 text-xs text-zinc-500 uppercase tracking-widest">Processo seletivo necessário</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto">
          <SectionTitle subtitle="Tire suas dúvidas">PERGUNTAS FREQUENTES</SectionTitle>
          <div className="space-y-2">
            <AccordionItem 
              question="A mentoria serve para prestadores de serviço?"
              answer="Sim. A metodologia Octo se aplica a qualquer negócio que precise de processo, margem e escala. Temos casos de sucesso em clínicas, agências, escritórios de advocacia e construtoras."
            />
            <AccordionItem 
              question="Preciso ter uma equipe grande?"
              answer="Não. O objetivo muitas vezes é justamente fazer mais com menos. Ensinamos você a estruturar processos para que a equipe (seja de 2 ou 50 pessoas) funcione sem sua supervisão constante."
            />
            <AccordionItem 
              question="Quanto tempo preciso dedicar por semana?"
              answer="A mentoria é feita para quem não tem tempo. O foco é execução direta. Recomendamos reservar 2 a 3 horas semanais para participar dos encontros e implementar as ferramentas."
            />
            <AccordionItem 
              question="Como funcionam os encontros?"
              answer="São quinzenais, via Zoom. Parte do tempo é conteúdo aprofundado e parte é Hotseat (análise de casos reais dos alunos)."
            />
             <AccordionItem 
              question="Qual o valor do investimento?"
              answer="O valor é revelado apenas após a aplicação. Buscamos empresas em um estágio específico de faturamento onde o investimento se paga com apenas 1 ou 2 ajustes de margem sugeridos na mentoria."
            />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-military-900 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <div className="text-3xl font-serif text-white tracking-widest mb-6">
              OCTO <span className="text-gold-500">GROWTH</span>
            </div>
            <p className="text-zinc-500 max-w-sm">
              Empresas não quebram por falta de esforço. Quebram por falta de controle. Devolvemos o comando para suas mãos.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-right">
             <span className="text-zinc-600 uppercase text-xs tracking-[0.3em]">Contato</span>
             <a href="mailto:contato@octogrowth.com.br" className="text-white hover:text-gold-500 transition-colors">
               contato@octogrowth.com.br
             </a>
             <div className="flex gap-4 justify-end mt-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors cursor-pointer rounded-full text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
               </div>
               <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors cursor-pointer rounded-full text-zinc-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </div>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-military-900 text-center md:text-left text-zinc-700 text-sm flex flex-col md:flex-row justify-between">
          <span>&copy; {new Date().getFullYear()} Octo Growth. Todos os direitos reservados.</span>
          <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-zinc-500">Termos de Uso</span>
            <span className="cursor-pointer hover:text-zinc-500">Política de Privacidade</span>
          </div>
        </div>
      </footer>
      <StickyCTA />
    </div>
  );
}