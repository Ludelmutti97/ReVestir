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
import SearchBar from "../barradePesquisa/barraDePesquisa";
import Carrousel from "../Carrousel/CarroselHome";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Footer from "../rodape/rodape";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  gap: "25px",
  width: "90vw",
  height: " 90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const tshirtsArray = [
  {
    key: uuidv4(),
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/tshirt1.png"
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
    content: (
      <img
        className="caixaCorrousel"
        src="imagens/RoupaDoSite/hoodie1.png"
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
        src="imagens/RoupaDoSite/hoodie2.png"
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
        src="imagens/RoupaDoSite/hoodie3.png"
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
        src="imagens/RoupaDoSite/hoodie4.png"
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
        src="imagens/RoupaDoSite/hoodie5.png"
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
        src="imagens/RoupaDoSite/hoodie6.png"
        alt="6"
        width={600}
        height={600}
      />
    ),
  },
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleSearch = (searchTerm) => {
    // Fazer a chamada ao backend
    setOpen(true);
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
          <div>
            {searchResults.length > 0 ? (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal"
                sx={style}
              >
                <Box>
                  <ul className="lista-products">
                      {searchResults.map((p, index) => {
                        return (
                          <div className="modal-products">
                            <a href={`/produtos/${p._id}`}>
                              <img src={p.imagem} alt="" />
                            </a>
                            <h4 className="h">{p.nome}</h4>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                        );
                      })}
                  </ul>
                </Box>
              </Modal>
            ) : (
              <p></p>
            )}
          </div>
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
                  <img className="usericon" src={usericon} alt="usericon" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="div1">
        <img src={camiseta} alt="camisola" height="200" />
        <img src={calcas} alt="calcas" height="225" />
        <img src={hoodie} alt="hoodie" height="250" />
        <img src={sapatilhas} alt="sapatilhas" height="200" />
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
        <div className="caixaHomePage">
          <h1 className="Titulos">Camisolas</h1>
          <Carrousel items={camisolasArray} />
        </div>
        <div className="caixaHomePage" style={{ backgroundColor: "white" }}>
          <h1 className="Titulos" style={{ backgroundColor: "white" }}>
            Calças
          </h1>
          <Carrousel items={calcassArray} />
        </div>

        <div className="caixaHomePage">
          <h1 className="Titulos">Sapatilhas</h1>
        </div>
        <div className="caixaHomePage">
          <h1 className="Titulos">Sapatilhas</h1>
          <Carrousel items={tshirtsArray} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
