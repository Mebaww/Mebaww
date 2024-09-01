import React from 'react'

const HmovieCard = ({movie}) => {
    const Image_base_url = 'https://image.tmdb.org/t/p/original'
  return (
    <section className='hover:scale-110 cursor-pointer duration-150 transition-all
     ease-in'>
    <img src={Image_base_url + movie.backdrop_path} className='rounded-lg hover:border-[3px]  border-gray-300 ' alt="" />
     <h2 className='w-[110px] md:w-[300px] mt-2 text-center font-bold text-gray-200'>{movie.title}</h2>
    </section>
  )
}

export default HmovieCard