import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./navBar.jsx";
import { Inicio } from "./views/inicio.jsx";
import { Champions } from "./views/campeones.jsx";
import { Maps } from "./views/mapas.jsx";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/campeones" element={<Champions />} />
        <Route path="/mapas" element={<Maps />} />
      </Routes>
    </Router>
  );
}

export { App };
