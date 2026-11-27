import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Asterisk, AudioWaveform, Blocks,
  Bot, Check, ChevronUp, Code2, Cpu, Fingerprint, Layers3, Menu, Network,
  Radio, Sparkles, Workflow, X, Zap
} from "lucide-react";

const services = [
  { n:"01", icon:Blocks, title:"Sistemas personalizados", text:"Soluções construídas em torno da sua realidade, dos seus processos e dos seus objetivos.", detail:"DO PLANEJAMENTO À ENTREGA" },
  { n:"02", icon:Bot, title:"Automações inteligentes", text:"Conectamos tarefas e eliminamos etapas repetitivas para devolver tempo ao que faz seu negócio avançar.", detail:"MENOS ATRITO. MAIS FLUXO." },
  { n:"03", icon:Network, title:"Integrações digitais", text:"Ferramentas que conversam entre si, informações que circulam e processos que finalmente se entendem.", detail:"TUDO CONECTADO" },
  { n:"04", icon:Fingerprint, title:"Produtos e experiências", text:"Do conceito à interface, transformamos ideias em produtos digitais úteis, claros e memoráveis.", detail:"IDEIAS COM IDENTIDADE" },
];
const projects = [
  { n:"01", name:"Vai de ZAP", type:"AUTOMAÇÃO · MOBILIDADE", description:"Uma experiência de comunicação para aproximar motoristas e operação, tornando a rotina mais simples e conectada.", tags:["WhatsApp","Automação","Mobilidade"], kind:"zap" },
  { n:"02", name:"N-vínk", type:"PRODUTO DIGITAL · NFC", description:"Uma proposta de relacionamento e fidelização que aproxima marcas e pessoas por meio de experiências conectadas.", tags:["NFC","Fidelização","Experiência"], kind:"nvin" },
];

