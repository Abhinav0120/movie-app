import MovieList from "./MovieList";
import Student from "./Student";
import Navbar from "./Navbar";
import React from "react";
import { movies } from "./moviesData";


class App extends React.Component {
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
    let{movies,cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;

    if(movies[mid].isInCart){
      cartCount = cartCount+1;
    }else{
      cartCount-= 1
    }

    this.setState({
        movies:movies,
        cartCount:cartCount,
    });

    // console.log(cartCount);
}


  render (){
    const {movies,cartCount} = this.state;
    return (
      <>
        <Navbar cartCount = {cartCount}/>
        {/* <h1>Movie App</h1>  */}
        <MovieList movies = {movies} 
                  addStars = {this.handleIncStar} 
                  removeStar = {this.handleDecStar} 
                  handleFav = {this.handleFav} 
                  handleCart ={this.handleCart} 
                  />
        {/* <Student name="Alexa" marks={10} />
        <Student name="Siri" marks={20}/>
        <Student name="Google" marks={30}/>
        <Student /> */}

      </>
    );
  }
}

Student.defaultProps = {
  name : "Student",
  marks : "N.A"
}

export default App;


