// import { useState } from "react";

// function EditProductForm(props) {

//   const [title, setTitle] = useState(props.product.title);
//   const [price, setPrice] = useState(props.product.price);
//   const [stock, setStock] = useState(props.product.stock);
//   const [thumbnail, setThumbnail] = useState(props.product.thumbnail);

//   function handleSubmit(event) {
//     event.preventDefault();

//     const updatedProduct = {
//       ...props.product,
//       title: title,
//       price: Number(price),
//       stock: Number(stock),
//       thumbnail: thumbnail
//     };

//     props.updateProduct(updatedProduct);
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       <h2>Edit Product</h2>

//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <input
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />

//       <input
//         value={stock}
//         onChange={(e) => setStock(e.target.value)}
//       />

//       <input
//         value={thumbnail}
//         onChange={(e) => setThumbnail(e.target.value)}
//       />

//       <button>Save</button>

//     </form>
//   );
// }

// export default EditProductForm;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = "http://localhost:5005/games";

function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fetching, setFetching] = useState(true);
  const [game, setGame] = useState(null);

  const [status, setStatus] = useState("");
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Fetch existing game
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

  // Add note
  const handleAddNote = () => {
    if (newNote === "") return;

    setNotes([...notes, newNote]);
    setNewNote("");
  };

  // Delete note
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Submit update
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
