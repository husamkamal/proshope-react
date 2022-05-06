import "./style.css"
import React, { Component } from 'react';
import Section from "../../Section"
import Header from "../../Header";
import Images from "../../../Assets";
class Search extends Component {
    state={
        card:{
            isStar: "true",
            h1: "Featured Products",
            span: 
              ["Apple iPhone 11 Pro 256GB Memory"],
             
            src:[Images.Img14],
            cost: "$499.99"
          }
    }
    render() {
        return (
            <div className="search">
                <Header />
                <Section info={this.state.card} />
            </div>
        );
    }
}

export default Search;
