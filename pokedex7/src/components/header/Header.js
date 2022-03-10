import { AppBar, Button, Toolbar } from "@mui/material";
import pokedex from "../../assets/pokedex-icon.svg";
import { PokedexIcon, Title } from "./styled";
import { neutralColor, terciaryColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { goBack, gotoHomePage, gotoPokedexPage } from "../../routes/coordinator";
import { useState } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import { useContext } from "react";
import GlobalStateContext from "../../GlobalStateContext";

const Header = () => {
  const navigate = useNavigate();

  /* const [activePage, setActivePage] = useState("HomePage") */

  const {states, setters} = useContext(GlobalStateContext)

  const switchPage = (navigate) => {
    if (states.activePage === "HomePage") {
      gotoPokedexPage(navigate)
      setters.setActivePage("Pokedex")
    } else {
      gotoHomePage(navigate)
      setters.setActivePage("HomePage")
    }
  }

  const goBackPage = (navigate) => {
    gotoPokedexPage(navigate)
    setters.setActivePage("Pokedex")
  }


  return (
    <AppBar position="sticky" color="primary" sx={{}}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <PokedexIcon src={pokedex} />
        <Title>Pokédex </Title>
        <Button
          onClick={() => switchPage(navigate)}
          sx={{
            background: terciaryColor,
            color: neutralColor,
            position: "absolute",
            left: "80vw",
            fontFamily: "Pokemon",
            "&:hover": {
              background: neutralColor,
              color: terciaryColor,
              borderRadius: "0px",
            },
          }}
        >
          {states.activePage === "HomePage"?
          
          "Meus Pokémons"
        :
          "Lista Pokémons"
        }
        </Button>
        {states.activePage === "DetailPokemon"?
        <Button
        onClick={() => goBackPage(navigate)}
        sx={{
          background: terciaryColor,
          color: neutralColor,
          position: "absolute",
          left: "5vw",
          fontFamily: "Pokemon",
          "&:hover": {
            background: neutralColor,
            color: terciaryColor,
            borderRadius: "0px",
          },
        }}
      >
      Meus Pokémons
      </Button>
      :
      <></>
      }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
