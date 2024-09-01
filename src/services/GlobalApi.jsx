import axios from "axios";

const MovieBaseUrl = "https://api.themoviedb.org/3/"
const api_key = "73d726c027f03562eb6e49460640bc55"
// https://api.themoviedb.org/3/trending/all/day?api_key=
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+api_key
const getTrendingVideos= axios.get(MovieBaseUrl+"trending/all/day?api_key="+api_key)
const getMoviesByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMoviesByGenreId
}
