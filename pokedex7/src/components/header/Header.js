import { AppBar, Button, Toolbar } from "@mui/material";
import pokedex from "../../assets/pokedex-icon.svg";
import { PokedexIcon, Title } from "./styled";
import { neutralColor, terciaryColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { gotoPokedexPage } from "../../routes/coordinator";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" color="primary" sx={{}}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <PokedexIcon src={pokedex} />
        <Title>Pokédex </Title>
        <Button
          onClick={() => gotoPokedexPage(navigate)}
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
          Meus pokémons
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
