import React, { useEffect } from "react";
import "./produtos.css";
import logorevestir from "../imagens/logorevestir.png";
import instagramlogo from "../imagens/instagramlogo.png";
import facebooklogo from "../imagens/facebooklogo.png";
import whatsapplogo from "../imagens/whatsapplogo.png";


function AllProducts() {
  useEffect(() => {
    const options = { method: "GET", headers: { 'Accepts': 'application/json' } };

    async function fetchData() {
      console.log("Fetching...");
      const res = await fetch("api/products", options)
      if (res.status === 200) {
        console.log("Product")
        const body = await res.json();
        console.log(body)
      }
    }

    fetchData()
  }, []);

  return (
    <>

      <div className="produtos_container">
        <header className="navbar">
          <div className="logo">
            <a href="index.html">
              <img src={logorevestir} alt="logo" height="200" width="200" />
            </a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
          </nav>
          <img
            src="assets/_img/menu.png"
            alt=""
            className="menu-icon"
            onClick="menutoggle()"
          />
        </header>
      </div>
      <div className="small-container">
        <div className="row row-2">
          <select>
            <option>Side bar</option>
          </select>
          <h2>All Products</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <a href="/ProductID">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Fleece_Jacket_Beige_1_cc3f53b7-fefe-420b-9f48-76f88f3d181c.webp?v=1666949684&width=990"
                alt=""
              />
            </a>
            <h4>Casaco de Lã</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>

          <div class="col-4">
            <a href="">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Merino_Wool_Sweater_Black_1_655b6a9d-3dd5-4e56-aaec-003c763a078c.webp?v=1685705840&width=493"
                alt=""
              />
            </a>
            <h4>Suéter de lã Merino</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="/ProductID2">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Chinos_Khaki_1_86f4f403-4fea-4e0e-b7a3-dfc806e268a7.webp?v=1685549222&width=990"
                alt=""
              />
            </a>
            <h4>Calça</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="">
              <img
                src="https://1718069235.rsc.cdn77.org/temp/1674485423_b0ae333fdbb69e914e5a972b82601dea.jpg"
                alt=""
              />
            </a>
            <h4>Sandalia vegan de n</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>

          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>

          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>

          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
          <div class="col-4">
            <a href="product-details.html">
              <img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
                alt=""
              />
            </a>
            <h4>Jaqueta Safari</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>

        <span>&#8594;</span>
      </div>

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-2">
              <img src="assets/img/logo-white.png" alt="" />
              <p>
                {" "}
                Descubra a nossa página dedicada à moda sustentável, onde você
                encontrará dicas de estilo consciente, marcas ecológicas e
                iniciativas inovadoras. Junte-se a nós nessa jornada rumo a um
                futuro fashion mais responsável e ético. Seja uma referência
                de segurança e consciência ambiental!
              </p>
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
          <hr />
          <p class="copyright">Copyright 2021 - ReVestir</p>
        </div>
      </div>

    </>
  );
}

export default AllProducts;
