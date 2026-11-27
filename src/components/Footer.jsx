import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronUp } from "lucide-react";

function Footer(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{const f=()=>setVisible(window.scrollY>500);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
 return <><footer className="footer"><a href="#inicio" className="brand"><img src="/assets/logo/nvgi-simbolo.svg" alt="" className="brand-symbol" /><span>NVGI<span className="brand-tech">TECH</span></span></a><span className="footer-line">Ideias transformadas em soluções.</span><a href="#contato" className="footer-contact">TEM UMA IDEIA? <ArrowUpRight size={14}/></a><span className="footer-copy">© {new Date().getFullYear()} NVGI TECH</span></footer><button className={visible?"back-top visible":"back-top"} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Voltar ao topo"><ChevronUp size={19}/></button></>;
}
export default

export default Footer;
