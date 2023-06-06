import { useState } from "react";
import React from "react";
import "./luana.css";
//import {Link} from 'react-router-dom';

export function Luana() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch("/api/favorite/:id");
      if (response.ok) {
        const data = await response.json();
        setIsFavorite(true);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="favorite-button-wrapper">
      <button onClick={handleClick} className="favorite-button">
        {isFavorite ? "Favorited" : "❤️"}
      </button>
      <AddToOutfitButton />
      <SearchBar />
    </div>
  );
}

export function AddToOutfitButton(productId) {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch(`/api/outfit/${productId}`, {
        method: "POST",
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message); // Armazena a mensagem do backend no estado
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClick} className="outFit">
        Add to Outfit
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchTerm);
    try {
      const response = await fetch(`/api/products/search?q=${searchTerm}`, {
        method: "GET",
      });
      console.log(response.json());
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        //   } else {
        //     throw new Error("SearchBox not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="button">
        Search{" "}
      </button>
    </form>
  );
};
