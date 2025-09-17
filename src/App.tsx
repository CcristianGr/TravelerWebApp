import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./componentes/Pages/Home";
import { AboutPage } from "./componentes/Pages/About";
import { ContactUs } from "./componentes/Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
