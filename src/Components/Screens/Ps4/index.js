import "./style.css"
import React, { Component } from 'react';
import "./style.css";
import Header from "../../Header";
import H1 from "../../H1";
import Product from "../../Product";
import Tabel from "../../Tabel";
import Reviews from "../../Reviews";
import Section from "../../Section";
import Images from "../../../Assets";
class Ps4 extends Component {
    state = {
      src:[Images.Img4,Images.Img6,Images.Img16,Images.Img16],
        card: [
          {
            isStar: "true",
            h1: "Featured Products",
            span: [
              "Apple iPhone 11 Pro 256GB Memory",
              "Apple Airpods Wireless Bluetooth Headset",
              "Sony Playstation 4 Pro White Version",
            ],
            src:[Images.Img11,Images.Img10,Images.Img9],
            cost: ["$499.99", "$89.99", "$399.99"],
          },
        ],
        review: [
          {
            h1: "Jenifer Medhurst",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
          },
          {
            h1: "Jenifer Medhurst",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
          },
          {
            h1: "Jenifer Medhurst",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
          },
        ],
      };
    render() {
        return (
            <div className="iphon flex">
            <Header />
            <H1>Back / iPhone 11 Pro 256GB Memory</H1>
            <Product />
            <H1>Specification</H1>
            <Tabel />
            <H1>Reviews</H1>
            <Reviews info={this.state.review} />
            <Section info={this.state.card[0]} />
          </div>
        );
    }
}

export default Ps4;
