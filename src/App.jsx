import GenreMovieList from "./compontents/GenreMovieList"
import Header from "./compontents/header"
import ProductionHouse from "./compontents/ProductionHouse"
import Slider from "./compontents/Slider"
import './App.css'


const App = () =>{

  return (
    
    <div>
      <Header/>
     <Slider/>
     <ProductionHouse />
     <GenreMovieList/>
    </div>

  )
}


export default App