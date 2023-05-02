import { createReducer } from "@reduxjs/toolkit";
import { getMoviesList } from './AsyncThunk';

const defaultState = {
    isLoading: false,
    error: '',
    page: 1,
    movies: [],

}

export default createReducer(
    defaultState,
    (builder) => {
        builder.addCase(getMoviesList.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.movies = action.payload.moviesList
            state.page = action.payload.page
        })
    }
)
