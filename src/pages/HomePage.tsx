import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Reveal from "../components/Reveal";
import omenCharacter from "../assets/images/hero-2.png";
import nemoLogo from "../assets/images/nemo.png";
import funlabsLogo from "../assets/images/FunLabsLogo.jpg";
import sunspearLogo from "../assets/images/SunspearLogo.jpg";
import cocaColaLogo from "../assets/images/CocaCola_Logo.jpg";
import "../styles/home.css";

const services = [
  { number: "01", title: "Game development", description: "Full projects or a focused contribution to your team. Gameplay and feature development with Unreal Engine and Unity.", tags: "UNREAL ENGINE / UNITY / C++ / C#" },
  { number: "02", title: "Online & multiplayer", description: "Networking systems and multiplayer features built around the needs of your game.", tags: "ONLINE SYSTEMS / MULTIPLAYER" },
  { number: "03", title: "Art & animation", description: "From character and environment concepts to 3D assets, rigging, animation and implementation in Unreal Engine.", tags: "3D ART / ANIMATION / TECH ART" },
];
const projects = [
  { client: "Funlabs", category: "PROGRAMMING", logo: funlabsLogo, width: 960, height: 720 },
  { client: "Sunspear Games", category: "ART & ANIMATION", logo: sunspearLogo, width: 476, height: 562 },
  { client: "Coca-Cola Andina", category: "FULL DEVELOPMENT", logo: cocaColaLogo, width: 1200, height: 630 },
];
function HomePage() {
  const [logosPaused, setLogosPaused] = useState(false);
  return (
    <div className="home-page">
      <Hero />
      <Reveal>
        <section className="home-section home-studio" id="home-studio" aria-labelledby="studio-title">
          <div className="home-container home-studio-grid">
            <div><span className="home-eyebrow">01 / THE STUDIO</span><h2 id="studio-title">We make games.<br /><span>And help you build yours.</span></h2></div>
            <div className="home-studio-copy">
              <p>We are AOne Games, a game development company based in Santiago, Chile. We create original games and collaborate with teams on programming, art and interactive experiences.</p>
              <p>From our own fighting game, Omen of Sorrow, to projects for other studios and brands, we bring creative and technical disciplines together.</p>
              <Link to="/services" className="home-text-link">EXPLORE OUR EXPERTISE <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </Reveal>
      <section className="home-clients-strip home-container" id="home-clients" aria-labelledby="clients-label">
  <div className="home-clients-heading">
    <h2 id="clients-label">SELECTED COLLABORATIONS</h2>
    <button type="button" className="home-logos-toggle" aria-pressed={logosPaused} onClick={() => setLogosPaused(!logosPaused)}>{logosPaused ? "Resume motion" : "Pause motion"}</button>
  </div>
  <div className={`home-logos-window ${logosPaused ? "is-paused" : ""}`}>
    <div className="home-logos-track">
      {[0, 1].map((copy) => (
        <ul className="home-logos-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {projects.map((project, index) => (
            <li className="home-logo-item" key={`${project.client}-${index}`}>
              <img src={project.logo} alt={copy === 0 && index < projects.length ? project.client : ""} width={project.width} height={project.height} loading="lazy" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
  <Link to="/clients" className="home-text-link home-clients-more">MORE ABOUT THESE PROJECTS <span aria-hidden="true">↗</span></Link>
</section>
<Reveal>
<section className="home-section home-game" id="home-game" aria-labelledby="game-title">
          <div className="home-container home-game-panel">
            <div className="home-game-art"><img src={omenCharacter} alt="Characters and combat artwork from Omen of Sorrow" width="1534" height="993" loading="lazy" /><span className="home-art-caption">A GAME BY AONE GAMES</span></div>
            <div className="home-game-copy">
              <span className="home-eyebrow">02 / OUR ORIGINAL GAME</span><h2 id="game-title">Omen of Sorrow</h2>
              <p>A fighting game where horror, mythology and classic arcade combat meet. Enter an arena of legendary creatures and discover a world with its own dark identity.</p>
              <ul className="home-game-tags" aria-label="Game features"><li>2.5D fighting</li><li>Online multiplayer</li><li>PC & consoles</li></ul>
              <a className="home-button" href="https://omen.aonegames.com/">VISIT THE GAME WEBSITE <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="home-section home-services" id="home-services" aria-labelledby="services-title">
          <div className="home-container">
            <div className="home-section-heading"><div><span className="home-eyebrow">03 / OUR EXPERTISE</span><h2 id="services-title">Your vision. Our craft.</h2></div><p>Specialist support or full development.<br />Let's find the right way to work together.</p></div>
            <div className="home-service-grid">
              {services.map((service) => <article className="home-service" key={service.number}><span className="home-service-number" aria-hidden="true">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="home-service-tags">{service.tags}</span></article>)}
            </div>
            <Link to="/services" className="home-text-link home-project-link">VIEW ALL SERVICES <span aria-hidden="true">↗</span></Link>
            <div className="home-nemo">
              <div className="home-nemo-brand"><span className="home-eyebrow">OUR TECHNOLOGY</span><img src={nemoLogo} alt="NEMO Fighting Engine" width="2390" height="1080" loading="lazy" /></div>
              <p>Our Unreal Engine-based technology for creating 2.5D fighting games.</p>
              <Link to="/nemo" className="home-text-link">EXPLORE NEMO <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </Reveal>
<section className="home-section home-contact" aria-labelledby="home-contact-title"><div className="home-container home-contact-inner"><div><span className="home-eyebrow">LET'S WORK TOGETHER</span><h2 id="home-contact-title">What are you building next?</h2><p>Tell us about your project and where we can help.</p></div><Link to="/contact" className="home-button">START A CONVERSATION <span aria-hidden="true">↗</span></Link></div></section>
    </div>
  );
}
export default HomePage;

