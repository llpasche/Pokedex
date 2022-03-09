import RoutesApp from "./routes/Routes";
import React, { useState } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "@emotion/react";
import theme from "./constants/theme";
import { ContextPokedex } from "./contextPokedex";
import { terciaryColor } from "./constants/colors";
import Header from "./components/header/Header";
import GlobalState from "./GlobalState";

// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${terciaryColor};
  }
`;

export default function App() {
  /* const [pokedex, setPokedex] = useState([]); */

  return (
    <ThemeProvider theme={theme}>
      {/* <ContextPokedex.Provider value={[pokedex, setPokedex]}> */}
      <GlobalState>
        <GlobalStyle />
        <Header />
        <RoutesApp />
      </GlobalState>
      {/* </ContextPokedex.Provider> */}
    </ThemeProvider>
  );
}
