import { Link } from "react-router-dom";
import TeamMember from "../components/TeamMember/TeamMember";
import { team } from "../data/team";
import aboutImage from "../assets/images/about-studio.jpg";

import "../styles/about.css";

function AboutPage() {
  return (
    <div className="about-page">
      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-container">
          <span className="about-label">ABOUT US</span>

          <h1>
            WE CREATE
            <br />
            NEW WORLDS.
          </h1>

          <p>
            We are an independent game studio focused on creating memorable
            worlds, characters and experiences for players around the world.
          </p>
        </div>
      </section>

      {/* IMAGE */}

      <section className="about-image">
        <img src={aboutImage} alt="Game development studio" />
      </section>

      {/* INTRO */}

      <section className="about-intro">
        <div className="about-intro-container">
          <div className="about-intro-heading">
            <span>OUR STORY</span>

            <h2>
              GAMES ARE
              <br />
              OUR PASSION.
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              Our studio brings together developers, artists, designers and
              creators with one shared goal: building unforgettable interactive
              experiences.
            </p>

            <p>
              From competitive games to immersive adventures, we believe every
              project should have its own identity and something meaningful to
              offer players.
            </p>
          </div>
        </div>
      </section>

      {/* NUMBERS */}

      <section className="about-stats">
        <div className="about-stats-container">
          <div className="about-stat">
            <strong>10+</strong>
            <span>YEARS CREATING</span>
          </div>

          <div className="about-stat">
            <strong>25+</strong>
            <span>GAMES RELEASED</span>
          </div>

          <div className="about-stat">
            <strong>50+</strong>
            <span>TEAM MEMBERS</span>
          </div>

          <div className="about-stat">
            <strong>15M+</strong>
            <span>PLAYERS</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="about-philosophy">
        <div className="about-philosophy-container">
          <div className="about-philosophy-top">
            <span>02 / OUR PHILOSOPHY</span>

            <p>
              Every game starts with an idea. We turn those ideas into worlds
              worth exploring.
            </p>
          </div>

          <div className="about-philosophy-message">
            <h2>
              WE DON'T JUST
              <br />
              MAKE GAMES.
            </h2>

            <h2 className="philosophy-outline">
              WE BUILD WORLDS
              <br />
              PEOPLE REMEMBER.
            </h2>
          </div>
        </div>
      </section>

      {/* TEAM */}

      <section className="about-team">
        <div className="about-team-container">
          <div className="about-team-header">
            <div>
              <span className="about-team-label">03 / OUR TEAM</span>

              <h2>
                THE PEOPLE
                <br />
                BEHIND THE GAMES.
              </h2>
            </div>

            <p>
              Meet the creators, developers and artists bringing our worlds to
              life.
            </p>
          </div>

          <div className="about-team-grid">
            {team.map((member, index) => (
              <TeamMember key={member.id} member={member} number={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="about-values">
        <div className="about-values-container">
          <div className="about-values-header">
            <span>04 / OUR VALUES</span>

            <h2>
              WHAT
              <br />
              DRIVES US.
            </h2>
          </div>

          <div className="about-values-list">
            <article className="about-value">
              <span className="about-value-number">01</span>

              <h3>CREATIVITY</h3>

              <p>
                We explore new ideas and create experiences with their own
                identity.
              </p>

              <span className="about-value-arrow">↗</span>
            </article>

            <article className="about-value">
              <span className="about-value-number">02</span>

              <h3>QUALITY</h3>

              <p>
                Every detail matters, from gameplay and art to sound and
                presentation.
              </p>

              <span className="about-value-arrow">↗</span>
            </article>

            <article className="about-value">
              <span className="about-value-number">03</span>

              <h3>COMMUNITY</h3>

              <p>
                Players are at the center of everything we create and everything
                we improve.
              </p>

              <span className="about-value-arrow">↗</span>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-games">
        <div className="about-games-container">
          <span>DISCOVER OUR WORK</span>

          <h2>
            EXPLORE
            <br />
            OUR GAMES.
          </h2>

          <Link to="/games" className="about-games-button">
            VIEW ALL GAMES
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
