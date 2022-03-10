import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRequestData4 } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';


const Stats = () => {
    
  const params = useParams()
  
  const pokemon = useRequestData4([], `${BASE_URL}/pokemon/${params.id}/`)

  const pokemonStats = pokemon.map(stat =>{
    return(
        <Typography key= {stat.stat.name} gutterBottom variant="h6" component="div">
        <strong>{stat.stat.name}:</strong> {stat.base_stat}
      </Typography>
    )
  })
  
    return (

    <Card sx={{ width: 400, maxHeight: 620 }}>
      <CardContent sx={{display:"flex", flexDirection: "column", justifyContent: 'space-between', height:600}}>
      <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
        <strong>Status</strong>
      </Typography>
        {pokemonStats}
      </CardContent>
    </Card>
    )
}

export default Stats