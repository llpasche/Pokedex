import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { useRequestData5, useRequestData6 } from "../../hooks/useRequestData"
import Sprites from "../../components/Sprites/Sprites"
import Stats from "../../components/Stats/Stats"
import { Container } from "./styled"
import Moves from "../../components/Moves/Moves"
import Typography from '@mui/material/Typography';
import theme from "../../constants/theme"



export default function PokemonDetailPage() {

  const params = useParams()

  return(
    <>
    <Typography gutterBottom variant="h3" component="div" sx={{textAlign: "center", color: "white", marginTop: 2}}>
        <strong>{params.id}</strong>
      </Typography>
      <Container>
        <Sprites />
        <Stats />
        <Moves />
      </Container>
      </>
  ) 
}
