import { Asterisk } from "lucide-react";

function Ticker(){const words=["SISTEMAS","AUTOMAÇÃO","INTEGRAÇÃO","PRODUTOS DIGITAIS","IDEIAS EM MOVIMENTO"];return <div className="ticker"><div className="ticker-track">{[...words,...words,...words,...words].map((w,i)=><span key={i}>{w}<Asterisk size={18}/></span>)}</div></div>}

export default Ticker;
