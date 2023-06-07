import { useState } from "react";
import React from "react";
import "./luana.css";
//import {Link} from 'react-router-dom';

export function Luana() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = async () => {
    try {
      console.log("FETCHING");
      const response = await fetch("/api/favorite/647da6d2ff948d77053693f8", {
        method: "POST",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsFavorite(true);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="favorite-button-wrapper">
     { <button onClick={handleClick} className="favorite-button">
        {isFavorite ? "Favorited" : "❤️"}
      </button>}

      <div className="formata">
        <AddToOutfitButton productId="647da6d2ff948d77053693f8" />
        <RemoveToOutfitButton productId="647da6d2ff948d77053693f8" />
        <SearchBar />
        <FetchAllProductsButton />
        <Sidebar />

      </div>
    </div>
  );
}

export function AddToOutfitButton(productId) {
  const [message, setMessage] = useState("");
  console.log(productId.productId);
  const handleClick = async () => {
    try {
      const response = await fetch(`/api/outfit/${productId.productId}`, {
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


export function RemoveToOutfitButton(productId) {
    const [message, setMessage] = useState("");
    
    const handleClick = async () => {
      try {
        const response = await fetch(`/api/outfit/${productId.productId}`, {
          method: "DELETE",
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
          Remove Outfit
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
     
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data

        
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

export const FetchAllProductsButton = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch All Products</button>
      {errorMessage && <p>{errorMessage}</p>}
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export const Sidebar = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Endpoints
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `/api/products/category/${selectedCategory}`, {
            method: "GET",
          })
      ;
      if (response.ok) {
        const data = await response.json();
        console.log("Category:", data.category);
      }

      // Endpoint para filtro de cor
      const colorResponse = await fetch(`/api/products/color/${selectedColor}`, {
        method: "GET",
      });
      if (colorResponse.ok) {
        const colorData = await colorResponse.json();
        console.log("Color:", colorData.color);
      }
      // Endpoint para filtro de sexo
      const sexResponse = await fetch(`/api/products/genders/${selectedSex}`, {
        method: "GET",
      });
      if (sexResponse.ok) {
        const sexData = await sexResponse.json();
        console.log("Sex:", sexData.color);
      }

      // Endpoint para filtro de material
      const materialResponse = await fetch(
        `/api/products/material/${selectedMaterial}`, {
            method: "GET",
          });
      if (materialResponse.ok) {
        const materialData = await materialResponse.json();
        console.log("Material:", materialData.material);
      }

      // Endpoint para filtro de rating(melhores produtos)
      const ratingResponse = await fetch(
        `/api/products/material/${selectedRating}`, {
            method: "GET",
          })
      ;
      if (ratingResponse.ok) {
        const ratingData = await ratingResponse.json();
        console.log("Material:", ratingData.rating);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <div className="filter">
          <label htmlFor="material">Material:</label>
          <select
            id="material"
            value={selectedMaterial}
            onChange={handleMaterialChange}
          >
            <option value="">All</option>
            <option value="cotton">Algodão</option>
            <option value="wool">Lã</option>
            <option value="polyester">100% Algodão Orgânico</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="color">Cor:</label>
          <select id="color" value={selectedColor} onChange={handleColorChange}>
            <option value="">All</option>
            <option value="red">Vermelho</option>
            <option value="blue">Bege</option>
            <option value="green">Marrom</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="sex">Sexo:</label>
          <select id="sex" value={selectedSex} onChange={handleSexChange}>
            <option value="">All</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="unissex">Unissex</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="coat">Casaco</option>
            <option value="shoes">Sapato</option>
            <option value="dress">Vestido</option>
            <option value="hat">Bone</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="category">Melhores Products:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleRatingChange}
          >
            <option value="">All</option>
          </select>
        </div>
        <button onClick={handleSubmit} type="submit">
          Apply Filters
        </button>
      </form>
    </div>
  );
};
