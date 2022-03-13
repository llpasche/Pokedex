import { AppBar, Button, Toolbar } from "@mui/material";
import pokedex from "../../assets/pokedex-icon.svg";
import { PokedexIcon, Title } from "./styled";
import { neutralColor, terciaryColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { gotoHomePage, gotoPokedexPage } from "../../routes/coordinator";
import { useEffect } from "react";
import { useContext } from "react";
import GlobalStateContext from "../../GlobalStateContext";

const Header = () => {
  const navigate = useNavigate();

  const { states, setters } = useContext(GlobalStateContext);

  useEffect(() => {
    if (states.activePage === "HomePage") {
      gotoHomePage(navigate);
    }
  }, [navigate, states.activePage]);

  const switchPage = (navigate) => {
    if (states.activePage === "HomePage") {
      gotoPokedexPage(navigate);
      setters.setActivePage("Pokedex");
    } else {
      gotoHomePage(navigate);
      setters.setActivePage("HomePage");
    }
  };

  const goBackPage = (navigate) => {
    gotoPokedexPage(navigate);
    setters.setActivePage("Pokedex");
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        "@media screen and (min-device-width : 320px) and (max-device-width : 480px)":
          {
            display: "flex",
            flexDirection: "column",
            height: "16vh",
          },
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <PokedexIcon src={pokedex} />
        <Title>Pokédex</Title>
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
            "@media screen and (min-device-width : 320px) and (max-device-width : 480px)":
              {
                top: "6vh",
                left: "15vw",
                width: "70vw",
              },
          }}
        >
          {states.activePage === "HomePage"
            ? "Meus Pokémons"
            : "Lista de Pokémons"}
        </Button>
        {states.activePage === "DetailPokemon" ? (
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
              "@media screen and (min-device-width : 320px) and (max-device-width : 480px)":
                {
                  left: "15vw",
                  top: "11vh",
                  width: "70vw",
                },
            }}
          >
            Meus Pokémons
          </Button>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
