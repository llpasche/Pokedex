import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomePageContainer } from "../HomePage/styled";
import GlobalStateContext from "../../GlobalStateContext";


export default function PokedexPage() {

  const { states, setters } = useContext(GlobalStateContext);

    let pokedexStorage = localStorage.getItem("pokedex");
    let pokedexStorageObj = JSON.parse(pokedexStorage);

    const mappedPokedex = pokedexStorageObj?.map((pokemon) => {
      return (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      );
    });

  return <HomePageContainer>{mappedPokedex}</HomePageContainer>;
}
