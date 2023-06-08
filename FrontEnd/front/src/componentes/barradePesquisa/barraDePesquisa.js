
import "./barraDePesquisa.css"
import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/products/search?q=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        onSearch(data.produtos);
      } else {
        throw new Error('SearchBox not found');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleChange}
        className="input"/>
      <button type="submit" className="button">Search </button>
    </form>
  );
};

export default SearchBar;