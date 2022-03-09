import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { HomePageContainer } from "./styled";
import Pagination from '@mui/material/Pagination';
import theme from '../../constants/theme';
import { useState } from "react";

export default function HomePage() {

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const pokemons = useRequestData([], `${BASE_URL}/pokemon/?limit=20&offset=${(page-1)*20}`);

  const pokemonsList = pokemons.map((pokemon) => {
    return (
      <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
    );
  });


  return (
    <div>
    <Pagination count={57} page={page} onChange={handleChange} size="large" shape="rounded" color="secondary" sx={{fontFamily: "Pokemon", maxWidth: 450 ,margin: "auto",marginTop: 2, backgroundColor: theme.palette.neutral.main, padding: 2, borderRadius: 5}}/>
      <HomePageContainer>
        {pokemonsList}
      </HomePageContainer>
      </div>
  )
    
}
