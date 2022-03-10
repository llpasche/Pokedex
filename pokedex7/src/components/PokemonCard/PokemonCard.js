
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRequestData2 } from '../../hooks/useRequestData';
import theme from '../../constants/theme';
import { gotoPokemonDetailPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContextPokedex } from '../../contextPokedex';
import { flexbox } from '@mui/system';


const PokemonCard = (props) => {
    const navigate = useNavigate()
    const pokemonSprite = useRequestData2([], props.url)
    
    const [pokedex,setPokedex] = useContext(ContextPokedex)
    
    const [disable, setDisable] = useState(false)
    
    

    const onClickAdd = (name, url, sprite,pokedex,setPokedex) => {
      if (disable) {
        setDisable(false)
        localStorage.setItem(name, disable)
      } else {
        setDisable(true)
        localStorage.setItem(name, disable)
      }
      const novoPokemon = {
        name: name, 
        url: url,
        sprite: sprite}
      const pokemons = [...pokedex, novoPokemon]
      setPokedex(pokemons)
    }

  const gotoPokedex = (name) => {
    gotoPokemonDetailPage(navigate, name);
  };

  return (
    <Card
      sx={{
        width: 280,
        marginBottom: 5,
        color: theme.palette.terciary.main,
      }}
    >
      <CardMedia
        component="img"
        alt="Imagem Pokemon"
        height="250"
        image={pokemonSprite}
      />
      <CardContent
        sx={{
          textAlign: "center",
          backgroundColor: theme.palette.neutral.main,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color="neutral" sx={{fontFamily: "Pokemon"}}>
          {props.name}
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor: theme.palette.neutral.main, display: flexbox, justifyContent: 'space-around'}}>
        {localStorage.getItem(props.name)?
        
        <Button disabled variant="contained" size="large" color='secondary' sx={{fontFamily: "Pokemon", fontSize: 8, padding: 1.5}}>Adicionar</Button>  
        :
        <Button onClick={() => onClickAdd(props.name, props.url, pokemonSprite, pokedex, setPokedex)} sx={{fontFamily: "Pokemon", fontSize: 8, padding: 1.5}} variant="contained" size="small" color='secondary'>Adicionar</Button>
        }
        
        <Button onClick={() => gotoPokedex(props.name)} sx={{fontFamily: "Pokemon", fontSize: 8, padding: 1.5}} variant="contained" size="small" color='secondary'>Ver Detalhes</Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
