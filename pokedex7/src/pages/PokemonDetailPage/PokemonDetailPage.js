import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { useRequestData5 } from "../../hooks/useRequestData"
import Sprites from "../../components/Sprites/Sprites"
import Stats from "../../components/Stats/Stats"
import { Container } from "./styled"



export default function PokemonDetailPage() {
  
  const params = useParams()
  console.log(params)
  
  const pokemonMoves = useRequestData5([], `${BASE_URL}/pokemon/${params.id}/`)
  console.log(pokemonMoves.moves)

  const pokemon = pokemonMoves.map(move =>{
    return(
      <div key={move.moves.move}>
        <p>{move.moves.move}: {move.moves.move}</p>
      </div>
    )
  })
  

  
  return(
    <div>
      
      <button>Voltar</button>
      <button>Adicionar/Remover da Pokédex</button>
      <Container>
        <Sprites />
        <Stats />
      </Container>
      
      <p>Tipo</p>
      <p>Ataques</p>
      <p>Atributos</p>
    </div>
  ) 
}
