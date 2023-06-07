import React from 'react';

function AllProducts() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>All Products - ReVestir</title>
        <link rel="stylesheet" href="./index.css" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <div className="container">
          <header className="navbar">
            <div className="logo">
              <a href="index.html">
                <img
                  src="./front/src/Logo.png"
                  alt="ReVestir"
                  width="125"
                />
              </a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="products.html">Products</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="index.html">Home</a>
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
              <a href="product-details.html">
                <img
                  src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Flannel_Shirt_Light_Blue_1_2ea0681f-0db3-4a46-8247-15ccb5898209.webp?v=1685703442&width=493"
                  alt=""
                />
              </a>
              <h4>Camisa de Flanela</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
            </div>
            </div>
            <div class="col-4">
                <a href="product-details.html"><img
                src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Merino_Wool_Sweater_Black_1_655b6a9d-3dd5-4e56-aaec-003c763a078c.webp?v=1685705840&width=493" alt=""/></a>
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
                <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Chinos_Walnut_1_f08fe4bc-29d7-486e-b36c-6824a8be84e0.webp?v=1685549215&width=990" alt=""/></a>
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
                <a href="product-details.html"><img src="https://1718069235.rsc.cdn77.org/temp/1674485423_b0ae333fdbb69e914e5a972b82601dea.jpg" alt=""/></a>
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
                <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
            <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
            <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <a href="product-details.html"><img src="https://cdn.shopify.com/s/files/1/0051/4447/7770/files/Ripstop_Safari_Jacket_Beige_1_836e3dc7-359e-4c7e-a052-b9ac8eb064ed.webp?v=1684832251&width=493" alt=""/></a>
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
                    <img src="assets/img/logo-white.png" alt=""/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam molestias ullam repudiandae ea, architecto nostrum dolor!</p>
                </div>
              
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        
                    </ul>
                </div>
            </div>
            <hr/>
            <p class="copyright">Copyright 2021 - ReVestir</p>
        </div>
    </div>


    
    <script src="assets/js/main.js"></script>
</body>
        
</>
    
  )
}

export default AllProducts;