import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([]);
    const [activePage, setActivePage] = useState("HomePage")
    const [pokemonInformation, setPokemonInformation] = useState([])
    const [pokemonName, setPokemonName] = useState([])

    const states = {pokedex, activePage, pokemonInformation, pokemonName}
    const setters = {setPokedex, setActivePage, setPokemonInformation, setPokemonName}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
