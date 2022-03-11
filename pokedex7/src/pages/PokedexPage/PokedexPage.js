import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomePageContainer } from "../HomePage/styled";
import GlobalStateContext from "../../GlobalStateContext";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BattleContainer, ButtonContainer } from "./styled";


export default function PokedexPage() {

  const { states, setters } = useContext(GlobalStateContext);

    let pokedexStorage = localStorage.getItem("pokedex");
    let pokedexStorageObj = JSON.parse(pokedexStorage);



    const mappedPokedex = pokedexStorageObj?.map((pokemon) => {
      return (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      );
    });

    const countPower = (pokemonStats) => {
    
      let power = 0
      for (let i=0; i < pokemonStats.length; i++) {
        power += pokemonStats[i]
      }
      return power
    }

    const battle = (pokemonInformation1, pokemonName1, pokemonInformation2, pokemonName2) => {
      const pokemon1Power = countPower(pokemonInformation1)
      const pokemon2Power = countPower(pokemonInformation2)
      if (pokemon1Power > pokemon2Power) {
          alert(`${pokemonName1} venceu a batalha!`)
      } else if (pokemon1Power < pokemon2Power) {
          alert(`${pokemonName2} venceu a batalha!`)
      } else {
          alert("A batalha terminou empatada!")
      }
      setters.setPokemonInformation([])
      setters.setPokemonName([])
  }

  
  

  return (
    <> 
      <BattleContainer>
        <Typography gutterBottom variant="h7" component="div" color="primary" sx={{ fontFamily: "Pokemon", marginTop: 2, textAlign:"center" }}>
        Para realizar uma batalha pokemon, selecione 2 pokemons da sua pokedex e aperte o botão abaixo:
        </Typography>
        <ButtonContainer>
          {Object.keys(states.pokemonInformation).length === 2 ?
          
          <Button onClick={() => battle(states.pokemonInformation[0], states.pokemonName[0], states.pokemonInformation[1], states.pokemonName[1])}
            sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
            variant="contained"
            size="small"
            color="primary"
          >Batalha Pokemon
          </Button> 
          :
          <Button
            disabled
            sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
            variant="contained"
            size="small"
            color="primary"
          >Batalha Pokemon
          </Button> 
          }  
        </ButtonContainer>
      </BattleContainer>
      <HomePageContainer>
        {mappedPokedex}
      </HomePageContainer>
    </>
  )

}
