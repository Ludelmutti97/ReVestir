import React from 'react';
import './SingleProduto2.css';
import logorevestir from '../imagens/logorevestir.png';
import instagramlogo from '../imagens/instagramlogo.png'
import facebooklogo from '../imagens/facebooklogo.png'
import whatsapplogo from '../imagens/whatsapplogo.png'


function SingleProductTwo() {
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

      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Chinos_Khaki_1_86f4f403-4fea-4e0e-b7a3-dfc806e268a7.webp?v=1685549222&width=990"
              alt=""
              width="100%"
              id="ProductImg"
            />


                
            <div className="small-img-row">
                
                
              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Chinos_Khaki_1_86f4f403-4fea-4e0e-b7a3-dfc806e268a7.webp?v=1685549222&width=990"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>

              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/ISTO.Chinos_LIghtKhaki_07_0e4e76eb-26ce-4938-a808-3f80e7195f2c.jpg?v=1685549222&width=990"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/ISTO.Chinos_LIghtKhaki_08_b26abe76-8f19-4205-ab07-16742a5b572e.jpg?v=1685549222&width=990"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Chinos_Khaki_4_014e9a29-0055-46c4-bb15-bd7322c5913c.webp?v=1685549222&width=990"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>



              
            </div>
          </div>
          <div className="col-2">
            <p>Home / Pants</p>
            <h1>Calça</h1>

            <h2>Color:</h2>
            <p>Bege</p>
            <br />
            <h2>Material:</h2> <p>100% Algodão Orgânico </p>
            <br />
            <h3>
              Product Details <i className="fa fa-ident"></i>
            </h3>
            <p>
              340 gramas por metro quadrado de algodão orgânico cuidadosamente obtido. Nem muito rígido, nem muito solto.
              Ajuste cônico com perfeição. Feito para durar mais do que sua calça cáqui média.
            </p>
            <br />
            <button type="button" width="125">
              ❤️
            </button>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>Related Product</h2>
          <p>View More</p>
        </div>
      </div>

      <div className="small-container">
        <div className="row">
          <div className="col-4">
            <img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Corduroy_Shorts_Off_White_1_6f1e7399-2fe9-4311-bd61-12e4f7f40a38.webp?v=1684840066&width=493" alt="" />
            <h4>Calção de Calçadeira</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Everyday_Denim_Blue_1.jpg?v=1668613349&width=493" alt="" />
            <h4>Jeans</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Linen_Shorts_Navy_1.webp?v=1680786091&width=990" alt="" />
            <h4>Calção de Linho</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/CorduroyTrousers-WashedGrey_1e5e9ae0-c825-44e5-8556-5ea1ae42829b_2048x2048-min.png?v=1649874045&width=493" alt="" />
            <h4>Calça de Veludo</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="container">
            <div class="row">
               
                <div class="footer-col-2">
                    
                    <p> Descubra a nossa página dedicada à moda sustentável, onde você
                encontrará dicas de estilo consciente, marcas ecológicas e
                iniciativas inovadoras. Junte-se a nós nessa jornada rumo a um
                futuro fashion mais responsável e ético. Seja uma referência de
                segurança e consciência ambiental!</p>
                </div>
              
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                    <img src={instagramlogo} alt="camisola" height="40" />

                    <img src={facebooklogo} alt="camisola" height="40" />

                    <img src={whatsapplogo} alt="camisola" height="40" />
                        
                    </ul>
                </div>
            </div>
            <hr/>
            <p class="copyright">Copyright 2021 - ReVestir</p>
        </div>
    </div>

    </>
  );
}

export default SingleProductTwo;
