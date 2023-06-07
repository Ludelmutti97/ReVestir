import React, { useState } from "react";
import hoodie from '../imagens/hoodie.png';
import camiseta from '../imagens/camiseta.png';
import "../sidebar/sidebar.css"

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [hoodie, camiseta, hoodie];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="product-page">
      <div className="carousel">
        <div className="carousel-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div className="carousel-main">
          <img src={images[activeIndex]} alt={`Image ${activeIndex}`} />
        </div>
      </div>
      <div className="product-details">
        <h2>Nome do Produto</h2>
        <p>Cor: Azul</p>
        <p>Tipo de Material: Algodão</p>
        <p>Descrição: Esta é uma descrição do produto.</p>
        <button className="favorite-button">❤️</button>
      </div>
    </div>
  );
};

export default ProductPage;
