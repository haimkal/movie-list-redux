import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesList } from '../../Redux/AsyncThunk'
import { MovieService } from '../../services/movie.services'
import MovieCard from '../MovieCard/MovieCard'
import NextPrev from '../NextPrev/NextPrev'
import './MoviesList.css'


export default function MoviesList() {

    const dispatch = useDispatch()
    const movies = useSelector(({ movies }) => movies)
    const [page, setPage] = useState(1)

    const getMovies = async (args) => {
        dispatch(getMoviesList(args))
    }
    useEffect(() => {
        getMovies(page)
    }, [page])

    const turnToNextPage = () => { setPage(page + 1) }
    const turnToPrevPage = () => { setPage(page - 1) }

    console.log('moviesss: ', movies)
    return (
        movies &&
        <>
            <ul className='movies-list'>
                {movies.map((movie) => (
                    <MovieCard name={movie.titleText.text} photo={movie.primaryImage?.url} id={movie.id} />
                ))}
            </ul >
            <NextPrev turnToNextPage={turnToNextPage} turnToPrevPage={turnToPrevPage} page={page} />
        </>
    )
}
