import axios from "axios"
import { useEffect, useState } from "react"


export const useRequestData = (initialData, url) => {
    let [data, setData] = useState(initialData)

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