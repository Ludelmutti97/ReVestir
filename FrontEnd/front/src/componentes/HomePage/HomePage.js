import React from 'react';
import './HomePage.css';
import camiseta from '../imagens/camiseta.png';
import calcas from '../imagens/calcas.png';
import logorevestir from '../imagens/logorevestir.png';
import sapatilhas from '../imagens/sapatilhas.png';
import scrolldown from '../imagens/scrolldown.png';
import usericon from '../imagens/usericon.png';
import hoodie from '../imagens/hoodie.png';
import Footer from '../rodape/Rodape';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <div className="div2">
        <header className="App-header">
          <img src={logorevestir} alt="logo" height="200" width="200"  />
          <Link to="/closet">
           <img className="usericon" src={usericon} alt="usericon" height="50" />
          </Link>
            <Link to="/produtos">
           <p className="prods">Produtos</p>
            </Link>
        </header>
        <div className="div1">
          <img src={camiseta} alt="camisola" height="250" />
          <img src={hoodie} alt="hoodie" height="400" />
          <img src={calcas} alt="calcas" height="300" />
          <img src={sapatilhas} alt="sapatilhas" height="130" />
        </div>
      </div>
      <div className="div3">
        <div className="bodyindex">

        </div>
        <div className="scrolldown">
          <img src={scrolldown} alt="scrolldown" height="75" />
        </div>

        <div>
        <Footer/>
        </div>


      </div>

      


    </div>
  );
}

export default HomePage;
