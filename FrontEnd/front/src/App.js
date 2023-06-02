import "./App.css";
import "./componentes/barradePesquisa/barraDePesquisa.css";
import BarraDePesquisa from "./componentes/barradePesquisa/barraDePesquisa";

function App() {
  return (
    <div className="App">
      <header >
        <img src={require("./Logo.png")} className="logo" />  
        <BarraDePesquisa />
        <h3 > Produtos</h3>
        <span >👧🏽</span>
      
      </header>


 <br>
 </br>

      <footer className="footer">
        <div> Redes Sociais</div>
        </footer>
    </div>
  );
}

export default App;
