import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContainer } from './styled';
import { useRequestData3 } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';


const Sprites = () => {
    
        const params = useParams()
        console.log(params)
        
        const pokemonSprite = useRequestData3([], `${BASE_URL}/pokemon/${params.id}/`)
        const pokemonSpriteFront = pokemonSprite.front_default
        const pokemonSpriteBack = pokemonSprite.back_default
        console.log(pokemonSprite.front_default)    
    
    return (
        
    <CardContainer>
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="Imagem Pokemon"
                height="200"
                image= {pokemonSpriteFront}
            />
        </Card>
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="Imagem Pokemon"
                height="200"
                image= {pokemonSpriteBack}
            />
            
        </Card>
    </CardContainer>
    )
       
}

export default Sprites