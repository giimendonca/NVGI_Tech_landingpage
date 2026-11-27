import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";

function Hero() {
  const mx=useMotionValue(0),my=useMotionValue(0);
  const glow=useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(23,185,220,.13), transparent 65%)`;
  const move=e=>{const r=e.currentTarget.getBoundingClientRect();mx.set(e.clientX-r.left);my.set(e.clientY-r.top)};
  return <section className="hero" id="inicio" onMouseMove={move}>
    <div className="hero-grid"/><motion.div className="hero-mouse-glow" style={{background:glow}}/>
    <div className="hero-light hero-light-left"/><div className="hero-light hero-light-right"/>
    <div className="hero-copy">
      <Reveal><div className="eyebrow"><span className="live-dot"/> TECNOLOGIA · CRIATIVIDADE · RESULTADOS</div></Reveal>
      <Reveal delay={.1}><h1>Ideias transformadas<br/>em <span className="hero-gradient">soluções<span className="hero-period">.</span></span></h1></Reveal>
      <Reveal delay={.2}><p className="hero-description">Sua ideia merece sair do papel. Criamos tecnologia que acompanha o tamanho dos seus planos, do primeiro passo à próxima grande fase.</p></Reveal>
      <Reveal delay={.3}><div className="hero-buttons"><a href="#contato" className="btn-primary">Vamos construir juntos <ArrowUpRight size={17}/></a><a href="#projetos" className="btn-quiet">Conheça nossos projetos <ArrowDown size={15}/></a></div></Reveal>
      <div className="hero-meta"><span><b>01</b> / IDEIAS EM MOVIMENTO</span><span className="meta-line"/><span>FEITO PARA PESSOAS E NEGÓCIOS</span></div>
    </div>
    <div className="hero-emblem" aria-hidden="true">
      <div className="emblem-halo halo-one"/><div className="emblem-halo halo-two"/><div className="emblem-halo halo-three"/>
      {<img src="/assets/logo/nvgi-simbolo.svg" alt="NVGI Tech" className="official-logo" />}
      <div className="emblem-orbit orbit-one"/><div className="emblem-orbit orbit-two"/>
      <div className="float-chip chip-code"><Code2 size={17}/> <span>IDEIAS → CÓDIGO</span></div>
      <div className="float-chip chip-spark"><Sparkles size={17}/> <span>FEITO PARA VOCÊ</span></div>
      <div className="float-chip chip-node"><span className="live-dot"/> <span>BUILDING THE NEXT</span></div>
      <span className="emblem-cross cross-one">✳</span><span className="emblem-cross cross-two">+</span>
    </div>
    <div className="hero-bottom"><span>NVGI TECH <i/> BRASIL</span><span>ROLE PARA DESCOBRIR <ArrowDown size={13}/></span></div>
  </section>;
}

export default Hero;
