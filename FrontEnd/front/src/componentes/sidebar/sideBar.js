
import React from "react";
import sapatilhas from '../imagens/sapatilhas.png';
import camiseta from '../imagens/camiseta.png';
import calcas from '../imagens/calcas.png';

const ProductPage = () => {
  const images = [
  <div>
    <img src={sapatilhas} alt="sapatilhas" height="130" />,
    
    <img src={camiseta} alt="camisola" height="250" />

    <img src={calcas} alt="calcas" height="300" />
    </div>
  ];

  return (
    <div>
      <h1>Crossbody Pouch</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <p>Product description goes here...</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;



<div tabindex="0" class="gallery-cell product-gallery__thumbnail" data-title="Crossbody Pouch" data-image-id="7336195588167"> <img src="//cdn.shopify.com/s/files/1/0218/2758/products/corkor-vegan-crossbody-pouch-light-brown-vertical-15063972315207_300x.jpg?v=1598448134" alt="Crossbody Pouch"></div>