import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function GameDetails() {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${id}`, {
        params: { key: API_KEY },
      })
      .then((response) => {
        setGame(response.data);
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, [id]);

  if (fetching) {
    return <p>Loading...</p>;
  }

return (
  <div className="game-details">

    <div className="details-title">
      <h2>{game.name}</h2>
    </div>

    <img
      className="details-image"
      src={game.background_image}
      alt={game.name}
    />

    <div className="details-meta">
      <div>
        <p>Rating</p>
        <p>{game.rating}</p>
      </div>

      <div>
        <p>Released</p>
        <p>{game.released}</p>
      </div>
    </div>

    <div className="details-section">
      <h3>Description</h3>
      <p>{game.description_raw}</p>
    </div>

  </div>
);
}

export default GameDetails;
