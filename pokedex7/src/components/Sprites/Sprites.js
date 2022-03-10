import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContainer } from './styled';
import { useRequestData3 } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';


const Sprites = () => {
    
        const params = useParams()
        
        const pokemonSprite = useRequestData3([], `${BASE_URL}/pokemon/${params.id}/`)
        const pokemonSpriteFront = pokemonSprite.front_default
        const pokemonSpriteBack = pokemonSprite.back_default 
    
    return (
        
    <CardContainer>
        <Card sx={{ maxWidth: 300, maxHeight: 600  }}>
            <CardMedia
                component="img"
                alt="Imagem Pokemon"
                height="300"
                image= {pokemonSpriteFront}
            />
        </Card>
        <Card sx={{ maxWidth: 300, maxHeight: 600  }}>
            <CardMedia
                component="img"
                alt="Imagem Pokemon"
                height="300"
                image= {pokemonSpriteBack}
            />
            
        </Card>
    </CardContainer>
    )
       
}

export default Sprites