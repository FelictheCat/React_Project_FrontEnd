import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const apiURL = import.meta.env.VITE_SERVER_URL;


function HomePage() {

  const [games, setGames] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {

    axios.get("https://api.rawg.io/api/games", {
      params: {
        key: API_KEY,
        ordering: "-rating",
        page_size: 8
      }
    })
    .then((response) => {
      setGames(response.data.results);
      setFetching(false);
    })
    .catch((error) => {
      console.log(error);
      setFetching(false);
    });

  }, []);

  const addToList = (game) => {

    const newGame = {
      rawgId: game.id,
      title: game.name,
      image: game.background_image,
      status: "Wishlist",
      rating: game.rating,

    };

    axios.post(apiURL, newGame)
      .then(() => {
        console.log("Added!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (fetching) return <p>Loading...</p>;

  return (
    <div>
      <h2>Top Games</h2>

      {games.map((game) => {
        return (
          <GameCard
            key={game.id}
            game={game}
            showAddButton={true}
            onAdd={addToList}
          />
        );
      })}

    </div>
  );
}

export default HomePage;