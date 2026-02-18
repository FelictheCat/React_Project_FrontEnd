import { useEffect, useState } from "react";
import { getGames } from "../services/gameService"

function MyGames() {
  const [games, setGames] = useState([])

useEffect(() => {
  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  fetchGames();
}, []);


  return (
    <div>
      <h1>My Games</h1>
      {games.map((game) => (
        <div key={game.id}>
          <p>{game.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MyGames;
