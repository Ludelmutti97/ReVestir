import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import Produtos from "./componentes/AllProdutos/Produtos";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Closet from "./componentes/Closet/Closet"


//import Carousel from "./componentes/carrosel/Carousel";
//import Footer from "./componentes/rodape/Rodape"
//import TodosOsProdutos from "./TodosOsProdutos"

//import Carousel from "./componentes/carrosel/Carousel";
import Luana from "./componentes/luana/luana";




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/Closet" element={<Closet/>} />


        <Route path="/luana" element={<Luana/>} />

      </Routes>
    </Router> 
    
  );
}

export default App;

