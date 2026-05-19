
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reunioes from "./pages/Reunioes";
import ProjetoCrianca from "./pages/ProjetoCrianca";
import Associacao from "./pages/Associacao";
import Horta from "./pages/Horta";
import Avisos from "./pages/Avisos";
import Saude from "./pages/Saude";
import ProjetoPascoa from "./pages/ProjetoPascoa";
import Marmitas from "./pages/Marmitas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reunioes" element={<Reunioes />} />
      <Route path="projeto-crianca" element={<ProjetoCrianca />} />
      <Route path="/associacao" element={<Associacao />} />
      <Route path="/horta" element={<Horta />} />
      <Route path="avisos" element={<Avisos />} />
      <Route path="saude" element={<Saude />} />
      <Route path="projeto-pascoa" element={<ProjetoPascoa />} />
      <Route path="marmitas" element={<Marmitas />} />
    </Routes>
  );
  
}

export default App;