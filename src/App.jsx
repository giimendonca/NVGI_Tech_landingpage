import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return <div className="app"><Header/><main><Hero/><Ticker/><Projects/><Services/><About/><Contact/></main><Footer/></div>;
}
