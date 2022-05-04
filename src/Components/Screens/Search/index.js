import "./style.css"
import React, { Component } from 'react';
import Section from "../../Section"
import Header from "../../Header";
class Search extends Component {
    state={
        card:{
            isStar: "true",
            h1: "Featured Products",
            span: 
              ["Apple iPhone 11 Pro 256GB Memory"],
             
            src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
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
