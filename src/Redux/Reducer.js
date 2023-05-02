import { createReducer } from "@reduxjs/toolkit";
import { getMoviesList } from './AsyncThunk';

const defaultState = {
    isLoading: false,
    error: '',
    movies: [],

}

export default createReducer(
    defaultState,
    (builder) => {
        builder.addCase(getMoviesList.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.movies = action.payload
        })
    }
)
