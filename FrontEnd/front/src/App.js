import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import Carousel from "./componentes/carrosel/Carousel";
import Footer from "./componentes/rodape/Rodape"
import TodosOsProdutos from "./TodosOsProdutos"

function App() {
  return (
    <div className="App">
      <HomePage />

      <div>
        <Carousel />


      </div>
      <Footer ></Footer>
    </div>
  );
}

export default App;
