import { Link } from "react-router-dom";
import logo from "../assets/images/nemo.png";
import artwork from "../assets/images/hero-2.png";
import "../styles/nemo.css";

export default function NemoPage() {
  return (
    <div className="nemo-page">
      <div className="nemo-container">
        <Link to="/services" className="nemo-back">← BACK TO SERVICES</Link>
        <header className="nemo-hero">
          <div><img className="nemo-logo" src={logo} alt="NEMO Fighting Engine" width="2390" height="1080" /><span className="nemo-label">AONE GAMES / OUR TECHNOLOGY</span><h1>Built for<br />the fighting arena.</h1><p>NEMO is a framework built on Unreal Engine for fighting games with 3D graphics and 2D gameplay. It brings the systems behind the fight into a specialized development environment.</p><Link to="/contact" className="nemo-button">TALK TO US ABOUT NEMO ↗</Link></div>
          <img className="nemo-art" src={artwork} alt="Fighters from Omen of Sorrow" width="1534" height="993" />
        </header>
        <section className="nemo-features" aria-labelledby="nemo-features-title">
          <span className="nemo-label">INSIDE THE FRAMEWORK</span><h2 id="nemo-features-title">The systems behind every round.</h2>
          <dl>
            <div><dt>Combat configuration</dt><dd>Configure attacks, hit and hurt boxes, timing and movement to define the feel of your fighting game.</dd></div>
            <div><dt>Online foundations</dt><dd>Peer-to-peer networking with GGPO and Epic Online Services integrations for connected fighting experiences.</dd></div>
            <div><dt>Frame-based gameplay</dt><dd>A fighting-focused gameplay loop designed around consistent logic at 60 frames per second.</dd></div>
            <div><dt>PC & consoles</dt><dd>Multiplatform development tools for bringing a fighting game to PC and console platforms.</dd></div>
          </dl>
        </section>
        <div className="nemo-closing"><p>Developing a fighting game?</p><Link to="/contact">Let's discuss your project <span aria-hidden="true">↗</span></Link></div>
      </div>
    </div>
  );
}

