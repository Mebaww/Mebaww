import React from 'react'
import GenresList from '../constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>
        {GenresList.genere.map((item, index) => index<=4&&(
            <div className='md:p-3 p-1 px-8 md:px-16'>
                <h2 className='text-white font-bold text-3xl md:py-2'>{item.name}</h2>
                <MovieList genreId = {item.id} index_ = {index}/>
            </div>
        ))}
    </div>
  
  )
}

export default GenreMovieList