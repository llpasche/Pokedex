import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRequestData2 } from "../../hooks/useRequestData";
import theme from "../../constants/theme";
import { gotoPokedexPage, gotoPokemonDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContextPokedex } from "../../contextPokedex";
import { flexbox } from "@mui/system";
import GlobalStateContext from "../../GlobalStateContext";
import { useRequestData4 } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { stepClasses } from "@mui/material";

const PokemonCard = (props) => {
  const navigate = useNavigate();
  const pokemonSprite = useRequestData2([], props.url);

  

  /* const [pokedex,setPokedex] = useContext(ContextPokedex) */

  const { states, setters } = useContext(GlobalStateContext);

  const [disable, setDisable] = useState(false);

  const onClickAdd = (name, url, sprite, pokedex, setPokedex) => {
    let pokedexStorage = localStorage.getItem("pokedex");
    let pokedexStorageObj = null
    if (pokedexStorage === null) {
      pokedexStorageObj = pokedex
    } else {
      pokedexStorageObj = JSON.parse(pokedexStorage);
    }

    if (disable) {
      setDisable(false);
      localStorage.setItem(name, disable);
    } else {
      setDisable(true);
      localStorage.setItem(name, disable);
    }
    const novoPokemon = {
      name: name,
      url: url,
      sprite: sprite,
    };
    const pokemons = [...pokedexStorageObj, novoPokemon];
    localStorage.setItem("pokedex", JSON.stringify(pokemons));
    setters.setPokedex(pokemons);
  };
 

  const onClickRemove = () => {
    let pokedexStorage = localStorage.getItem("pokedex");
    let pokedexStorageObj = JSON.parse(pokedexStorage);
    const pokeIndex = pokedexStorageObj.findIndex((element) => {
      return element.name === props.name;
    });
    const newPokedex = [...pokedexStorageObj];
    newPokedex.splice(pokeIndex, 1);
    localStorage.removeItem(props.name);
    localStorage.setItem("pokedex", JSON.stringify(newPokedex));
    setters.setPokedex(newPokedex);
    
  };

  const gotoPokeDetail = (name) => {
    setters.setActivePage("DetailPokemon");
    gotoPokemonDetailPage(navigate, name);
  };
  
  const pokemonInformation = useRequestData4([], `${BASE_URL}/pokemon/${props.name}/`)
  const onClick = (pokemon, name) => {
    if (Object.keys(states.pokemonInformation).length = 0) {
      const pokemonStats = pokemon.map(stat =>{
        return(
          stat.base_stat
        )
      })
      setters.setPokemonInformation(pokemonStats)
      setters.setPokemonName(name)
    } else if(Object.keys(states.pokemonInformation).length = 1) {
      const pokemonStats = pokemon.map(stat =>{
        return(
          stat.base_stat
        )
      })
      const newPokemonStats = [...states.pokemonInformation, pokemonStats]
      const newPokemonName = [...states.pokemonName, name]

      setters.setPokemonInformation(newPokemonStats)
      setters.setPokemonName(newPokemonName)
    }
  }
  

  return (
    <>
      {states.activePage === "Pokedex" && Object.keys(states.pokemonInformation).length <= 1 ?
          <Card
            onClick={() => onClick(pokemonInformation, props.name)}
            sx={{
              width: 280,
              marginBottom: 5,
              color: theme.palette.terciary.main,
              "&:hover": {
                backgroundColor: "whitesmoke",
                cursor: "pointer",
                transform: "scale(1.1,1.1)"
              }
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
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="neutral"
              sx={{ fontFamily: "Pokemon" }}
            >
              {props.name}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              backgroundColor: theme.palette.neutral.main,
              display: flexbox,
              justifyContent: "space-around",
            }}
          >
            {states.activePage === "HomePage" ? (
              localStorage.getItem(props.name) ? (
                <Button
                  disabled
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
                >
                  Adicionar
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    onClickAdd(
                      props.name,
                      props.url,
                      pokemonSprite,
                      states.pokedex,
                      setters.setPokedex
                    )
                  }
                  sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Adicionar
                </Button>
              )
            ) : (
              <Button
                onClick={() => onClickRemove(states.pokedex, props.name)}
                sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
                variant="contained"
                size="small"
                color="secondary"
              >
                Remover
              </Button>
            )}
  
            <Button
              onClick={() => gotoPokeDetail(props.name)}
              sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
              variant="contained"
              size="small"
              color="secondary"
            >
              Ver Detalhes
            </Button>
          </CardActions>
        </Card>
        :
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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="neutral"
            sx={{ fontFamily: "Pokemon" }}
          >
            {props.name}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: theme.palette.neutral.main,
            display: flexbox,
            justifyContent: "space-around",
          }}
        >
          {states.activePage === "HomePage" ? (
            localStorage.getItem(props.name) ? (
              <Button
                disabled
                variant="contained"
                size="large"
                color="secondary"
                sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
              >
                Adicionar
              </Button>
            ) : (
              <Button
                onClick={() =>
                  onClickAdd(
                    props.name,
                    props.url,
                    pokemonSprite,
                    states.pokedex,
                    setters.setPokedex
                  )
                }
                sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
                variant="contained"
                size="small"
                color="secondary"
              >
                Adicionar
              </Button>
            )
          ) : (
            <Button
              onClick={() => onClickRemove(states.pokedex, props.name)}
              sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
              variant="contained"
              size="small"
              color="secondary"
            >
              Remover
            </Button>
          )}

          <Button
            onClick={() => gotoPokeDetail(props.name)}
            sx={{ fontFamily: "Pokemon", fontSize: 8, padding: 1.5 }}
            variant="contained"
            size="small"
            color="secondary"
          >
            Ver Detalhes
          </Button>
        </CardActions>
      </Card>
        }
      
      
    </>
  );
};

export default PokemonCard;
