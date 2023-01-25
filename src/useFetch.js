import React, { useState, useEffect } from "react";

const API_ENDPOINT =  "http://www.omdbapi.com/?&apikey=1441deb3"
const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: " " })
    const [data, setData] = useState(null)
    useEffect(() => {
        fechMovies(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams])

    const fechMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True') {
            setData(data.Search || data)
            setError({ show: false, msg: '' })
        } else {
            setError({ show: true, data: data.Error })
        }
        setIsLoading(false)
    }
    return {isLoading ,error ,data}
}

export default useFetch;