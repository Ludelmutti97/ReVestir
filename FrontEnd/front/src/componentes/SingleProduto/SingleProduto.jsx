import React, { useEffect, useState } from "react";
import "./SingleProduto.css";
import { Favorite } from "../luana/luana";
import Header  from "../header/header";
import Footer from "../rodape/rodape";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [state, setState] = useState();
  let { id } = useParams();
  useEffect(() => {
    const options = { method: "GET", headers: { Accepts: "application/json" } };

    async function fetchSingle() {
      console.log("Single...");
      const res = await fetch(`/api/products/${id}`, options);
      if (res.status === 200) {
        console.log("Product");
        const body = await res.json();
        console.log(body);

        setState(body);
        //Guardar body no state
      }
    }

    fetchSingle();
  }, []);

  return (
    <>
      
        <Header/>
      


      
       <div className="cart">
          {state != undefined && (
            <div className="col-2">
          
              <h1>{state.nome}</h1>
              <h2>Cor:</h2>
              <p>{state.cor}</p>
              <br />
              <img src={`.${state.imagem}`} className="imagem"/>
              <h2> Material:</h2> <p>{state.material}</p>
              <br />
              <h3>
                Descrição: <i className="fa fa-ident"></i>
              </h3>
              <p className="p">{state.descrição}</p>
              <br />
              <h3>Onde Comprar:</h3>
              <a href={state.onde_comprar} className="link">{new URL(state.onde_comprar).hostname}</a>
              <br />
              <div> {<Favorite id={id} />}</div>
            </div>
          )}
       </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default SingleProduct;
