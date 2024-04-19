import React, {useEffect, useState} from "react"
import Cards from "../card/card.jsx"
import "./movielist.css"
import {useParams} from "react-router-dom"

const MovieList = () =>{
    const [movieList, setMovieList]=useState([])
    const{type}= useParams()
    useEffect(() => {
        getData()
    }, [])

    useEffect(()=>{
        getData()
    }, [type])

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated" }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results)) 
    }
    return(
        <div className="movie_list">
            <h2 className="list title">{(type ? type.replaceAll("_", " ") : "Top Rated").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map((movie, id)=>(
                        <Cards key={id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}
export default MovieList