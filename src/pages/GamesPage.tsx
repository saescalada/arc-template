import { Link } from "react-router-dom";
import { featuredGames } from "../data/games";
import "../styles/games.css";

function GamesPage() {
  return (
    <div className="games-catalog">
      <div className="games-catalog-container">
        <header className="games-catalog-heading">
          <span className="games-catalog-label">OUR GAMES / AONE GAMES</span>
          <h1>Worlds worth<br /><span>stepping into.</span></h1>
          <p>Original games with their own identity. Explore the worlds we create, starting with the dark arena of Omen of Sorrow.</p>
        </header>

        <section className="games-catalog-list" aria-label="Our released games">
          {featuredGames.map((game) => (
            <article className="games-feature" key={game.id} aria-labelledby={`game-${game.slug}`}>
              <Link to={`/games/${game.slug}`} className="games-feature-art" aria-label={`Explore ${game.title}`}>
                <img src={game.image} alt="The monsters and fighters of Omen of Sorrow beneath a full moon" width="1920" height="1080" fetchPriority="high" />
                <span className="games-feature-status">{game.category}</span>
                <span className="games-feature-image-link" aria-hidden="true">ENTER THE WORLD <span>↗</span></span>
              </Link>
              <div className="games-feature-content">
                <span className="games-catalog-label">AN ORIGINAL AONE GAMES TITLE</span>
                <h2 id={`game-${game.slug}`}>{game.title}</h2>
                <p>{game.description}</p>
                <dl className="games-feature-facts">
                  <div><dt>GENRE</dt><dd>{game.genre}</dd></div>
                  <div><dt>PLATFORMS</dt><dd><ul>{game.platforms.map((platform) => <li key={platform}>{platform}</li>)}</ul></dd></div>
                </dl>
                <div className="games-feature-actions">
                  <Link className="games-catalog-button" to={`/games/${game.slug}`}>EXPLORE THE GAME <span aria-hidden="true">→</span></Link>
                  <a className="games-catalog-link" href="https://omen.aonegames.com/">OFFICIAL WEBSITE <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="games-catalog-contact" aria-labelledby="games-contact-title">
          <div><span className="games-catalog-label">BEYOND OUR OWN GAMES</span><h2 id="games-contact-title">Let's build your next project.</h2><p>We also work with studios on game development, art and animation.</p></div>
          <Link className="games-catalog-link" to="/contact">WORK WITH AONE GAMES <span aria-hidden="true">↗</span></Link>
        </aside>
      </div>
    </div>
  );
}

export default GamesPage;

