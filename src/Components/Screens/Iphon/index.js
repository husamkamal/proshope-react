import "./style.css"
import Header from "../../Header"
import React, { Component } from 'react';
import Img from "../../Img";
import H1 from "../../H1";
import Product from "../../Product";
import Tabel from "../../Tabel";
class Iphon extends Component {
    render() {
        return (
            <div className="iphon flex">
                <Header/> 
                <H1>Back / iPhone 11 Pro 256GB Memory</H1>
                <Product />
                <H1>Specification</H1>

                <Tabel/>
            </div>
        );
    }
}

export default Iphon;
