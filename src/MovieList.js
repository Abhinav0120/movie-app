import {Component} from "react";
import MovieCard from "./Moviecard";
import { movies } from "./moviesdata";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
           movies: movies,
           cartCount: 0,
        }
        // this.addStars = this.addStars.bind(this);
        // this.removeStar = this.removeStar.bind(this);
    }

    handleIncStar = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        if(movies[mid].star >=5){
            return;
        }
        movies[mid].star += 0.5

        this.setState({
            movies: movies
        });
    }

    handleDecStar = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        if(movies[mid].star <= 0){
            return;
        }
        movies[mid].star -= 0.5

        this.setState({
            movies: movies
        });
    }

    handleFav = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        movies[mid].fav = !movies[mid].fav;

        this.setState({
            movies:movies
        });
        
    }

    handleCart = (movie) =>{
        const{movies} = this.state;
        const mid = movies.indexOf(movie);

        movies[mid].isInCart = !movies[mid].isInCart;
        this.setState({
            movies:movies
        });
    }
    render(){
        // const {title,plot,price,rating,stars,fav,isIncart,poster} = this.state.movies;
        const {movies} = this.state;
        return(
            <>
                {movies.map((movie) => <MovieCard   movies = {movie} 
                                                    addStars = {this.handleIncStar} 
                                                    removeStar = {this.handleDecStar} 
                                                    handleFav = {this.handleFav} 
                                                    handleCart ={this.handleCart} 
                                                    key = {movie.id}/>)}
                
            </>
        )
    }
}

export default MovieList;