import { AppBar, Toolbar } from "@mui/material";
import pokedex from "../../assets/pokedex-icon.svg"
import { PokedexIcon, Title } from "./styled";

const Header = () => {
  return (
    <AppBar position="static" color="primary" sx={{}}>
      <Toolbar sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <PokedexIcon src={pokedex}/>
          <Title>Pokédex </Title>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
