
import React from 'react';
import "./Header.css"
import logorevestir from '../imagens/logorevestir.png';
import Footer from '../Rodape/Rodape';

function Header() {
    return (
      <>
      <div className="container">
      <header className="navbar">
        <div className="logo">
        <img src={logorevestir} alt="ReVestir" height="200" width="200" />
          
          
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/produtos">Products</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>

   


    <div>
        <Footer/>
    </div>
    </>
  
 )}
    export default Header