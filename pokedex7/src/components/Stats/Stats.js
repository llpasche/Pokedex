import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRequestData4 } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';


const Stats = () => {
    
  const params = useParams()
  console.log(params)
  
  const pokemon = useRequestData4([], `${BASE_URL}/pokemon/${params.id}/`)
  console.log(pokemon)

  const pokemonStats = pokemon.map(stat =>{
    return(
      <Typography key= {stat.stat.name} gutterBottom variant="h5" component="div">
      {stat.stat.name}: {stat.base_stat}
    </Typography>
    )
  })
  
    return (

    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        {pokemonStats}
      </CardContent>
    </Card>
    )
}

export default Stats