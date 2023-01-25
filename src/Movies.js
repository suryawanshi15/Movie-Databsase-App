import React from "react";
import {Link} from 'react-router-dom'
import { useGlobalContext } from "./context";

function Movies (){

    const {movies , isLoading} = useGlobalContext()
    
    if(isLoading){
        <div className="loading">
           <h1>loading... </h1>
        </div>
    }
    return(
          <section className="movies">

               {movies?.map((movie)=>{
                const {imdbID : id , Poster : poster ,Title : title , Type : type ,Year : year} = movie

                return(
                    <Link to={`/movies/${id}`} key = {id} className = "movie">

                        <article >
                          <img src={poster} alt={title}/>
                          <div className="movie-info">
                            <h4 className="title">{title} </h4>
                            <p>{year}</p>
                          </div>
                        </article>
                    </Link>
                )
               })}
          </section>
    )
}
export default Movies