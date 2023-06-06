import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import Produtos from "./componentes/AllProdutos/Produtos";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Closet from "./componentes/Closet/Closet"
<<<<<<< HEAD

//import Carousel from "./componentes/carrosel/Carousel";
//import Footer from "./componentes/rodape/Rodape"
//import TodosOsProdutos from "./TodosOsProdutos"

=======
import Carousel from "./componentes/carrosel/Carousel";
import Luana from "./componentes/luana/luana";
// import Footer from "./componentes/rodape/Rodape"
// import TodosOsProdutos from "./TodosOsProdutos"
>>>>>>> b2ae3424a6ee471b066516dedb2f974e094e2dc6


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/Closet" element={<Closet/>} />
<<<<<<< HEAD
       
=======
        <Route path="/luana" element={<Luana/>} />
>>>>>>> b2ae3424a6ee471b066516dedb2f974e094e2dc6
      </Routes>
    </Router> 
    
  );
}

export default App;

