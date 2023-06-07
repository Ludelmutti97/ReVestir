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
    // useSate para gaurdar o array dos favorites
    // useEffect para  carregar automaticamnete a pagina
    // useEffect  vai fazer o fecth no useState e fazer o SetstateStatus do resultado do Fetch 

    // mapar o elemento do state e aceder a imagem do produto.

    /*  app.get("/api/favorite", async (req, res) => {
  try {
    const product = await getFavorite();
    // Check if product exists
    if (product) {
      return res.json(product);
    } else {
      return res.status(404).json({ message: "not_found" });
    }
  } catch (err) {
    console.log(err);
  }
}); */



    return (
        <div className="header_closet">
            <div className="titulo_closet">
                <Link to="/">
                <img className="returnicon" src={returnicon} alt="usericon" height="65" />
                </Link>
                <img className="closeticon" src={closet} alt="closet" height="70" />
                
            </div>
            <div className="barra_closet"></div>
            <div>
                <p className="titulobody_closet">Os seus favoritos<img className="coracaoicon" src={coracaoicon} alt="closet" height="30" /></p>
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

