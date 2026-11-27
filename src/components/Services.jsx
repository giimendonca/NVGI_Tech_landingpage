import { ArrowUpRight, Blocks, Bot, Network, Fingerprint } from "lucide-react";
import Reveal from "./Reveal.jsx";

function Services(){
 return <section className="section services" id="servicos"><div className="section-heading"><Reveal><span className="kicker">02 / COMO PODEMOS AJUDAR</span><h2>Seu desafio.<br/><span className="dim-title">Nossa próxima criação.</span></h2></Reveal><Reveal delay={.12}><p className="section-lead">Não importa se você está começando, crescendo ou reinventando seu negócio. A tecnologia precisa fazer sentido para sua realidade.</p></Reveal></div><div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.n} delay={i*.07}><article className="service-card"><div className="service-top"><span>{s.n} / SOLUÇÃO</span><Icon size={27} strokeWidth={1.45}/></div><h3>{s.title}</h3><p>{s.text}</p><div className="service-foot"><span>{s.detail}</span><ArrowUpRight size={17}/></div><div className="service-orb"/></article></Reveal>})}</div></section>;
}

export default Services;
