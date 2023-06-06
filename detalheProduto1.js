import React from 'react';

function SingleProduct() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <a href="index.html">
            <img src="./front/src/Logo.png" alt="ReVestir" width="125" />
          </a>
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="products.html">Products</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* single product details */}
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Fleece_Jacket_Beige_1_cc3f53b7-fefe-420b-9f48-76f88f3d181c.webp?v=1666949684&width=990"
              alt=""
              width="100%"
              id="ProductImg"
            />

            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/ISTO.-Fleece-Jacket_Off-White_01_254ce5f3-4512-4b3b-b6ae-675285a69bee.webp?v=1685702706&width=823"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Fleece_Jacket_Beige_5_40a9448f-f350-4e1c-99ae-6e70a3f88b27.webp?v=1685702706&width=990"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Fleece_Jacket_Beige_7_a93bc6f5-b866-4184-8045-667d43abee98.webp?v=1685702706&width=823"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <p>Home / Coat</p>
            <h1>CASACO DE LÃ</h1>

            <h2>Color:</h2>
            <p>Bege</p>
            <br />
            <h2> Material:</h2> <p>100% Algodão Ecologico</p>
            <br />
            <h3>
              Product Details <i className="fa fa-ident"></i>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              culpa aperiam at minima reprehenderit dolorum accusamus sint autem.
              Pariatur aliquam in nesciunt! Esse commodi a sed. Nam voluptatibus
              earum error!
            </p>
            <br />
            <button type="button" width="125">
              ❤️
            </button>
          </div>
        </div>
      </div>

      {/* title */}
      <div className="small-container">
        <div className="row row-2">
          <h2>Related Product</h2>
          <p>View More</p>
        </div>
      </div>

      {/* products */}
      <div className="small-container">
        <div className="row">
          <div className="col-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493"
              alt=""
            />
            <h4>Jaqueta Safari</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Merino_Wool_Sweater_Black_1_655b6a9d-3dd5-4e56-aaec-003c763a078c.webp?v=1685705840&width=493"
              alt=""
            />
            <h4>Suéter de lã Merino</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Flannel_Shirt_Light_Blue_1_2ea0681f-0db3-4a46-8247-15ccb5898209.webp?v=1685703442&width=493"
              alt=""
            />
            <h4>Suéter de Algodão</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
          <div className="col-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0051/4447/7770/products/Cotton_Sweater_Moss_Green_1_6761962d-974b-4314-bd2d-7a83bf268917.webp?v=1685701352"
              alt=""
            />
            <h4>Red Printed T-shirt</h4>
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

      {/* footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-2">
              <img src="assets/img/logo-white.png" alt="" />
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
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">
            Copyright 2021 - ReVestir
          </p>
        </div>
      </div>

      {/* main js */}
      <script src="assets/js/main.js"></script>
    </>
    
  );
}

export default SingleProduct;
