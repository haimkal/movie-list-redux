import React, { useEffect, useState } from 'react'
import { MovieService } from '../../services/movie.services'
import MovieCard from '../MovieCard/MovieCard'
import NextPrev from '../NextPrev/NextPrev'
import './MoviesList.css'
export default function MoviesList() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {

        const getMovies = async () => {
            const movies = await MovieService.getMovies(page)
            return movies
        }
        getMovies().then(res => setMovies(res))


    }, [page])

    const turnToNextPage = () => { setPage(page + 1) }
    const turnToPrevPage = () => { setPage(page - 1) }

    console.log('moviesss: ', movies)
    return (
        // movies &&
        <>
            <ul className='movies-list'>
                {movies.map(movie => (

                    <MovieCard name={movie.titleText.text} photo={movie.primaryImage?.url} id={movie.id} />

                ))}
            </ul >
            <NextPrev turnToNextPage={turnToNextPage} turnToPrevPage={turnToPrevPage} page={page} />
        </>
    )
}
