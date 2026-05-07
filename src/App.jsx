
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reunioes from "./pages/Reunioes";
import ProjetoCrianca from "./pages/projetoCrianca";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reunioes" element={<Reunioes />} />
      <Route path="projeto-crianca" element={<ProjetoCrianca />} />
    </Routes>
  );
  
}

export default App;