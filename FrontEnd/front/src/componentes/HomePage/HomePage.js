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
import SearchBar from '../barradePesquisa/barraDePesquisa'
import { v4 as uuidv4 } from 'uuid';
import Carrousel from '../Carrousel/CarroselHome'
import { Link } from 'react-router-dom';
import vestido from '../imagens/vestido.png';


const tshirtsArray = [
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/tshirt1.png" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/tshirt2.png" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/tshirt3.png" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/tshirt4.png" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/tshirt5.png" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/tshirt6.png" alt="6" />
  }
];

const calcassArray = [
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/calcas1.png" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/calcas2.png" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/calcas3.png" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/calcas4.png" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/calcas5.png" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img className="caixaCorrousel" src="imagens/RoupaDoSite/calcas6.png" alt="6" />
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

        </header >

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
          <Carrousel items={tshirtsArray} />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Camisolas</h1>
          <Carrousel items={tshirtsArray} />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Calças</h1>
          <Carrousel items={calcassArray} />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Vestidos</h1>
          <Carrousel items={tshirtsArray} />
        </div>
        <div className='caixaHomePage'>
          <h1 className='Titulos'>Sapatilhas</h1>
          <Carrousel items={tshirtsArray} />
        </div>

        <div>
          <Footer />
        </div>


      </div>




    </div>
  );
}

export default HomePage;
