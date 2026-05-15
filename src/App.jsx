
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reunioes from "./pages/Reunioes";
import ProjetoCrianca from "./pages/projetoCrianca";
import Associacao from "./pages/Associacao";
import Horta from "./pages/Horta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reunioes" element={<Reunioes />} />
      <Route path="projeto-crianca" element={<ProjetoCrianca />} />
      <Route path="/associacao" element={<Associacao />} />
      <Route path="/horta" element={<Horta />} />
    </Routes>
  );
  
}

export default App;