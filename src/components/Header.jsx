import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Header() {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
  const links=[["Projetos","#projetos"],["Soluções","#servicos"],["Nossa essência","#sobre"]];
  return <header className={scrolled?"site-header scrolled":"site-header"}>
    <a href="#inicio" className="brand" aria-label="NVGI Tech início"><img src="/assets/logo/nvgi-simbolo.svg" alt="" className="brand-symbol" /><span>NVGI<span className="brand-tech">TECH</span></span></a>
    <nav className={open?"main-nav nav-open":"main-nav"}>{links.map(([t,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{t}</a>)}<a className="nav-contact" href="#contato" onClick={()=>setOpen(false)}>Tem uma ideia? <ArrowUpRight size={15}/></a></nav>
    <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Abrir menu">{open?<X/>:<Menu/>}</button>
  </header>;
}

export default Header;
