import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const apiURL = import.meta.env.VITE_SERVER_URL;

function HomePage() {
  const [topGames, setTopGames] = useState([]);
  const [featuredGames, setFeaturedGames] = useState([]);
  const [myGames, setMyGames] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games", {
        params: {
          key: API_KEY,
          ordering: "-rating",
          page_size: 10,
        },
      })
      .then((response) => {
        setTopGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    const randomPage = Math.floor(Math.random() * 50) + 1;
    axios
      .get("https://api.rawg.io/api/games", {
        params: {
          key: API_KEY,
          page_size: 10,
          page: randomPage,
        },
      })
      .then((response) => {
        setFeaturedGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(apiURL)
      .then((response) => {
        setMyGames(response.data);
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
      stores: game.stores || []
    };

    axios
      .post(apiURL, newGame)
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
    <div className="section-wrapper">
    <h2>Top Games</h2>
    <div className="carousel-grid">
      {topGames.map((game) => {
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

    <div className="section-wrapper">
    <h2>Featured Games</h2>
    <div className="carousel-grid">
      {featuredGames.map((game) => {
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

    <div className="section-wrapper">
    {myGames.length > 0 && (
      <>
        <h2>My Games</h2>
        <div className="carousel-grid">
          {myGames.map((game) => {
            return (
              <GameCard
                key={game.id}
                game={game}
              />
            );
          })}
        </div>
      </>
    )}
  </div>
  </div>
);
}

export default HomePage;
