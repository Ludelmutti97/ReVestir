import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Closet from "./componentes/Closet/Closet"
import SingleProduct from "./componentes/SingleProduto/SingleProduto"
import SingleProductTwo from "./componentes/SingleProduto/SingleProduto2"
import About from "./componentes/AboutUs/About";
import { Luana } from "./componentes/luana/luana";
import Example from "./componentes/carrosel/Roupa/Carrousel/CarroselHome"
import AllProducts from "./componentes/produtos/produtos";
import Example from "./componentes/Carrousel/CarroselHome"
import Produtos from "./componentes/produtos/produtos";
import KeepMountedModal from "./componentes/PopUp/ProdutoHomePage"




function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<HomePage/>} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductID" element={<SingleProduct/>} />
        <Route path="/ProductID2" element={<SingleProductTwo/>} />
        <Route path="/carrosel1" element={<Example />} />
        <Route path="/Closet" element={<Closet />} />
        <Route path="/luana" element={<Luana />} />

        <Route path="/produtos" element={<AllProducts />} />

        


        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtohomepage" element={<KeepMountedModal />} />



      </Routes>
    </Router>

  );
}

export default App;

