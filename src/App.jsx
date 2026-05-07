
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reunioes from "./pages/Reunioes";
import ProjetoCrianca from "./pages/projetoCrianca";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reunioes" element={<Reunioes />} />
      <Route path="projeto-crianca" element={<projetoCrianca />} />
    </Routes>
  );
  
}

export default App;