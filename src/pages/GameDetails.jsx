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
  <div>
    <div>
      <h2>{game.name}</h2>
      <img src={game.background_image} alt={game.name} width="400" />
    </div>
    <div>
      <h3>Rating:</h3>
      <p>{game.rating}</p>
    </div>
    <div>
      <h3>Released:</h3>
      <p>{game.released}</p>
    </div>

    <div>
      <h3>Description</h3>
      <p>{game.description_raw}</p>
    </div>
  </div>
);
}

export default GameDetails;
