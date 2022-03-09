import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([]);
    const [activePage, setActivePage] = useState("HomePage")

    const states = {pokedex, activePage}
    const setters = {setPokedex, setActivePage}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
