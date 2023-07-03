import React from "react";

class Student extends React.Component{
    render(){
        return(
            <>
                <h1>Hello, {this.props.name}</h1>
                <span>Your Scored {this.props.marks} marks</span>
            </>
        )
    }
}

export default Student;