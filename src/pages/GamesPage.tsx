import GameCard from "../components/GameCard/GameCard";
import { featuredGames } from "../data/games";

function GamesPage() {
  return (
    <section className="page games-page">
      <div className="page-container">
        <div className="page-heading">
          <span>OUR COLLECTION</span>
          <h1>GAMES</h1>
        </div>

        <div className="games-page-grid">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesPage;
