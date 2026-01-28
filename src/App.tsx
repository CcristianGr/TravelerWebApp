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
      <Route path="TravelerWebApp/" element={<HomePage />} />
      <Route path="TravelerWebApp/NoService" element={<OutOfService />} />
      <Route path="TravelerWebApp/About" element={<AboutPage />} />
      <Route path="TravelerWebApp/Contact" element={<ContactUs />} />
      <Route path="TravelerWebApp/BlogGrid" element={<BlogGrid />} />
    </Routes>
  );
}

export default App;
