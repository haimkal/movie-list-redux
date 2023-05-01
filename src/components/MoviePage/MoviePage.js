import React, { useEffect, useState } from 'react'
import { MovieService } from '../../services/movie.services'
import { useParams } from 'react-router-dom'

export default function MoviePage() {

    const { id } = useParams()
    console.log(id)
    const [movieDetails, setMovieDetails] = useState()

    useEffect(() => {
        const getMovieDetails = async () => {
            const movie = MovieService.getMovie(id)
            return movie

        }

        getMovieDetails().then((res) => setMovieDetails(res))
    }, [])
    console.log(movieDetails)
    return (
        movieDetails &&
        <div>
            <h2>{movieDetails.titleText.text}</h2>
            <img src={movieDetails.primaryImage?.url || '/placeholder.png'}
                alt={movieDetails.titleText.text}
                title={movieDetails.titleText.text} />
            <span>Release Year: {movieDetails.releaseYear.year} </span>
        </div>
    )
}
