import React from "react";
import styled from "styled-components";
// import navStyle from "./Navbar.module.css";


const Nav = styled.div`
    width:100%;
    height:70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    align-items:center;
    justify-content: space-between;
`;


const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    margin-left: 20px;
    &:hover{color: #0f0};
`;

const CartContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartIcon = styled.img`
    height:48px;
    margin-right:20px;
`;

const CartCount = styled.span`
    background: ${(props)=>props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(props)=> props.show?"visible":"hidden"}
`;

class Navbar extends React.Component {
    render(){
        return(
            <>
               <Nav>

                    <Title>
                        Movie-App
                    </Title>
                    <CartContainer>
                        <CartIcon src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon"/>
                        <CartCount color = "yellow" show={true}>3</CartCount>
                    </CartContainer>
               </Nav>
            </>
        )
    }
}

export default Navbar;


// const styles = {
//     nav:{
//         // width: "100%", 
//         height: 70, 
//         backgroundColor: "#106ac4", 
//         display:"flex", 
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "relative",
        
//     },
//     title:{
//         fontSize: 30,
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransformL: "uppercase",
//         marginLeft: 20
//     },
//     cartContainer:{
//         position:"relative",
//         cursor:"pointer",
//     },
//     cartIcon:{
//         height:48,
//         marginRight:20,
//     },
//     cartCount:{
//         background:"orange",
//         borderRadius: "50%",
//         padding:"4px 8px",
//         position:"absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//     }
// }