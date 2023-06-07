import React from "react";
import "./Closet.css"
import returnicon from "../imagens/returnicon.png"
import closet from "../imagens/closet.png"
import coracaoicon from "../imagens/coracaoicon.png"
import instagramlogo from '../imagens/instagramlogo.png'
import facebooklogo from '../imagens/facebooklogo.png'
import whatsapplogo from '../imagens/whatsapplogo.png'
import { Link } from "react-router-dom";

function Closet() {
    return (
        <div className="header">
            <div className="titulo">
                <Link to="/">
                <img className="returnicon" src={returnicon} alt="usericon" height="65" />
                </Link>
                <img className="closeticon" src={closet} alt="closet" height="70" />
            </div>
            <div>
                <p className="titulobody">Your Favorites<img className="coracaoicon" src={coracaoicon} alt="closet" height="30" /></p>
            </div>
            <div className="pecasfavoritas">

            </div>
            <div className="caixas">
                <div className="outfit1">
                    <span>Adicione aqui a <br></br>sua peça de roupa</span>
                </div>
                <div className="outfit2">

                </div>
                <div className="outfit3">

                </div>
            </div>
            <div className="icons">
                <img src={instagramlogo} alt="camisola" height="30" />
                <img src={facebooklogo} alt="camisola" height="30" />
                <img src={whatsapplogo} alt="camisola" height="30" />

            </div>
        </div>

    )
}

export default Closet

