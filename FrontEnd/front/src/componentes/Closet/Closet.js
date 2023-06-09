import React, { useEffect, useState } from "react";
import "./Closet.css";
import returnicon from "../imagens/returnicon.png";
import closet from "../imagens/closet.png";
import coracaoicon from "../imagens/coracaoicon.png";

import { Link } from "react-router-dom";
import { RemoveToOutfitButton } from "../luana/luana";
import Footer from "../rodape/rodape";

// useSate para guardar o array dos favorites
// useEffect para  carregar automaticamnete a pagina
// useEffect  vai fazer o fecth no useState e fazer o SetstateStatus do resultado do Fetch

// mapar o elemento do state e aceder a imagem do produto.

function Closet() {
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  useEffect(() => {
    const options = { method: "GET", headers: { Accepts: "application/json" } };

    async function fetchFavoriteProduct() {
      console.log("Fetching...");
      const response = await fetch("/api/favorite", options);
      if (response.ok) {
        console.log("Product");
        const product = await response.json();
        console.log(product);
        setFavoriteProduct(product);
      }
    }

    fetchFavoriteProduct();
  }, []);

  const addToCloset = (id) => {
    const options = { method: "POST" };

    fetch("/api/outfit/" + id, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="header_closet">
      <div className="titulo_closet">
        <Link to="/">
          <img
            className="returnicon"
            src={returnicon}
            alt="usericon"
            height="65"
          />
        </Link>
        <img className="closeticon" src={closet} alt="closet" height="70" />
      </div>
      <div className="barra_closet"></div>
      <div>
        <p className="titulobody_closet">
          Your Favorites 
          <img
            className="coracaoicon"
            src={coracaoicon}
            alt="closet"
            height="30"
          />
        </p>
      </div>

      <div className="todos">
      <div className="pecasfavoritas">
        {favoriteProduct.map((product, index) => {
          console.log(product);
          if (product === null) {
          } else {
            return (
              <div key={index} onDoubleClick={() => addToCloset(product._id)}>
                <img src={product.imagem} alt={product.imagem}  className="img8"/>
                <h2>{product.nome}</h2>
               
              </div>
            );
          }
        })}
      </div>
      <div className="caixas">
        <div className="outfit1">
          <span>Add your outfit here</span>
        </div>
        <div className="outfit2"></div>
        <div className="outfit3"></div>
        <div>{<RemoveToOutfitButton />}</div>
      </div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Closet;
