import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({ name, photo, id }) {
    return (
        <div className='movie-card'>
            <Link to={`/movie/${id}`}>
                <li>{name}</li>
                <img key={photo} className='card-img' src={photo || '/placeholder.png'} />
            </Link >
        </div>
    )
}
