
=======
import RoutesApp from "./routes/Routes";
import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from "@emotion/react";
import theme from "./constants/theme";

 
// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle/>
      <RoutesApp />
      <Header />
      <h1>App</h1>
    </div>
    </ThemeProvider>
  );
}
