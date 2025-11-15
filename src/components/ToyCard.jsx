import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteToy(toy.id));
  }

  function handleLike() {
    const updatedToy = {
      ...toy,
      likes: toy.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((response) => response.json())
      .then((data) => onUpdateToy(data));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
