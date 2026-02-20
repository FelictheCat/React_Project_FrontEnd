import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fetching, setFetching] = useState(true);
  const [game, setGame] = useState(null);

  const [status, setStatus] = useState("");
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    axios
      .get(`${apiURL}/${id}`)
      .then((response) => {
        setGame(response.data);
        setStatus(response.data.status);
        setRating(response.data.rating);
        setNotes(response.data.notes || []);

        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setFetching(false);
      });
  }, [id]);

  const handleAddNote = () => {
    if (newNote === "") return;

    setNotes([...notes, newNote]);
    setNewNote("");
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGame = {
      ...game,
      status: status,
      rating: rating,
      notes: notes,
    };

    axios
      .put(`${apiURL}/${id}`, updatedGame)
      .then(() => {
        navigate("/my-games");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (fetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Game</h2>

      <form onSubmit={handleSubmit}>
        <p>{game.title}</p>

        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Playing">Playing</option>
          <option value="Finished">Finished</option>
          <option value="Wishlist">Wishlist</option>
        </select>

        <br />

        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />

        <br />

        <h3>Notes</h3>

        <ul>
          {notes.map((note, index) => {
            return (
              <li key={index}>
                {note}
                <button type="button" onClick={() => handleDeleteNote(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>

        <input
          type="text"
          placeholder="Add new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        <button type="button" onClick={handleAddNote}>
          Add Note
        </button>

        <br />
        <br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditGame;
