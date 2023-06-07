import React from 'react';
import './Rodape.css'
import instagramlogo from '../imagens/instagramlogo.png'
import facebooklogo from '../imagens/facebooklogo.png'
import whatsapplogo from '../imagens/whatsapplogo.png'



function Footer() {
    return (


           
        <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-2">
            
              <p>
                Descubra a nossa página dedicada à moda sustentável, onde você
                encontrará dicas de estilo consciente, marcas ecológicas e
                iniciativas inovadoras. Junte-se a nós nessa jornada rumo a um
                futuro fashion mais responsável e ético. Seja uma referência de
                segurança e consciência ambiental!
              </p>
            </div>

            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
              <img src={instagramlogo} alt="camisola" height="40" />

              <img src={facebooklogo} alt="camisola" height="40" />

              <img src={whatsapplogo} alt="camisola" height="40" />
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">
            Copyright 2023 - ReVestir
          </p>
        </div>
      
</div>



)
}



export default Footer;

