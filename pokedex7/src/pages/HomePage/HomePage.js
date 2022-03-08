import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/url";
import {useRequestData} from "../../hooks/useRequestData";
import { HomePageContainer } from "./styled";


export default function HomePage() {
  const pokemons = useRequestData([], `${BASE_URL}/pokemon/?limit=151`)
 
  const pokemonsList = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
  })

  return (
    <HomePageContainer>
      {pokemonsList}
    </HomePageContainer>
  );
}
