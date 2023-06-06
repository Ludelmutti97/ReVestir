import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Closet from "./componentes/Closet/Closet"


//import Carousel from "./componentes/carrosel/Carousel";
//import Footer from "./componentes/rodape/Rodape"
//import TodosOsProdutos from "./TodosOsProdutos"

//import Carousel from "./componentes/carrosel/Carousel";
<<<<<<< HEAD
import Luana from "./componentes/luana/luana";
import Example from "./componentes/carrosel/Roupa/Carrousel/CarroselHome"
import Produtos from "./componentes/produtos/produtos";
=======
import {Luana} from "./componentes/luana/luana";
>>>>>>> 162bb53c49b374c17fd7d173c706ec1bfadce99f




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/carrosel1" element={<Example/>} />
        <Route path="/Closet" element={<Closet/>} />
        <Route path="/luana" element={<Luana/>} />
        <Route path="/produtos" element={<Produtos/>} />
        

      </Routes>
    </Router> 
    
  );
}

export default App;

