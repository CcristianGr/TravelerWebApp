import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./componentes/Pages/Home";
import { AboutPage } from "./componentes/Pages/About";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/About" element={<AboutPage/>}/>
      </Routes>
    </>
  );
}

export default App;
