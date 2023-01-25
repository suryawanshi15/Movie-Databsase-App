import React from "react";
import {Link,useParams} from 'react-router-dom'
import useFetch from "./useFetch";


function SingleMovie(){

    const {id} = useParams()
    const {isLoading , error ,data:movie} = useFetch(`&i=${id}`)

    if(isLoading){
        return <div className="loading">loading...</div>
    }
    if(error.show){
        return (
            <div>
                <h1> {error.msg}</h1>
                <Link to="/" className="btn">
                    Back To Movies
                </Link>
            </div>
        )
    }

    const {Poster : poster , Title : title , Plot:plot ,Year : year } = movie

    
    return (
        <section className="single-movie">
            <img src={poster} alt = {title} />
            <div className="single-movie-info">
               <h2>{title}</h2>
               <h5> About Movie :{plot}</h5>
               <h3>Released Year : {year}</h3>
               <button className="btn btn-primary">
               <Link to="/" className="btn" > 
               Back To Movies
               </Link>
               </button>
               
            </div>

        </section>
    )
}

export default SingleMovie;