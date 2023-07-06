import React from "react";
import navStyle from "./Navbar.module.css";

class Navbar extends React.Component {
    render(){
        return(
            <>
               <div className={navStyle.nav}>

                    <div className={navStyle.title}>
                        Movie-App
                    </div>
                    <div className={navStyle.cartContainer}>
                        <img className={navStyle.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon"/>
                        <span className={navStyle.cartCount}>3</span>
                    </div>
               </div>
            </>
        )
    }
}

export default Navbar;
