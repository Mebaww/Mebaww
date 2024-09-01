import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HmovieList from './HmovieCard';
import HmovieCard from './HmovieCard';
function MovieList({genreId, index_}) {

    const [movieList, SetMovieList] = useState([])
   const elementRef = useRef(null)
    useEffect(()=>{
        getMoviesByGenreId()
    }, [])

    const getMoviesByGenreId = () =>{
    GlobalApi.getMoviesByGenreId(genreId).then(resp =>{
     
        SetMovieList(resp.data.results)
    })
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
    <IoChevronBackOutline  onClick={()=>slideLeft(elementRef.current)} className={`text-[80px] text-white
             p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/> 
  <div ref={elementRef} className='flex overflow-x-auto scrollbar-hide md:gap-6 gap-3 scroll-smooth pt-5 pb-5 md:pb-10 px-5'>
        {movieList.map((item, index)=>(
            <>
             {index_%3==0?<HmovieCard movie={item}/>:<MovieCard movie={item}/>}
            </>
        
        ))}
    </div>
    <IoChevronForwardOutline  onClick={()=>slideRight(elementRef.current)}  className={`text-[80px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/>
    </div>
  
  )
}

export default MovieList