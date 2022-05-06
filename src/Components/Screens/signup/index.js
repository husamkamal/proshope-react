import "./style.css"
import LoginSignup from "../../Login-singup"
import Header from "../../Header";

import React, { Component } from 'react';
import Images from "../../../Assets";
class Signup extends Component {
    state={
        login:{
            h1:"Signup.",
            p:"Sign up and get exclusive offers from us",
            type:["name","email","password","password"],
            label:["Name","Enter your email address","Enter your password","Confirm your password"],
            button:"Sign up",
            src:Images.Group421
        }
    }
    render() {
        return (
            <div className="login signup ">
               <Header/>
                <LoginSignup  info={this.state.login}/> 
            </div>
        );
    }
}

export default Signup;
