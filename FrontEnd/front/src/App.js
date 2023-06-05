import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import Carousel from "./componentes/carrosel/Carousel";

function App() {
  return (
    <div className="App">
     <HomePage/>
     <div>
      <Carousel/>
        
     </div>
     
    </div>
  );
}

export default App;
