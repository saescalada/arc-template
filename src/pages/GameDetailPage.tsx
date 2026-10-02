import { Link, useParams } from "react-router-dom";
import "../styles/game-detail.css";
import { featuredGames } from "../data/games";

function GameDetailPage() {
  const { slug } = useParams();

  const game = featuredGames.find((item) => item.slug === slug);

  if (!game) {
    return (
      <section className="game-not-found">
        <h1>GAME NOT FOUND</h1>

        <Link to="/games">← BACK TO GAMES</Link>
      </section>
    );
  }

  return (
    <article className="game-detail">
      <section
        className="game-detail-hero"
        style={{
          backgroundImage: `url(${game.image})`,
        }}
      >
        <div className="game-detail-overlay" />

        <div className="game-detail-content">
          <span className="game-detail-category">{game.category}</span>

          <h1>{game.title}</h1>

          <p>{game.description}</p>
        </div>
      </section>

      <section className="game-information">
        <div className="game-information-container">
          <div className="game-description">
            <span className="game-section-label">ABOUT THE GAME</span>

            <h2>
              ENTER THE
              <br />
              WORLD
            </h2>

            <p>{game.description}</p>
          </div>

          <div className="game-specifications">
            <div className="game-spec">
              <span>GENRE</span>
              <strong>{game.genre}</strong>
            </div>

            <div className="game-spec">
              <span>RELEASE</span>
              <strong>{game.releaseDate}</strong>
            </div>

            <div className="game-spec">
              <span>PLATFORMS</span>

              <strong>{game.platforms.join(" / ")}</strong>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default GameDetailPage;
