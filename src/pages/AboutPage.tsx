import { Link } from "react-router-dom";
import studioImage from "../assets/images/about-studio.jpg";
import omenArtwork from "../assets/images/hero-2.png";
import "../styles/about.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-heading">
          <span className="about-label">ABOUT / AONE GAMES</span>
          <h1>A game studio.<br /><span>From Santiago to your screen.</span></h1>
          <p>We create original games and work with studios and brands on programming, art and interactive experiences.</p>
        </header>

        <section className="about-story" aria-labelledby="about-story-title">
          <figure className="about-studio-photo">
            <img src={studioImage} alt="An artist working on character animation at a game development workstation" width="1100" height="656" />
            <figcaption>ART, ANIMATION AND DEVELOPMENT</figcaption>
          </figure>
          <div className="about-story-copy">
            <span className="about-label">01 / THE STUDIO</span>
            <h2 id="about-story-title">Original games.<br />Hands-on experience.</h2>
            <p>AOne Games is a video game company based in Santiago, Chile, with experience developing for PC and consoles.</p>
            <p>Our work includes Omen of Sorrow, a fighting game inspired by horror, literature and mythology. Alongside our own games, we contribute programming, art and development services to projects for other teams.</p>
            <p>That work connects game creation with the technical and artistic disciplines needed to bring a project to life.</p>
          </div>
        </section>

        <section className="about-stats" aria-label="Studio at a glance">
          <div className="about-stat"><strong>10+</strong><span>YEARS CREATING</span></div>
          <div className="about-stat"><strong>25+</strong><span>GAMES RELEASED</span></div>
          <div className="about-stat"><strong>50+</strong><span>TEAM MEMBERS</span></div>
          <div className="about-stat"><strong>15M+</strong><span>PLAYERS</span></div>
        </section>

        <section className="about-philosophy" aria-labelledby="about-philosophy-title">
          <div><span className="about-label">A NOTE ON HOW WE CREATE</span><h2 id="about-philosophy-title">We don't just make games.<br /><span>We build worlds people remember.</span></h2></div>
          <p>Every project begins with an idea. We bring the people, craft and care together to make it real.</p>
        </section>

        <section className="about-work" aria-labelledby="about-work-title">
          <div className="about-section-heading"><span className="about-label">02 / OUR EXPERIENCE</span><h2 id="about-work-title">Get to know us through our work.</h2></div>
          <div className="about-work-rows">
            <a href="https://omen.aonegames.com/" className="about-work-row">
              <span className="about-row-number">01</span><div><span className="about-row-label">OUR ORIGINAL GAME</span><h3>Omen of Sorrow</h3></div><p>A 2.5D fighting game with a dark identity and classic arcade roots.</p><span className="about-row-arrow" aria-hidden="true">↗</span>
            </a>
            <Link to="/nemo" className="about-work-row">
              <span className="about-row-number">02</span><div><span className="about-row-label">OUR TECHNOLOGY</span><h3>NEMO Fighting Engine</h3></div><p>Our Unreal Engine-based framework specialized in 2.5D fighting games.</p><span className="about-row-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link to="/clients" className="about-work-row">
              <span className="about-row-number">03</span><div><span className="about-row-label">COLLABORATIONS</span><h3>Studios & brands</h3></div><p>Programming, art and interactive experiences for Funlabs, Sunspear Games and Coca-Cola.</p><span className="about-row-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="about-values" aria-labelledby="about-values-title">
          <div className="about-section-heading"><span className="about-label">WHAT GUIDES US</span><h2 id="about-values-title">The values behind the work.</h2></div>
          <div className="about-values-list">
            <article><span>01</span><h3>Creativity</h3><p>We explore ideas and give every experience its own identity.</p></article>
            <article><span>02</span><h3>Quality</h3><p>We care about the details, from the first prototype to the final build.</p></article>
            <article><span>03</span><h3>Community</h3><p>Players and partners shape how we create and keep improving.</p></article>
          </div>
        </section>

        <section className="about-disciplines" aria-labelledby="about-disciplines-title">
          <div>
            <span className="about-label">03 / HOW WE WORK</span><h2 id="about-disciplines-title">From the idea<br />to the engine.</h2>
            <p>We can take on a complete project or contribute specialist support alongside your team.</p>
            <dl>
              <div><dt>Programming</dt><dd>Gameplay, feature development and online systems, with experience in Unreal Engine and Unity.</dd></div>
              <div><dt>Art & animation</dt><dd>Concepts, 3D assets, rigging and animation through to engine implementation.</dd></div>
              <div><dt>Collaboration</dt><dd>A shared roadmap, visible development progress and direct communication throughout the work.</dd></div>
            </dl>
            <Link to="/services" className="about-text-link">EXPLORE OUR SERVICES <span aria-hidden="true">↗</span></Link>
          </div>
          <figure className="about-game-art"><img src={omenArtwork} alt="Character artwork from AOne Games' Omen of Sorrow" width="1534" height="993" loading="lazy" /><figcaption>OMEN OF SORROW / AONE GAMES</figcaption></figure>
        </section>

        <section className="about-contact" aria-labelledby="about-contact-title">
          <div><span className="about-label">LET'S CONNECT</span><h2 id="about-contact-title">Tell us what you're working on.</h2><p>Projects, partnerships, press and questions about our games.</p></div>
          <Link to="/contact" className="about-button">CONTACT AONE GAMES <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </div>
  );
}

