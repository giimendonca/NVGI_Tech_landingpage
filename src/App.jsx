import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, AudioWaveform,
  Blocks, Check, ChevronDown, Code2, Command, Cpu, Fingerprint,
  Layers3, Menu, MousePointer2, Network, Orbit, Radio, Sparkles, Workflow, X
} from "lucide-react";

const services = [
  { number: "01", icon: Blocks, title: "Sistemas sob medida", text: "Plataformas pensadas em torno do seu processo, não o contrário. Do primeiro fluxo à operação completa." },
  { number: "02", icon: Workflow, title: "Automações inteligentes", text: "Menos tarefas repetitivas, menos ruído operacional e mais espaço para o que realmente importa." },
  { number: "03", icon: Network, title: "Integrações que conectam", text: "Seus serviços e ferramentas trabalhando em conjunto, com dados fluindo de um lugar para o outro." },
  { number: "04", icon: Fingerprint, title: "Produtos digitais", text: "Experiências digitais com identidade própria, construídas para resolver problemas reais." },
];

const projects = [
  { id: "01", name: "Vai de ZAP", type: "AUTOMAÇÃO · MOBILIDADE", description: "Uma experiência de comunicação mais simples para conectar motoristas e operação.", tags: ["Automação", "Comunicação", "Operações"], visual: "zap" },
  { id: "02", name: "N-vínk", type: "PRODUTO DIGITAL · NFC", description: "Fidelização e relacionamento em uma experiência conectada, aproximando marcas e pessoas.", tags: ["NFC", "Fidelização", "Experiência"], visual: "link" },
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["O que fazemos", "#servicos"], ["Projetos", "#projetos"], ["Sobre", "#sobre"]];
  return <header className="header">
    <a className="wordmark" href="#inicio" aria-label="NVGI Tech, início"><span className="wordmark-symbol"><span /><span /><span /></span><span>NVGI<span className="wordmark-light">TECH</span></span></a>
    <nav className={open ? "nav nav-open" : "nav"}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight size={15} /></a></nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
  </header>;
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  return <section className="hero" id="inicio" ref={ref}>
    <div className="hero-grid" />
    <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
    <motion.div className="hero-content" style={{ y }}>
      <div className="eyebrow"><span className="status-dot" /> TECNOLOGIA COM INTENÇÃO <span className="eyebrow-line" /></div>
      <h1>Ideias grandes.<br /><span className="gradient-text">Tecnologia à altura.</span></h1>
      <p className="hero-copy">Criamos sistemas, automações e produtos digitais que transformam desafios reais em novas possibilidades.</p>
      <div className="hero-actions"><a href="#projetos" className="button button-primary">Explore nosso trabalho <ArrowUpRight size={17} /></a><a href="#servicos" className="text-link">Descubra o que fazemos <ArrowDownRight size={16} /></a></div>
    </motion.div>
    <div className="hero-art" aria-hidden="true">
      <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
      <div className="orbit-core"><div className="core-inner"><Command size={47} strokeWidth={1.1} /></div></div>
      <div className="orbit-node node-a"><Code2 size={19} /></div><div className="orbit-node node-b"><Cpu size={19} /></div><div className="orbit-node node-c"><Radio size={19} /></div>
      <div className="floating-label label-a"><span className="mini-pulse" /> SYSTEMS ONLINE</div>
      <div className="floating-label label-b">BUILDING WHAT'S NEXT <ArrowUpRight size={12} /></div>
      <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
    </div>
    <div className="hero-bottom"><span>01 / 04</span><span className="scroll-indicator">ROLE PARA EXPLORAR <span /></span><span>BRASIL · DIGITAL FIRST</span></div>
  </section>;
}

function Marquee() {
  const items = ["IDEIAS EM MOVIMENTO", "TECNOLOGIA COM PROPÓSITO", "SOLUÇÕES QUE CONECTAM"];
  return <div className="marquee" aria-label="Ideias em movimento, tecnologia com propósito, soluções que conectam"><div className="marquee-track">{[...items, ...items, ...items, ...items].map((item, i) => <span key={i}>{item}<Asterisk size={19} /></span>)}</div></div>;
}

