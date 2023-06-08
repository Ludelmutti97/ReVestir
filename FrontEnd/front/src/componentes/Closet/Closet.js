import React, { useEffect, useState } from "react";
import "./Closet.css"
import returnicon from "../imagens/returnicon.png"
import closet from "../imagens/closet.png"
import coracaoicon from "../imagens/coracaoicon.png"

import { Link } from "react-router-dom";
import { RemoveToOutfitButton } from "../luana/luana";
import Footer from "../rodape/rodape";


    // useSate para guardar o array dos favorites
    // useEffect para  carregar automaticamnete a pagina
    // useEffect  vai fazer o fecth no useState e fazer o SetstateStatus do resultado do Fetch 

    // mapar o elemento do state e aceder a imagem do produto.


function Closet  ()  {
  const [favoriteProduct, setFavoriteProduct] = useState([]);
   useEffect(() => {
    
    const options = { method: "GET", headers: { 'Accepts': 'application/json' } }
 
    async function fetchFavoriteProduct() {
    
      console.log("Fetching...");
        const response = await fetch("/api/favorite",options);
        if (response.ok) {
          console.log("Product")
          const product = await response.json();
          console.log("product")
          setFavoriteProduct(product);

        } 
        }
     
    

    fetchFavoriteProduct();
  }, []);




  return (
    <div className="header_closet">
      <div className="titulo_closet">
        <Link to="/">
          <img className="returnicon" src={returnicon} alt="usericon" height="65" />
        </Link>
        <img className="closeticon" src={closet} alt="closet" height="70" />
      </div>
      <div className="barra_closet"></div>
      <div>
        <p className="titulobody_closet">Os seus favoritos<img className="coracaoicon" src={coracaoicon} alt="closet" height="30" /></p>
      </div>
      <div className="pecasfavoritas">
      {favoriteProduct.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="caixas">
        <div className="outfit1">
          <span>Adicione aqui a sua peça de roupa</span>
        </div>
        <div className="outfit2"></div>
        <div className="outfit3"></div>
        <div>
        {<RemoveToOutfitButton/>}
         
      </div>
      </div>
      <div><Footer/></div>
    </div>

    
  )
  
}

export default Closet

