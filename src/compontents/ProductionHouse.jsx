import React from 'react'
import disney from '../assets/img/disney.png'
import marvel from '../assets/img/marvel.png'
import nationalG from '../assets/img/nationalG.png'
import pixar from '../assets/img/pixar.png'
import starwars from '../assets/img/starwar.png'


import starwarsV from '../assets/vids/star-wars.mp4'
import disneyV from '../assets/vids/disney.mp4'
import marvelV from '../assets/vids/marvel.mp4'
import nationalGeo from '../assets/vids/national-geographic.mp4'
import pixarV from '../assets/vids/pixar.mp4'



function ProductionHouse() {
    const ProdutionHouseList=[
        {
            id: 1,
            image:disney,
            video: disneyV,

        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image:nationalG,
            video: nationalGeo
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwars,
            video: starwarsV
        }
    ]
  return (
   <div className='flex gap-2 md:gap-5 p-3 px-5 md:px-16 '>
    {ProdutionHouseList.map((item) =>(
        <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative 
        shadow-xl shadow-gray-800'>
             <video autoPlay muted playsInline loop className='rounded-md top:0 z-0 absolute opacity-0 hover:opacity-50'>
                <source src={item.video}></source>
             </video>
            <img src={item.image} className='w-full z-[1]' />
           
        </div>
    ))}
   </div>
  )
}

export default ProductionHouse