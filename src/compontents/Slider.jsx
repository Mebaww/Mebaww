import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft,  HiChevronRight} from "react-icons/hi2";

const ImageBaseUrl = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef()
  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight=(element)=>{
    element.scrollLeft +=screenWidth-110
  }

  const sliderLeft=(element)=>{
    element.scrollLeft -=screenWidth-110
  }
  return (

   <div>
    <HiChevronLeft className="hidden md:block text-white text-4xl font-extrabold absolute mx-8 mt-[150px] cursor-pointer"
     onClick={()=>sliderLeft(elementRef.current)}/>
    <HiChevronRight className="text-white text-4xl font-extrabold absolute right-0 mt-[150px] mx-8 hidden md:block cursor-pointer"
     onClick={()=> sliderRight(elementRef.current)}/>
     <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth " ref={elementRef}>
      {movieList.map((item) => (
        <img src={ImageBaseUrl+item.backdrop_path}
         className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-400
         transition-all duration-100 ease-in"/>
      ))}
    </div>
   </div>
  
  );
}

export default Slider;
