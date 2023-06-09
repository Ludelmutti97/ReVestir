import React, { useState } from "react";
import "./HomePage.css";
import camiseta from "../imagens/camiseta.png";
import calcas from "../imagens/calcas.png";
import logorevestir from "../imagens/logorevestir.png";
import sapatilhas from "../imagens/sapatilhas.png";
import scrolldown from "../imagens/scrolldown.png";
import usericon from "../imagens/usericon.png";
import hoodie from "../imagens/hoodie.png";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../barradePesquisa/barraDePesquisa"
import Carrousel from '../Carrousel/CarroselHome'

import Footer from "../rodape/rodape"




const tshirtsArray = [
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt1.png"
        alt="7"
        width={600}
        height= {600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt2.png"
        alt="2"
        width="200px"
        height="200px"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt3.png"
        alt="3"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt4.png"
        alt="4"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt5.png"
        alt="5"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt6.png"
        alt="6" 
        width={600}
        height={600}
      />
    ),
  },
];

const camisolasArray = [
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel"
      src="imagens/RoupaDoSite/hoodie1.png"
      alt="7"
      width={600}
      height={600}
       />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel"
      src="imagens/RoupaDoSite/hoodie2.png"
      alt="2"
      width={600}
      height={600}
      />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel"
      src="imagens/RoupaDoSite/hoodie3.png"
      alt="3"
      width={600}
      height={600}
      />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel"
      src="imagens/RoupaDoSite/hoodie4.png"
      alt="4" 
      width={600}
      height={600}
      />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel"
      src="imagens/RoupaDoSite/hoodie5.png"
      alt="5"
      width={600}
      height={600} 
      />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel"
      src="imagens/RoupaDoSite/hoodie6.png"
      alt="6" 
      width={600}
      height={600}
      />
  }
];

const calcassArray = [
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/calcas1.png"
        alt="7"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/calcas2.png"
        alt="2"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/calcas3.png"
        alt="3"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/calcas4.png"
        alt="4"
        width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/calcas5.png"
        alt="5" width={600}
        height={600}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/calcas6.png"
        alt="6"
        width={600}
        height={600}
      />
    ),
  },
];





function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Fazer a chamada ao backend
    fetch(`/api/products/search?q=${searchTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setSearchResults(data.produtos);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="App">
      <div className="div2">
        <header className="header">
          <img src={logorevestir} alt="logo" height="200" width="200" />

          <SearchBar onSearch={handleSearch} />
          <header />
          {/* Exibir os resultados da busca */}
          {searchResults.length > 0 ? (
            <div className="search-results">
              <h2>Resultados da busca:</h2>
              <ul>
                {searchResults.map((product, index) => (
                  <li key={index}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p></p>
          )}

          <nav>
            <ul id="MenuItems">

              <li>
                <a href="/produtos">Products</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Closet">
                  <img className="usericon"
                    src={usericon}
                    alt="usericon"
                  />
                </a>
              </li>
            </ul>
          </nav>

          {  /*<Link to="/produtos">
            <p className="prods">Produtos</p>
          </Link>
          <Link to="/closet">
            <img
              className="usericon"
              src={usericon}
              alt="usericon"
              height="50"
            />
          </Link> */}
        </header>

        <div className="div1">
          <img src={camiseta} alt="camisola" height="200" />
          <img src={calcas} alt="calcas" height="225" />
          <img src={hoodie} alt="hoodie" height="250" />
          <img src={sapatilhas} alt="sapatilhas" height="200" />
        </div>
      </div>
      <div className="div3">
        <div className="bodyindex"></div>
        <div className="scrolldown">
          <img src={scrolldown} alt="scrolldown" height="75" />
        </div>
        <div className="caixaHomePage" style={{ backgroundColor: "white" }}>
          <h1 className="Titulos">T-Sthirts</h1>
          <Carrousel items={tshirtsArray} />
        </div>
        <div className='caixaHomePage' >
          <h1 className='Titulos' >Camisolas</h1>
          <Carrousel backgroundColor={"red"} items={camisolasArray} />
        </div>
        <div className="caixaHomePage" style={{ backgroundColor: "white" }}>
          <h1 className="Titulos" style={{ backgroundColor: "white" }} >Calças</h1>
          <Carrousel items={calcassArray} />
        </div>
        <div className='caixaHomePage'  >
          <h1 className='Titulos'  >Sapatilhas</h1>
          <Carrousel items={tshirtsArray} />
        </div>
        <Footer />

      </div>
    </div>
  );
}

export default HomePage;
