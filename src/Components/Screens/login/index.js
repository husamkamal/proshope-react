import "./syle.css"
import LoginSignup from "../../Login-singup";
import React, { Component } from 'react';
import Header from "../../Header";
class Login extends Component {
    state={
        login:{
            h1:"Login.",
            p:"Login with your data that you entered during registration",
            type:["email","password"],
            label:["Enter your email address","Enter your password"],
            button:"Login"
        }
    }
    render() {
        return (
            <section className="login">
                <Header/>
                <LoginSignup isTrue="true" info={this.state.login}/> 
            </section>
        );
    }
}

export default Login;
