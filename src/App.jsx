import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Premios from "./components/Premios";
import Rank from "./components/Rank";
import Sobre from "./components/Sobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/premios" element={<Premios />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
