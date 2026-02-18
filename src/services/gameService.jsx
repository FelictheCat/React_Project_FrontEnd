import axios from "axios";

const API_URL = "http://localhost:5005/games";

export const getGames = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("error getting games", error);
    }
}

export const addGame = async (newGame) => {
  try {
    const response = await axios.post(API_URL, newGame);
    return response.data;
  } catch (error) {
    console.log("Error adding game:", error);
  }
};

export const updateGame = async (id, updatedGame) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedGame);
    return response.data;
  } catch (error) {
    console.log("Error updating game:", error);
  }
};

export const deleteGame = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error deleting game:", error);
  }
};



// 2efc56e540ae4aa2a5be21e96393098b
// api key






//  const getData = async() => {
    
//     try {

//       const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}?_embed=tasks`)
//       console.log(response)
//       setProject(response.data)

//     } catch (error) {
//       console.log(error)      
//     }

//   }

// axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, body)
    
//     .then((response) => {
//       // if we get to this line of code, it means that the project was created successfully - Backend
//       navigate("/projects") // navigate to the list of projects
//     })
//     .catch((error) => {
//       console.log(error)
//     })


//  useEffect(() => {

//     fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
//     .then((response) => {
//       return response.json()
//     })
//     .then((response) => {
//       console.log(response)
//       setPokemon(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })

//   }, [params.pokemonName])