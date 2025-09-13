import "./App.css";
import { Header } from "./componentes/HeaderComponents/Header";
import { Cards } from "./componentes/BodyComponents/Cards";

function App() {
  return (
    <div>
      {/* Header Pag */}
      <div>
        <Header label="Let's Discover Amazing Places"/>
        <Cards/>
      </div>

    </div>
  );
}

export default App;
