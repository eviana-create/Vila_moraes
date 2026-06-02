import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reunioes from "./pages/Reunioes";
import ProjetoCrianca from "./pages/projetoCrianca";
import Associacao from "./pages/Associacao";
import Horta from "./pages/Horta";
import Avisos from "./pages/Avisos";
import Saude from "./pages/Saude";
import ProjetoPascoa from "./pages/ProjetoPascoa";
import Marmitas from "./pages/Marmitas";
import Feirinha from "./pages/Feirinha";
import Emilly from "./pages/Emilly";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reunioes" element={<Reunioes />} />
      <Route path="/projeto-crianca" element={<ProjetoCrianca />} />
      <Route path="/associacao" element={<Associacao />} />
      <Route path="/horta" element={<Horta />} />
      <Route path="/avisos" element={<Avisos />} />
      <Route path="/saude" element={<Saude />} />
      <Route path="/projetopascoa" element={<ProjetoPascoa />} />
      <Route path="/marmitas" element={<Marmitas />} />
      <Route path="/feirinha" element={<Feirinha />} />
      <Route path="/emilly" element={<Emilly />} />
    </Routes>
  );
}

export default App;