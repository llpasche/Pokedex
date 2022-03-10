import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRequestData5, useRequestData6 } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';
import { CardContainer } from '../Sprites/styled';


const Moves = () => {
    
  const params = useParams()
  
  const pokemon = useRequestData5([], `${BASE_URL}/pokemon/${params.id}/`)

  const pokemonMoves = pokemon.map(move =>{
    return(
      <Typography key= {move.move.name} gutterBottom variant="h6" component="div">
      {move.move.name}
    </Typography>
    )
  }).slice(0,5)

  const pokemon2 = useRequestData6([], `${BASE_URL}/pokemon/${params.id}/`)

   const pokemonTypes = pokemon2.map(type =>{
    return(
        <Typography key= {type.type.name} gutterBottom variant="h6" component="div" >
      {type.type.name}
    </Typography>
    )
  }) 
  
    return (
    <CardContainer>
        <Card sx={{ width: 300 , height: 100 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
        <strong>Tipos</strong>
      </Typography>
        <CardContent sx={{display: 'flex', justifyContent: 'space-around'}}>
            {pokemonTypes}
        </CardContent>
        </Card>
        <Card sx={{ width: 300, height: 500  }}>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
        <strong>Ataques</strong>
      </Typography>
        <CardContent sx={{display:"flex", flexDirection: "column", justifyContent: 'space-between', height:400}}>
            {pokemonMoves}
        </CardContent>
        </Card>
    </CardContainer>
    )
}

export default Moves