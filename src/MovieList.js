
import MovieCard from "./Moviecard";

function MovieList(props){
       
    // const {title,plot,price,rating,stars,fav,isIncart,poster} = this.state.movies;
    const {movies, addStars, removeStar, handleFav, handleCart} = props;
    return(
        <>
            {movies.map((movie) => <MovieCard   movies = {movie} 
                                                addStars = {addStars} 
                                                removeStar = {removeStar} 
                                                handleFav = {handleFav} 
                                                handleCart ={handleCart} 
                                                key = {movie.id}/>)}
            
        </>
    )
}

export default MovieList;