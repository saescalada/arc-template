import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import funlabs from "../assets/images/FunLabsLogo.jpg";
import sunspear from "../assets/images/SunspearLogo.jpg";
import cocaCola from "../assets/images/CocaCola_Logo.jpg";
import nerf from "../assets/images/funlab1.jpg";
import openCountry from "../assets/images/funlab2.jpg";
import immortalArt from "../assets/images/sunspear1.jpg";
import immortalGameplay from "../assets/images/sunspear2.jpg";
import cocaInterior from "../assets/images/coca1.jpg";
import cocaExterior from "../assets/images/coca2.jpg";
import "../styles/clients.css";

const projects = [
  {
    id: "funlabs", number: "01", client: "Funlabs", logo: funlabs, category: "PROGRAMMING",
    title: "NERF & Open Country",
    description: "Programming support and bug fixing during the compliance stage of console and PC games.",
    contributions: ["Programming support", "Bug fixing", "Console & PC compliance"],
    images: [{ src: nerf, caption: "NERF Legends", width: 1280, height: 512 }, { src: openCountry, caption: "Open Country", width: 1280, height: 512 }],
  },
  {
    id: "sunspear", number: "02", client: "Sunspear Games", logo: sunspear, category: "ART & ANIMATION",
    title: "Immortal: Gates of Pyre",
    description: "Character and asset creation for a real-time strategy game, from modeling and texturing to rigging and character animation.",
    contributions: ["3D modeling & texturing", "Character rigging", "3D animation"],
    images: [{ src: immortalArt, caption: "Immortal: Gates of Pyre — artwork", width: 1280, height: 512 }, { src: immortalGameplay, caption: "Immortal: Gates of Pyre — gameplay", width: 1280, height: 512 }],
  },
  {
    id: "coca-cola", number: "03", client: "Coca-Cola Andina", logo: cocaCola, category: "FULL DEVELOPMENT",
    title: "An interactive world for Coca-Cola.",
    description: "Full game development and online services for a multiplayer virtual tour, introducing children to beverage production and the history of Coca-Cola in Chile.",
    contributions: ["Full game development", "Online services", "Multiplayer virtual tour"],
    images: [{ src: cocaInterior, caption: "Virtual tour — shared indoor experience", width: 1920, height: 1080 }, { src: cocaExterior, caption: "Virtual tour — exploring the environment", width: 1920, height: 1080 }],
  },
];
type ProjectImage = typeof projects[number]["images"][number];

export default function ClientsPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const openImage = (image: ProjectImage) => {
    setSelectedImage(image);
    dialog.current?.showModal();
  };

  return (
    <div className="clients-page">
      <div className="clients-container">
        <header className="clients-heading">
          <span className="clients-eyebrow">AONE GAMES / CLIENTS & PROJECTS</span>
          <h1>Our work.<br /><span>Your worlds.</span></h1>
          <p>Programming, art and complete interactive experiences. Explore the work we have contributed to studios and brands.</p>
        </header>

        <nav className="clients-index" aria-label="Explore collaborations">
          {projects.map((project) => <a key={project.id} href={`#${project.id}`}><img src={project.logo} alt={project.client} /><span>{project.category}</span><span className="clients-index-arrow" aria-hidden="true">↓</span></a>)}
        </nav>

        <div className="clients-projects">
          {projects.map((project) => (
            <section className={`client-project client-project--${project.id}`} key={project.id} id={project.id} aria-labelledby={`${project.id}-title`}>
              <div className="client-project-heading">
                <div>
                  <span className="clients-eyebrow">{project.number} / {project.category}</span>
                  <span className="client-project-name">{project.client}</span>
                  <h2 id={`${project.id}-title`}>{project.title}</h2>
                </div>
                <div className="client-project-copy">
                  <p>{project.description}</p>
                  <ul aria-label="AOne Games contributions">{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
                </div>
              </div>
              <div className="client-project-gallery">
                {project.images.map((image, index) => (
                  <figure key={image.src}>
                    <button type="button" onClick={() => openImage(image)} aria-label={`Enlarge ${image.caption}`}>
                      <img src={image.src} alt={image.caption} width={image.width} height={image.height} loading="lazy" />
                      <span className="client-image-expand" aria-hidden="true">↗</span>
                    </button>
                    <figcaption><span>0{index + 1} / {image.caption}</span><span aria-hidden="true">VIEW IMAGE ↗</span></figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="clients-contact" aria-labelledby="clients-contact-title">
          <div><span className="clients-eyebrow">YOUR NEXT PROJECT</span><h2 id="clients-contact-title">Let's work together.</h2><p>Tell us where your project is headed and how we can contribute.</p></div>
          <Link to="/contact">START A CONVERSATION <span aria-hidden="true">↗</span></Link>
        </section>
      </div>

      <dialog ref={dialog} className="client-lightbox" aria-label="Project image" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="client-lightbox-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close image" autoFocus>×</button>
        {selectedImage && <figure><img src={selectedImage.src} alt={selectedImage.caption} /><figcaption>{selectedImage.caption}</figcaption></figure>}
      </dialog>
    </div>
  );
}

