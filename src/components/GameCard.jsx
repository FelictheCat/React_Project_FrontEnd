import { Link } from "react-router-dom";

function GameCard({ game, showAddBtn, onAdd, showDeleteBtn, onDelete }) {

  return (
    <div className="game-card">

      <Link to={`/games/${game.id}`}>
        <h3>{game.name || game.title}</h3>
      </Link>

      {game.background_image || game.image ? (
        <img
          src={game.background_image || game.image}
          alt={game.name || game.title}
          width="200"
        />
      ) : null}

      <p>Rating: {game.rating}</p>

      {showAddBtn && (
        <button onClick={() => onAdd(game)}>
          Add to My List
        </button>
      )}
      {showDeleteBtn && (
        <button onClick={() => onDelete(game.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default GameCard;



