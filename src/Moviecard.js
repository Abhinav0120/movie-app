import React from "react";

class MovieCard extends React.Component{

    // addStars= ()=>{

    //     // if(this.state.stars >=5){
    //     //     return;
    //     // }
    //     // form1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // });

    //     // form2
    //     this.setState((prevState) =>{
    //         return{
    //             stars:prevState.stars+0.5
    //         }
    //     });

    // }

    // removeStar = ()=>{
    //     if(this.state.stars > 0){
    //         this.setState((prevState)=>{
    //             return{
    //                 stars:prevState.stars-0.5
    //             }
    //         });
    //     }
        
    // }

    // handleFav = () =>{
    //     this.setState({
    //         fav: !this.state.fav
    //     });
    // }

    // handleCart = () =>{
    //     this.setState({
    //         inCart: !this.state.inCart
    //     })
    // }

    render(){
        const {movies, addStars, removeStar, handleFav, handleCart} = this.props;
        const{title,plot,poster,price,rating,star,fav,isInCart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price"> {price}</div> 

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={()=>{removeStar(movies)}}/>
                                

                                <img className="stars" alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                                <img className="str-btn" alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                onClick={()=>{addStars(movies)}}/>

                                <span>{star}</span>
                            </div>
                            {
                                // fav?  <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favorite</button> :
                                // <button className="favourite-btn" onClick={this.handleFav}>Favorite</button>

                                <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handleFav(movies)}}>{fav?"Un-favourite":"Favourite"}</button>
                            }
                            

                            <button className={isInCart?"remove-cart-btn":"cart-btn"} onClick={()=>{handleCart(movies)}}>{isInCart?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;