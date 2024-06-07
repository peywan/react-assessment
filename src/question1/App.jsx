// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

// 1. Kommentarslista 3p
// Hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.


// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.
import React, { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleCommentChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddComment = () => {
    if (input.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text: input,
    };

    setComments([...comments, newComment]);
    setInput("");
  };

  const handleRemoveComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
      <div>
        <h2>Kommentarslista</h2>
        <input
            type="text"
            value={input}
            onChange={handleCommentChange}
            placeholder="Skriv en kommentar"
        />
        <button onClick={handleAddComment}>Lägg till</button>
        <ul>
          {comments.map((comment) => (
              <li key={comment.id}>
                {comment.text}
                <button onClick={() => handleRemoveComment(comment.id)}>Ta bort</button>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default CommentsList;
