import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_GET_MOVIES } from "./Actions";
import { MovieService } from "../services/movie.services";


const getMovies = async (page) => {
    const movies = await MovieService.getMovies(page)
    // movies = await movies.json()
    console.log('here in asyncthunk', movies)
    return movies
}

export const getMoviesList = createAsyncThunk(
    ACTION_GET_MOVIES.type,
    async (page, { rejectWithValue }) => {
        try {
            let moviesResult = await getMovies(page)
            return moviesResult
        }
        catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

