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


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle/>
      
      <Header />
      <h1>App</h1>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
