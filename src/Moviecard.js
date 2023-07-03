import React from "react";

class MovieCard extends React.Component{

    addStars= ()=>{

        // if(this.state.stars >=5){
        //     return;
        // }
        // form1
        // this.setState({
        //     stars: this.state.stars + 0.5
        // });

        // form2
        this.setState((prevState) =>{
            return{
                stars:prevState.stars+0.5
            }
        });

    }

    removeStar = ()=>{
        if(this.state.stars > 0){
            this.setState((prevState)=>{
                return{
                    stars:prevState.stars-0.5
                }
            });
        }
        
    }

    handleFav = () =>{
        this.setState({
            fav: !this.state.fav
        });
    }

    handleCart = () =>{
        this.setState({
            inCart: !this.state.inCart
        })
    }

    render(){
        const{title,plot,price,rating,stars,fav,inCart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" />
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
                                onClick={this.removeStar}/>
                                

                                <img className="stars" alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                                <img className="str-btn" alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                onClick={this.addStars}/>

                                <sapn>{stars}</sapn>
                            </div>
                            {
                                // fav?  <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favorite</button> :
                                // <button className="favourite-btn" onClick={this.handleFav}>Favorite</button>

                                <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.handleFav}>{fav?"Un-favourite":"Favourite"}</button>
                            }
                            

                            <button className={inCart?"remove-cart-btn":"cart-btn"} onClick={this.handleCart}>{inCart?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;