import { useContext, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { ContextPokedex } from "../../contextPokedex";
import { HomePageContainer } from "../HomePage/styled";
import GlobalStateContext from "../../GlobalStateContext";

export default function PokedexPage() {
  /* const {pokedex, setPokedex} = useContext(ContextPokedex); */

  const { states, setters } = useContext(GlobalStateContext);

  localStorage.setItem("pokedex", JSON.stringify(states.pokedex));
  let pokedexStorage = localStorage.getItem("pokedex");
  let pokedexStorageObj = JSON.parse(pokedexStorage);

  const mappedPokedex = pokedexStorageObj?.map((pokemon) => {
    return (
      <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
    );
  });

  return <HomePageContainer>{mappedPokedex}</HomePageContainer>;
}
