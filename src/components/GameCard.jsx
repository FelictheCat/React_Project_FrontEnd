import { Link } from "react-router-dom";

function GameCard({
  game,
  showAddBtn,
  onAdd,
  showDeleteBtn,
  onDelete,
  showEditBtn,
}) {
  return (
    <div className="game-card">
      <div className="game-title-row">
        {game.status && (
          <span className={`status-circle ${game.status.toLowerCase()}`}></span>
        )}
        <Link to={`/games/${game.rawgId || game.id}`}>
          <h3 className="game-title">{game.name || game.title}</h3>
        </Link>
      </div>

      {game.background_image || game.image ? (
        <img
          className="game-image"
          src={game.background_image || game.image}
          alt={game.name || game.title}
          width="200"
        />
      ) : null}

      <div className="game-meta">
        <p>Rating: {game.rating}</p>
        {game.released && <p>Released: {game.released}</p>}
      </div>

      {game.notes && game.notes.length > 0 && (
        <div className="game-notes">
          <h4>Notes:</h4>
          <ul>
            {game.notes.map((note, index) => {
              return <li key={index}>{note}</li>;
            })}
          </ul>
        </div>
      )}

      {game.status === "Wishlist" && game.stores && game.stores.length > 0 && (
        <div className="store-links">
          <h4>Available At:</h4>

          {game.stores.map((item) => {
            const name = item.store.name;
            const slug = game.title || game.name;

            let url = "";

            if (name === "Steam") {
              url = `https://store.steampowered.com/search/?term=${slug}`;
            }

            if (name === "PlayStation Store") {
              url = `https://store.playstation.com/search/${slug}`;
            }

            if (name === "Xbox Store") {
              url = `https://www.xbox.com/en-us/search?q=${slug}`;
            }

            if (name === "GOG") {
              url = `https://www.gog.com/en/games?search=${slug}`;
            }

            if (!url) return null;

            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            );
          })}
        </div>
      )}

      <div className="game-buttons">
        {showAddBtn && <button onClick={() => onAdd(game)}>Add</button>}
        {showDeleteBtn && (
          <button onClick={() => onDelete(game.id)}>Delete</button>
        )}
        {showEditBtn && (
          <Link to={`/edit/${game.id}`}>
            <button>Edit</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default GameCard;
