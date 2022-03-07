import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const PokemonCard = () => {
    return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="Imagem Pokemon"
        height="200"
        image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nome do Pokemon
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Adicionar</Button>
        <Button variant="outlined" size="small">Ver Detalhes</Button>
      </CardActions>
    </Card>
    )
}

export default PokemonCard