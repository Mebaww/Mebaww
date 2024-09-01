import React from 'react'

const Image_base_url = 'https://image.tmdb.org/t/p/original'
const MovieCard = ({movie}) => {
  return (
    <>
    <img src={Image_base_url + movie.poster_path} className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] transition-all
     ease-in border-gray-300 hover:scale-110 cursor-pointer duration-150' alt="" />
    </>
  )
}

export default MovieCard