import React, { Component } from "react";

class Student extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        
        return (
            <>
             <h3>{this.props.studentId}</h3>
            <h4>{ this.props.name}</h4>
            <h5>{ this.props.school}</h5>
            </>
        )
    }
}

export default Student