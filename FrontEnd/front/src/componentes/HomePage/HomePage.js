import React from 'react';
import './HomePage.css';

import camiseta from '../imagens/camiseta.png';
import calcas from '../imagens/calcas.png';
import logorevestir from '../imagens/logorevestir.png';
import instagramlogo from '../imagens/instagramlogo.png'
import facebooklogo from '../imagens/facebooklogo.png'
import whatsapplogo from '../imagens/whatsapplogo.png'
import sapatilhas from '../imagens/sapatilhas.png';
import scrolldown from '../imagens/scrolldown.png';
import usericon from '../imagens/usericon.png';
import hoodie from '../imagens/hoodie.png';

function HomePage() {
  return (
    <div className="App">
      <div></div>
      <div className="div2">
        <header className="App-header">
          <img src={logorevestir} alt="logo" height="200" width="200"  />
           <img className="usericon" src={usericon} alt="usericon" height="50" />
           <p className="prods">Produtos</p>
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
        <div className="footer">
          <img src={instagramlogo} alt="camisola" height="50" />
          <img src={facebooklogo} alt="camisola" height="50" />
          <img src={whatsapplogo} alt="camisola" height="50" />
        </div>
        <div>


          
        </div>


      </div>
    </div>
  );
}

export default HomePage;
