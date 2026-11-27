import { ArrowUpRight, AudioWaveform, Cpu, Fingerprint, Layers3, Network, Radio, Zap } from "lucide-react";
import Reveal from "./Reveal.jsx";

const projects = [
  { n:"01", name:"Vai de ZAP", type:"AUTOMAÇÃO · MOBILIDADE", description:"Uma experiência de comunicação para aproximar motoristas e operação, tornando a rotina mais simples e conectada.", tags:["WhatsApp","Automação","Mobilidade"], kind:"zap" },
  { n:"02", name:"N-vínk", type:"PRODUTO DIGITAL · NFC", description:"Uma proposta de relacionamento e fidelização que aproxima marcas e pessoas por meio de experiências conectadas.", tags:["NFC","Fidelização","Experiência"], kind:"nvin" },
];

function Projects(){
 return <section className="section projects" id="projetos"><div className="section-heading"><Reveal><span className="kicker">01 / PROJETOS EM MOVIMENTO</span><h2>Ideias que já<br/><span className="dim-title">estão ganhando forma.</span></h2></Reveal><Reveal delay={.12}><p className="section-lead">A tecnologia fica mais interessante quando resolve algo de verdade. Conheça algumas das ideias que estamos transformando em experiências reais.</p></Reveal></div>
 <div className="project-stack">{projects.map((p,i)=><Reveal key={p.n} delay={i*.1}><article className="project-card"><div className="project-details"><div className="project-index">{p.n} <span/> {p.type}</div><h3>{p.name}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contato" className="project-action">Quero conhecer esse projeto <span><ArrowUpRight size={17}/></span></a></div><div className={`project-screen screen-${p.kind}`}>
 {p.kind==="zap"?<div className="zap-real-preview"><img src="/assets/projects/vaidezap-dashboard.webp" alt="Captura real do painel Vai de ZAP, mostrando o status online e a área de corridas ativas" /></div>:<div className="nvin-demo" aria-label="Prévia conceitual de uma experiência NFC"><div className="nvin-orbit orbit-a"/><div className="nvin-orbit orbit-b"/><div className="nvin-card"><div className="nvin-card-top"><span>NVÍNK / CONNECT</span><Radio size={17}/></div><div className="nvin-symbol"><span/><span/></div><b>Conexões que<br/>valem mais.</b><small>EXPERIÊNCIAS POR APROXIMAÇÃO</small><div className="nvin-tap"><Zap size={14}/> TAP TO CONNECT</div></div><div className="nvin-floating"><Fingerprint size={18}/><span>IDENTIDADE DIGITAL</span></div></div>}
 <div className="screen-caption"><span>{p.kind==="zap"?"PAINEL REAL · VAI DE ZAP":"PRÉVIA CONCEITUAL"}</span><span>0{i+1} / 02</span></div></div></article></Reveal>)}</div>
 </section>;
}

export default Projects;
