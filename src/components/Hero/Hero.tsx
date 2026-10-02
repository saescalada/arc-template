import { Link } from "react-router-dom";
import omenArtwork from "../../assets/images/hero-test.jpg";
import "./Hero.css";

const chapters = [
  { href: "#home-game", label: "OUR GAME", title: "OMEN OF SORROW" },
  { href: "#home-services", label: "YOUR NEXT PROJECT", title: "DEVELOPMENT & ART" },
  { href: "#home-clients", label: "WORKING TOGETHER", title: "CLIENTS & PROJECTS" },
];

function Hero() {
  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-backdrop" aria-hidden="true">
        <img src={omenArtwork} alt="" fetchPriority="high" width="1920" height="1080" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-eyebrow"><span /> AONE GAMES / SANTIAGO, CHILE</div>
        <div>
          <span className="hero-category">OUR ORIGINAL GAME <span> / 2.5D FIGHTING</span></span>
          <h1 className="hero-title" id="home-title"><span>OMEN OF</span><span>SORROW</span></h1>
          <p className="hero-description">Legends awaken. Darkness takes the arena. Discover our fighting game inspired by the monsters of myth and horror.</p>
        </div>
        <div className="hero-actions">
          <a href="#home-game" className="hero-button">DISCOVER THE GAME <span aria-hidden="true">↗</span></a>
          <Link to="/contact" className="hero-secondary">WORK WITH US <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-platforms">Original games. Development. Art. Collaboration.</div>
      </div>
      <div className="hero-bottom">
        <nav className="hero-chapters" aria-label="Explore AOne Games">
          {chapters.map((chapter, index) => (
            <a key={chapter.href} className="hero-chapter" href={chapter.href}>
              <span className="hero-chapter-number">0{index + 1}</span>
              <span className="hero-chapter-copy"><small>{chapter.label}</small><strong>{chapter.title}</strong></span>
              <span className="hero-chapter-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <a href="#home-studio" className="hero-scroll">MEET THE STUDIO <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
export default Hero;

