export const gotoHomePage = (navigate) => {
    navigate("/")
}

export const gotoPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const gotoPokemonDetailPage = (navigate, id) => {
    navigate(`/pokemon-detail/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}