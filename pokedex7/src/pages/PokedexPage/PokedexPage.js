import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { ContextPokedex } from "../../contextPokedex";
import { HomePageContainer } from "../HomePage/styled";

export default function PokedexPage() {
  const [pokedex, setPokedex] = useContext(ContextPokedex);
  console.log(pokedex)

  const mappedPokedex = pokedex?.map((pokemon)=>{
    return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
  })
  return (
  
  <HomePageContainer>
    {mappedPokedex}
  </HomePageContainer>
  
  );
}
