import { ArrowUpRight, Workflow } from "lucide-react";
import Reveal from "./Reveal.jsx";

function Contact(){
 return <section className="contact" id="contato"><div className="contact-grid"/><Reveal><span className="kicker">04 / SUA IDEIA COMEÇA AQUI</span><h2>Você imagina.<br/><span className="hero-gradient">A gente constrói.</span></h2><p>Tem um processo que poderia ser melhor? Uma ideia esperando para sair do papel? Ou só quer descobrir o que a tecnologia pode fazer pelo seu negócio?</p><a className="btn-primary contact-button" href="mailto:contato@nvgitech.com.br">Vamos conversar sobre sua ideia <ArrowUpRight size={18}/></a><span className="contact-note">SEM COMPLICAÇÃO. SEM IDEIA PEQUENA DEMAIS.</span></Reveal><div className="contact-art" aria-hidden="true"><span className="network-line line-a"/><span className="network-line line-b"/><span className="network-line line-c"/><span className="network-node node-a"/><span className="network-node node-b"/><span className="network-node node-c"/><div className="contact-art-core"><Workflow size={42}/><span>TUDO SE CONECTA</span></div></div></section>;
}

export default Contact;
