import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

const apiURL = "http://localhost:5005/games";

function MyGames() {
  const [games, setGames] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setGames(response.data);
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, []);

  const deleteGame = (id) => {
    axios
      .delete(`${apiURL}/${id}`)
      .then(() => {
        const filteredGames = games.filter((game) => {
          return game.id !== id;
        });
        setGames(filteredGames);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (fetching) return <p>Loading...</p>;

  return (
    <div>
      <h2>My Games</h2>

      {games.map((game) => {
        return (
          <GameCard
            key={game.id}
            game={game}
            showDeleteButton={true}
            showEditButton={true}
            onDelete={deleteGame}
          />
        );
      })}
    </div>
  );
}

export default MyGames;