function Services() {
  return <section className="section services-section" id="servicos">
    <div className="section-top"><Reveal><span className="section-kicker">01 — O QUE FAZEMOS</span><h2>Tecnologia que<br /><span className="muted-heading">resolve. E evolui.</span></h2></Reveal><Reveal delay={0.12}><p className="section-intro">Não acreditamos em soluções de prateleira para problemas únicos. Entendemos o cenário, desenhamos o caminho e construímos a ferramenta certa.</p></Reveal></div>
    <div className="service-grid">{services.map((service, i) => { const Icon = service.icon; return <Reveal key={service.number} delay={i * 0.07}><article className="service-card"><div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow"><ArrowUpRight size={18} /></span></article></Reveal>; })}</div>
  </section>;
}

function Projects() {
  return <section className="section projects-section" id="projetos">
    <div className="section-top projects-heading"><Reveal><span className="section-kicker">02 — EM MOVIMENTO</span><h2>Feito para sair<br /><span className="muted-heading">do papel.</span></h2></Reveal><Reveal delay={0.12}><p className="section-intro">Ideias ganham valor quando encontram o mundo. Estes são alguns dos projetos que estamos colocando em movimento.</p></Reveal></div>
    <div className="project-list">{projects.map((project, i) => <Reveal key={project.id} delay={i * 0.1}><article className="project-card"><div className="project-info"><span className="project-type">{project.id} / {project.type}</span><h3>{project.name}<span className="project-period">®</span></h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contato">Quero saber mais <ArrowUpRight size={16} /></a></div><div className={`project-visual visual-${project.visual}`} aria-hidden="true">{project.visual === "zap" ? <><div className="zap-ring ring-one" /><div className="zap-ring ring-two" /><div className="zap-icon"><AudioWaveform size={66} strokeWidth={1.2} /></div><div className="visual-chip chip-top"><span className="mini-pulse" /> CONECTADO</div><div className="visual-chip chip-bottom">AUTOMAÇÃO <ArrowUpRight size={12} /></div><div className="visual-coordinate">23°32' · 46°38'</div></> : <><div className="link-orbit orbit-left" /><div className="link-orbit orbit-right" /><div className="link-symbol"><span /><span /></div><div className="visual-chip chip-top">TAP TO CONNECT <Radio size={13} /></div><div className="visual-chip chip-bottom">NFC / LOYALTY</div><div className="visual-coordinate">ONE TAP. NEW POSSIBILITIES.</div></>}</div></article></Reveal>)}</div>
  </section>;
}

function About() {
  return <section className="about-section" id="sobre"><div className="about-noise" /><div className="section about-inner"><Reveal><span className="section-kicker">03 — NOSSA ESSÊNCIA</span><h2>O futuro não aparece<br />pronto. <span className="gradient-text">A gente constrói.</span></h2></Reveal><div className="about-bottom"><Reveal delay={0.12}><p className="about-statement">Somos a NVGI Tech. Uma empresa de tecnologia movida por curiosidade, criatividade e vontade de fazer melhor. Unimos visão e desenvolvimento para transformar boas ideias em soluções que fazem diferença.</p></Reveal><Reveal delay={0.2}><div className="about-values"><div><Sparkles size={18} /><span>Curiosidade para explorar</span></div><div><MousePointer2 size={18} /><span>Intenção em cada detalhe</span></div><div><Orbit size={18} /><span>Visão para ir além</span></div></div></Reveal></div></div></section>;
}

function Contact() {
  return <section className="contact-section" id="contato"><Reveal><span className="section-kicker">04 — O PRÓXIMO PASSO</span><h2>Tem uma ideia?<br /><span className="gradient-text">Vamos dar forma a ela.</span></h2><p>Um desafio, uma oportunidade ou aquela ideia que não sai da cabeça. Queremos conhecer.</p><a className="button button-primary contact-button" href="https://github.com/giimendonca" target="_blank" rel="noreferrer">Conheça nosso universo <ArrowUpRight size={17} /></a></Reveal><div className="contact-decoration"><Layers3 /><span>LET'S BUILD<br />SOMETHING<br />MEANINGFUL.</span><Asterisk /></div></section>;
}

function Footer() {
  return <footer className="footer"><a className="wordmark footer-mark" href="#inicio"><span className="wordmark-symbol"><span /><span /><span /></span><span>NVGI<span className="wordmark-light">TECH</span></span></a><span>Ideias em movimento. Tecnologia em construção.</span><a href="#inicio" className="back-top">VOLTAR AO TOPO ↑</a><span className="copyright">© {new Date().getFullYear()} NVGI TECH</span></footer>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className={scrolled ? "app is-scrolled" : "app"}><Header /><main><Hero /><Marquee /><Services /><Projects /><About /><Contact /></main><Footer /></div>;
}