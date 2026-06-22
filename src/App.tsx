import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import OmForetaget from "./pages/OmForetaget";
import ViUtfor from "./pages/ViUtfor";
import Projekt from "./pages/Projekt";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/om-foretaget" element={<OmForetaget />} />
        <Route path="/vi-utfor" element={<ViUtfor />} />
        <Route path="/projekt" element={<Projekt />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}