import React from 'react';
import './HomePage.css';
import camiseta from '../imagens/camiseta.png';
import calcas from '../imagens/calcas.png';
import logorevestir from '../imagens/logorevestir.png';
import sapatilhas from '../imagens/sapatilhas.png';
import scrolldown from '../imagens/scrolldown.png';
import usericon from '../imagens/usericon.png';
import hoodie from '../imagens/hoodie.png';
import Footer from '../rodape/rodape';
<<<<<<< HEAD
import SearchBar from '../barradePesquisa/barraDePesquisa'

=======
import SearchBar from '../barradePesquisa/BarraDePesquisa'
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 880b3aff20a831d2f87ffe2da71f0079ea2bd5c6
import Carrousel from '../Carrousel/CarroselHome'
import { Link } from 'react-router-dom';
import vestido from '../imagens/vestido.png';

import tshirt1 from "../imagens/RoupaDoSite/tshirt1.png"
import tshirt2 from "../imagens/RoupaDoSite/tshirt2.png"
import tshirt3 from "../imagens/RoupaDoSite/tshirt3.png"
import tshirt4 from "../imagens/RoupaDoSite/tshirt4.png"
import tshirt5 from "../imagens/RoupaDoSite/tshirt5.png"

const tshirt = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5]
[
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="../imagens/RoupaDoSite/tshirt1.png" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="./imagens/RoupaDoSite/tshirt2.png" alt="8" />,
  }
];


function HomePage() {

  const handleSearch = (searchTerm) => {
    // Aqui você pode fazer alguma lógica de busca com o termo fornecido
    console.log('Buscando por:', searchTerm);
  }
  return (
    <div className="App">
      <div className="div2">
        <header className="header">
          <img src={logorevestir} alt="logo" height="200" width="200" />

          <SearchBar onSearch={handleSearch} />

          <Link to="/produtos">
            <p className="prods">Produtos</p>
          </Link>
          <Link to="/closet">
            <img className="usericon" src={usericon} alt="usericon" height="50" />
          </Link>


        </header>
        <div className="div1">
          <img src={camiseta} alt="camisola" height="200" />
          <img src={calcas} alt="calcas" height="225" />
          <img src={hoodie} alt="hoodie" height="250" />
          <img src={sapatilhas} alt="sapatilhas" height="200" />
          <img src={vestido} alt="vestido" height="300" width={300} />
        </div>
      </div>
      <div className="div3">
        <div className="bodyindex">
        </div>
        <div className="scrolldown">
          <img src={scrolldown} alt="scrolldown" height="75" />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>T-Sthirts</h1>
          <Carrousel items={tshirt} />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Camisolas</h1>
          <Carrousel />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Calças</h1>
          <Carrousel />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Vestidos</h1>
          <Carrousel />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Sapatilhas</h1>
          <Carrousel />
        </div>

        <div>
          <Footer />
        </div>


      </div>




    </div>
  );
}

export default HomePage;
