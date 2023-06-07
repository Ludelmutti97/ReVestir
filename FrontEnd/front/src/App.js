import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Closet from "./componentes/Closet/Closet"


//import Carousel from "./componentes/carrosel/Carousel";
//import Footer from "./componentes/rodape/Rodape"
//import TodosOsProdutos from "./TodosOsProdutos"

//import Carousel from "./componentes/carrosel/Carousel";
import { Luana } from "./componentes/luana/luana";
import Example from "./componentes/Carrousel/CarroselHome"
import Produtos from "./componentes/produtos/produtos";
import KeepMountedModal from "./componentes/PopUp/ProdutoHomePage"



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/carrosel1" element={<Example />} />
        <Route path="/Closet" element={<Closet />} />
        <Route path="/luana" element={<Luana />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtohomepage" element={<KeepMountedModal />} />


      </Routes>
    </Router>

  );
}

export default App;

