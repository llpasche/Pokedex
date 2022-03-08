import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContainer } from './styled';


const Sprites = () => {
    return (
    <CardContainer>
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="Imagem Pokemon"
                height="200"
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            />
        </Card>
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="Imagem Pokemon"
                height="200"
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            />
            
        </Card>
    </CardContainer>
    )
}

export default Sprites