import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./componentes/Pages/Home";
import { AboutPage } from "./componentes/Pages/About";
import { ContactUs } from "./componentes/Pages/Contact";
import { BlogGrid } from "./features/blog/BlogGrid";
import { OutOfService } from "./componentes/Pages/OutOfService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/NoService" element={<OutOfService />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/BlogGrid" element={<BlogGrid />} />
    </Routes>
  );
}

export default App;
