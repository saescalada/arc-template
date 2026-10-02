import { Link } from "react-router-dom";
import { useState } from "react";
import "./GamesSection.css";
import { featuredGames } from "../../data/games";

function GamesSection() {
  const [selectedGame, setSelectedGame] = useState(0);

  const game = featuredGames[selectedGame];

  return (
    <section className="games-section" id="featured">
      <div className="games-container">
        <div className="games-header">
          <div>
            <span className="section-number">01</span>

            <h2>
              FEATURED
              <br />
              GAMES
            </h2>
          </div>

          <Link to={`/games/${game.slug}`} className="games-showcase-button">
            VIEW GAME
            <span>→</span>
          </Link>
        </div>

        <div className="games-showcase">
          <div className="games-showcase-image">
            <img src={game.cardImage} alt={game.title} key={game.id} />

            <span className="games-image-number">
              {String(selectedGame + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="games-showcase-content">
            <div className="games-counter">
              <strong>{String(selectedGame + 1).padStart(2, "0")}</strong>

              <span />

              <small>{String(featuredGames.length).padStart(2, "0")}</small>
            </div>

            <span className="games-category">{game.category}</span>

            <h3>{game.title}</h3>

            <p>{game.description}</p>

            <Link to={`/games/${game.slug}`} className="games-showcase-button">
              VIEW GAME
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="games-selector">
          {featuredGames.map((item, index) => (
            <button
              key={item.id}
              className={
                selectedGame === index
                  ? "games-selector-item active"
                  : "games-selector-item"
              }
              onClick={() => setSelectedGame(index)}
              aria-pressed={selectedGame === index}
            >
              <span className="games-selector-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="games-selector-title">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesSection;
