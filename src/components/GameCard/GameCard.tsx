import { Link } from "react-router-dom";
import "./GameCard.css";
import type { Game } from "../../types/game";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <Link to={`/games/${game.slug}`} className="game-card">
      <div className="game-card-image">
        <img src={game.cardImage} alt={game.title} />

        <div className="game-card-overlay">
          <span>VIEW GAME</span>
          <span className="game-card-arrow">→</span>
        </div>
      </div>

      <div className="game-card-info">
        <span className="game-card-category">{game.category}</span>

        <h3>{game.title}</h3>
      </div>
    </Link>
  );
}

export default GameCard;
