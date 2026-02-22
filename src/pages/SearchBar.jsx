import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const apiURL = import.meta.env.VITE_SERVER_URL;

function Search() {
  const [fetching, setFetching] = useState(false);
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") return;

    setFetching(true);

    axios
      .get("https://api.rawg.io/api/games", {
        params: {
          key: API_KEY,
          search: query,
          page_size: 50,
        },
      })
      .then((response) => {
        setGames(response.data.results);
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, [query]);

  const addToList = (game) => {
    // new object to send to the backend - means i can add new properties if i want to
    // such as favarites - true/false, notes - empty string or array- want to push li items
    const newGame = {
      rawgId: game.id,
      title: game.name,
      image: game.background_image,
      status: "Wishlist",
      rating: 0,
    };
    axios
      .post(apiURL, newGame)
      .then(() => {
        console.log("Game added!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <div className="page-container">
      <h3>Search Games</h3>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(i) => setQuery(i.target.value)}
      />

      {fetching && <p>Loading...</p>}

      <div className="wrap-grid">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              game={game}
              showAddBtn={true}
              onAdd={addToList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Search;
