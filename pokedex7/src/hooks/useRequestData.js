import axios from "axios"
import { useEffect, useState } from "react"


export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data.results)
        })
        .catch(err => {
            console.log(err.response)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return data
}

export const useRequestData2 = (initialData, url, text) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data.sprites.front_default)
        })
        .catch(err => {
            console.log(err.response)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return data
}


export const useRequestData3 = (initialData, url, text) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data.sprites)
        })
        .catch(err => {
            console.log(err.response)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return data
}


export const useRequestData4 = (initialData, url, text) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data.stats)
        })
        .catch(err => {
            console.log(err.response)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return data
}


export const useRequestData5 = (initialData, url, text) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data.moves)
        })
        .catch(err => {
            console.log(err.response)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return data
}

export const useRequestData6 = (initialData, url, text) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data.types)
        })
        .catch(err => {
            console.log(err.response)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])

    return data
}