function Reveal({children,className="",delay=0}) {
  const reduce=useReducedMotion();
  return <motion.div className={className} initial={reduce?false:{opacity:0,y:34}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.8,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
function Header() {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
  const links=[["Projetos","#projetos"],["Soluções","#servicos"],["Nossa essência","#sobre"]];
  return <header className={scrolled?"site-header scrolled":"site-header"}>
    <a href="#inicio" className="brand" aria-label="NVGI Tech início"><span className="brand-mark"><i/><i/><i/></span><span>NVGI<span className="brand-tech">TECH</span></span></a>
    <nav className={open?"main-nav nav-open":"main-nav"}>{links.map(([t,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{t}</a>)}<a className="nav-contact" href="#contato" onClick={()=>setOpen(false)}>Tem uma ideia? <ArrowUpRight size={15}/></a></nav>
    <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Abrir menu">{open?<X/>:<Menu/>}</button>
  </header>;
}
function Hero() {
  const mx=useMotionValue(0),my=useMotionValue(0);
  const glow=useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(23,185,220,.13), transparent 65%)`;
  const move=e=>{const r=e.currentTarget.getBoundingClientRect();mx.set(e.clientX-r.left);my.set(e.clientY-r.top)};
  return <section className="hero" id="inicio" onMouseMove={move}>
    <div className="hero-grid"/><motion.div className="hero-mouse-glow" style={{background:glow}}/>
    <div className="hero-shape shape-left"/><div className="hero-shape shape-right"/>
    <div className="hero-copy">
      <Reveal><div className="eyebrow"><span className="live-dot"/> TECNOLOGIA · CRIATIVIDADE · RESULTADOS</div></Reveal>
      <Reveal delay={.1}><h1>Ideias transformadas<br/>em <span className="hero-gradient">soluções<span className="hero-period">.</span></span></h1></Reveal>
      <Reveal delay={.2}><p className="hero-description">Sua ideia merece sair do papel. Criamos tecnologia que acompanha o tamanho dos seus planos, do primeiro passo à próxima grande fase.</p></Reveal>
      <Reveal delay={.3}><div className="hero-buttons"><a href="#contato" className="btn-primary">Vamos construir juntos <ArrowUpRight size={17}/></a><a href="#projetos" className="btn-quiet">Conheça nossos projetos <ArrowDown size={15}/></a></div></Reveal>
      <div className="hero-meta"><span><b>01</b> / IDEIAS EM MOVIMENTO</span><span className="meta-line"/><span>FEITO PARA PESSOAS E NEGÓCIOS</span></div>
    </div>
    <div className="hero-emblem" aria-hidden="true">
      <div className="emblem-halo halo-one"/><div className="emblem-halo halo-two"/><div className="emblem-halo halo-three"/>
      <svg className="emblem-ribbon" viewBox="0 0 520 360" fill="none"><defs><linearGradient id="ribbonA" x1="70" y1="80" x2="420" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#20E5D3"/><stop offset=".48" stopColor="#13A9E8"/><stop offset="1" stopColor="#5157E8"/></linearGradient><linearGradient id="ribbonB" x1="130" y1="300" x2="390" y2="60" gradientUnits="userSpaceOnUse"><stop stopColor="#087BBE"/><stop offset="1" stopColor="#36F0D1"/></linearGradient></defs><path d="M78 251 181 91c15-23 48-24 65-2l116 153c17 22 49 21 64-2l22-33" stroke="url(#ribbonA)" strokeWidth="55" strokeLinecap="round"/><path d="m176 91 116 153c17 22 49 21 64-2l86-122" stroke="url(#ribbonB)" strokeWidth="55" strokeLinecap="round" opacity=".94"/></svg>
      <div className="emblem-orbit orbit-one"/><div className="emblem-orbit orbit-two"/>
      <div className="float-chip chip-code"><Code2 size={17}/> <span>IDEIAS → CÓDIGO</span></div>
      <div className="float-chip chip-spark"><Sparkles size={17}/> <span>FEITO PARA VOCÊ</span></div>
      <div className="float-chip chip-node"><span className="live-dot"/> <span>BUILDING THE NEXT</span></div>
      <span className="emblem-cross cross-one">✳</span><span className="emblem-cross cross-two">+</span>
    </div>
    <div className="hero-bottom"><span>NVGI TECH <i/> BRASIL</span><span>ROLE PARA DESCOBRIR <ArrowDown size={13}/></span></div>
  </section>;
}
function Ticker(){const words=["SISTEMAS","AUTOMAÇÃO","INTEGRAÇÃO","PRODUTOS DIGITAIS","IDEIAS EM MOVIMENTO"];return <div className="ticker"><div className="ticker-track">{[...words,...words,...words,...words].map((w,i)=><span key={i}>{w}<Asterisk size={18}/></span>)}</div></div>}
function Projects(){
 return <section className="section projects" id="projetos"><div className="section-heading"><Reveal><span className="kicker">01 / PROJETOS EM MOVIMENTO</span><h2>Ideias que já<br/><span className="dim-title">estão ganhando forma.</span></h2></Reveal><Reveal delay={.12}><p className="section-lead">A tecnologia fica mais interessante quando resolve algo de verdade. Conheça algumas das ideias que estamos transformando em experiências reais.</p></Reveal></div>
 <div className="project-stack">{projects.map((p,i)=><Reveal key={p.n} delay={i*.1}><article className="project-card"><div className="project-details"><div className="project-index">{p.n} <span/> {p.type}</div><h3>{p.name}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contato" className="project-action">Quero conhecer esse projeto <span><ArrowUpRight size={17}/></span></a></div><div className={`project-screen screen-${p.kind}`}>
 {p.kind==="zap"?<div className="mock-window"><div className="mock-top"><div className="window-dots"><i/><i/><i/></div><span>VAIDEZAP / PAINEL</span><span className="mock-live"><i/> ONLINE</span></div><div className="mock-body"><aside className="mock-sidebar"><div className="mock-logo"><AudioWaveform size={18}/> <b>vai de zap</b></div><span className="mock-menu active"><Layers3 size={13}/> Visão geral</span><span className="mock-menu"><Radio size={13}/> Conversas</span><span className="mock-menu"><Network size={13}/> Motoristas</span><span className="mock-menu"><Cpu size={13}/> Automação</span></aside><div className="mock-main"><div className="mock-greeting">Bom dia! <span>✦</span><small>Acompanhe sua operação em um só lugar.</small></div><div className="mock-stats"><div><small>Mensagens hoje</small><b>1.284</b><em>↗ 18,6%</em></div><div><small>Atendimentos</small><b>96</b><em>↗ 12,2%</em></div></div><div className="mock-chart"><div className="chart-heading">Atividade de mensagens <small>ÚLTIMAS 24H</small></div><div className="chart-bars">{[28,42,34,61,48,76,54,88,65,96,70,82,57,100,73,91,60,80,46,68].map((v,j)=><i key={j} style={{height:v+"%"}}/>)}</div></div><div className="mock-bottom"><span><i/> Integração ativa</span><span>Atualizado agora</span></div></div></div></div>:<div className="nvin-demo"><div className="nvin-orbit orbit-a"/><div className="nvin-orbit orbit-b"/><div className="nvin-card"><div className="nvin-card-top"><span>NVÍNK / CONNECT</span><Radio size={17}/></div><div className="nvin-symbol"><span/><span/></div><b>Conexões que<br/>valem mais.</b><small>EXPERIÊNCIAS POR APROXIMAÇÃO</small><div className="nvin-tap"><Zap size={14}/> TAP TO CONNECT</div></div><div className="nvin-floating"><Fingerprint size={18}/><span>IDENTIDADE DIGITAL</span></div></div>}
 <div className="screen-caption"><span>INTERFACE CONCEITUAL</span><span>0{i+1} / 02</span></div></div></article></Reveal>)}</div>
 </section>;
}
function Services(){
 return <section className="section services" id="servicos"><div className="section-heading"><Reveal><span className="kicker">02 / COMO PODEMOS AJUDAR</span><h2>Seu desafio.<br/><span className="dim-title">Nossa próxima criação.</span></h2></Reveal><Reveal delay={.12}><p className="section-lead">Não importa se você está começando, crescendo ou reinventando seu negócio. A tecnologia precisa fazer sentido para sua realidade.</p></Reveal></div><div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.n} delay={i*.07}><article className="service-card"><div className="service-top"><span>{s.n} / SOLUÇÃO</span><Icon size={27} strokeWidth={1.45}/></div><h3>{s.title}</h3><p>{s.text}</p><div className="service-foot"><span>{s.detail}</span><ArrowUpRight size={17}/></div><div className="service-orb"/></article></Reveal>})}</div></section>;
}
function About(){
 return <section className="about" id="sobre"><div className="about-bg-orb"/><div className="section about-inner"><Reveal><span className="kicker">03 / NOSSA ESSÊNCIA</span><h2>Tecnologia boa é aquela<br/>que faz sentido <span className="hero-gradient">para você.</span></h2></Reveal><div className="about-layout"><Reveal delay={.1}><p className="about-copy">A NVGI Tech nasceu de uma ideia simples: tecnologia não deve ser complicada, distante ou feita só para alguns. Ela deve aproximar possibilidades, resolver problemas e abrir caminhos.</p><p className="about-copy about-copy-secondary">Por isso, cada projeto começa ouvindo. Entendemos pessoas, negócios e necessidades antes de pensar em linhas de código. O resultado precisa funcionar no mundo real e fazer sentido para quem vai usar.</p><a className="about-cta" href="#contato">Conte pra gente o que você precisa <ArrowUpRight size={17}/></a></Reveal><Reveal delay={.2}><div className="principles"><div className="principle"><span className="principle-icon"><Fingerprint/></span><div><b>Feito para pessoas</b><small>Escuta antes da solução.</small></div><span className="principle-no">01</span></div><div className="principle"><span className="principle-icon"><Workflow/></span><div><b>Simples por intenção</b><small>Complexidade nos bastidores.</small></div><span className="principle-no">02</span></div><div className="principle"><span className="principle-icon"><Sparkles/></span><div><b>Pronto para evoluir</b><small>Ideias que crescem junto com você.</small></div><span className="principle-no">03</span></div></div></Reveal></div></div></section>;
}
function Contact(){
 return <section className="contact" id="contato"><div className="contact-grid"/><Reveal><span className="kicker">04 / SUA IDEIA COMEÇA AQUI</span><h2>Você imagina.<br/><span className="hero-gradient">A gente constrói.</span></h2><p>Tem um processo que poderia ser melhor? Uma ideia esperando para sair do papel? Ou só quer descobrir o que a tecnologia pode fazer pelo seu negócio?</p><a className="btn-primary contact-button" href="mailto:contato@nvgitech.com.br">Vamos conversar sobre sua ideia <ArrowUpRight size={18}/></a><span className="contact-note">SEM COMPLICAÇÃO. SEM IDEIA PEQUENA DEMAIS.</span></Reveal><div className="contact-art" aria-hidden="true"><div className="contact-ring"/><div className="contact-ring ring-b"/><Asterisk/></div></section>;
}
function Footer(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{const f=()=>setVisible(window.scrollY>500);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
 return <><footer className="footer"><a href="#inicio" className="brand"><span className="brand-mark"><i/><i/><i/></span><span>NVGI<span className="brand-tech">TECH</span></span></a><span className="footer-line">Ideias transformadas em soluções.</span><a href="#contato" className="footer-contact">TEM UMA IDEIA? <ArrowUpRight size={14}/></a><span className="footer-copy">© {new Date().getFullYear()} NVGI TECH</span></footer><button className={visible?"back-top visible":"back-top"} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Voltar ao topo"><ChevronUp size={19}/></button></>;
}
export default function App(){return <div className="app"><Header/><main><Hero/><Ticker/><Projects/><Services/><About/><Contact/></main><Footer/></div>}
