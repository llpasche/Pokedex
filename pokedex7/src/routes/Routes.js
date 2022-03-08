import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon-detail" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
