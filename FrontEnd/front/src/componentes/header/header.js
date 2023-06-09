
import React from 'react';
import "./Header.css"
import logorevestir from '../imagens/logorevestir.png';
import usericon from "../imagens/usericon.png";



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
                  <a href="/" className="linkpp">Home</a>
            </li>
            <li>
                  <a href="/produtos" className="linkpp" >Products</a>
            </li>
            <li>
                  <a href="/About" className="linkpp">About</a>
            </li>
            <li>
                  <a href="/Closet" className="linkpp">
              <img className="usericon"
              src={usericon}
              alt="usericon"
              />
            </a>
          </li>
          </ul>
        </nav>
      </header>
    </div>

   


   
    </>
  
 )}
    export default Header