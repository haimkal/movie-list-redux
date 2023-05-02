import React, { useEffect, useState } from 'react'
import { MovieService } from '../../services/movie.services'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MoviePage() {

    const { id } = useParams()
    const movies = useSelector(({ movies }) => movies)
    const [currentMovie, setCurrentMovie] = useState()

    useEffect(() => {
        setCurrentMovie(movies.filter((movie) => movie.id === id)[0])
    }, [])
    console.log('current Movie: ', currentMovie)


    return (
        currentMovie &&
        <div>
            <h2>{currentMovie.titleText.text}</h2>
            <img src={currentMovie.primaryImage?.url || '/placeholder.png'}
                alt={currentMovie.titleText.text}
                title={currentMovie.titleText.text} />
            <span>Release Year: {currentMovie.releaseYear.year} </span>
            <Link to={"/"}>
                <div>Get back to movies list</div>
            </Link>
        </div>


    )
}
