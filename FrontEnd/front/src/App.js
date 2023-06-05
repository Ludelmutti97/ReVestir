import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import Teste1 from "./componentes/teste/teste1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from "./componentes/carrosel/Carousel";
import Footer from "./componentes/rodape/Rodape"
import TodosOsProdutos from "./TodosOsProdutos"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/produtos" element={<Teste1/>} />
      </Routes>
    </Router>
  );
}

export default App;

