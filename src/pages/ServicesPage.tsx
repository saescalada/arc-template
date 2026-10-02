import { useState } from "react";
import { Link } from "react-router-dom";
import nemo from "../assets/images/nemo.png";
import combat from "../assets/images/hero-test.jpg";
import studio from "../assets/images/hero-3.jpg";
import "../styles/services.css";

const sectors = [
  { id: "programming", number: "01", title: "Programming Services", image: combat, items: [
    { title: "Online / Multiplayer", description: "Online architecture and multiplayer features designed around your game and the way your players connect." },
    { title: "Smooth Online Experience", description: "Peer-to-peer online systems for fighting games, supported by our experience developing NEMO." },
    { title: "Feature Programming", description: "Gameplay systems and feature implementation, with a multiplatform approach from the early stages of development." },
  ] },
  { id: "art", number: "02", title: "Art and Unreal Layout Services", image: studio, items: [
    { title: "Art and LookDev", description: "Character and environment concepts, hard-surface and organic modeling, texturing, materials and procedural shading." },
    { title: "Full Animation Pipeline", description: "Custom character rigging, asset and character animation, exporting and implementation in Unreal Engine." },
    { title: "Unreal Engine Layout and Tech Art", description: "Map layout and set dressing, Sequencer work, character and asset implementation, physics and dynamic shaders." },
  ] },
];

function ServicePanel({ sector }: { sector: typeof sectors[number] }) {
  const [expanded, setExpanded] = useState<number | null>(0);
  return (
    <section className={`service-panel service-panel--${sector.id}`} aria-labelledby={`${sector.id}-title`}>
      <div className="service-panel-visual">
        <img className="service-panel-image" src={sector.image} alt="" loading="lazy" />
      </div>
      <div className="service-panel-content">
      <div className="service-panel-heading">
        <span className="services-label">{sector.number} / EXPERTISE</span>
        <h2 id={`${sector.id}-title`}>{sector.title}</h2>
      </div>
      <div className="service-bars">
        {sector.items.map((item, index) => {
          const open = expanded === index;
          const id = `${sector.id}-${index}`;
          return (
            <div className={`service-bar ${open ? "is-open" : ""}`} key={item.title}>
              <h3><button id={`${id}-trigger`} type="button" aria-expanded={open} aria-controls={id} onClick={() => setExpanded(open ? null : index)}>
                <span>{item.title}</span><span className="service-bar-icon" aria-hidden="true">+</span>
              </button></h3>
              <div id={id} className="service-bar-reveal" role="region" aria-labelledby={`${id}-trigger`} aria-hidden={!open}>
                <div><p>{item.description}</p></div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-container">
        <header className="services-heading">
          <span className="services-label">AONE GAMES / WORK FOR HIRE</span>
          <h1>Services</h1>
          <p>Programming, art and production support for your next game.<br />Explore what we can bring to your team.</p>
        </header>
        <div className="services-panels">{sectors.map((sector) => <ServicePanel sector={sector} key={sector.id} />)}</div>
        <section className="services-nemo" aria-labelledby="services-nemo-title">
          <div className="services-nemo-brand"><span className="services-label">OUR OWN TECHNOLOGY</span><img src={nemo} alt="NEMO Fighting Engine" width="2390" height="1080" loading="lazy" /></div>
          <div><h2 id="services-nemo-title">Our technology for fighting games.</h2><p>Meet NEMO, our Unreal Engine-based framework for creating 2.5D fighting games.</p><Link to="/nemo" className="services-link">EXPLORE NEMO <span aria-hidden="true">↗</span></Link></div>
        </section>
        <div className="services-contact"><p>Have a project in mind?</p><Link to="/contact" className="services-link">LET'S TALK <span aria-hidden="true">↗</span></Link></div>
      </div>
    </div>
  );
}

