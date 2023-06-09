import React from 'react';
import './About.css'
import logorevestir from '../imagens/logorevestir.png';
import instagramlogo from '../imagens/instagramlogo.png'
import facebooklogo from '../imagens/facebooklogo.png'
import whatsapplogo from '../imagens/whatsapplogo.png'


function About() {
  return (
    <div>
      <div class="About">
        <div className="container">
          <header className="navbar">
            <div className="logo">
              <img src={logorevestir} alt="ReVestir" height="200" width="200" />


            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="/" className="linkpp" >Home</a>
                </li>
                <li>
                  <a href="/produtos" className="linkpp">Products</a>
                </li>

              </ul>
            </nav>
          </header>
        </div>


        <div className='textoPrincipal'>
          <p>
            Bem-vindo à ReVestir, sua loja online de moda sustentável! Estamos comprometidos em oferecer roupas e acessórios estilosos, elegantes e, acima de tudo, sustentáveis. Acreditamos que a moda pode ser bonita e consciente ao mesmo tempo, e é por isso que estamos aqui para ajudá-lo a encontrar peças incríveis que também respeitam o meio ambiente.<br>
            </br>
            Na ReVestir, nos esforçamos para ser uma referência em moda sustentável. Nossa missão é proporcionar aos nossos clientes uma experiência de compra gratificante, onde eles possam encontrar produtos que se alinhem com seus valores ecológicos, sem comprometer seu estilo pessoal.
          </p>
          <br></br>
        </div>

      </div>
      </div>





      )
}



      export default About;

