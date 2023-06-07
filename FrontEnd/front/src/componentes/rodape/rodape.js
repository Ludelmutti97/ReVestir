import React from 'react';
import './Rodape.css'
import instagramlogo from '../imagens/instagramlogo.png'
import facebooklogo from '../imagens/facebooklogo.png'
import whatsapplogo from '../imagens/whatsapplogo.png'



function Footer() {
    return (

        <div className="footer">
            <div className='Revestirfooter'><h1>We are ReVestir</h1>
                <p>Quem somos nós</p>
                <p>Trabalha connosco</p>

            </div>
           
            <div className='logos'>
                <h3>Redes Sociais:</h3>

                <img src={instagramlogo} alt="camisola" height="40" />

                <img src={facebooklogo} alt="camisola" height="40" />

                <img src={whatsapplogo} alt="camisola" height="40" />

            </div>

        </div>



    )
}



export default Footer;

