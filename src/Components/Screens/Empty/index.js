import "./style.css";
import H1 from "../../H1";
import React, { Component } from "react";
import Emptycard from "../../EmptyCard";
import Header from "../../Header";
import Section from "../../Section";
import Images from "../../../Assets";
class Empty extends Component {
    state={card: [
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
      }]}
  render() {
    return (
      <div className="empty flex">
          <Header />
        <div className="container flex">
          <section className="emptySection flex">
            <H1>Back / Shopping Cart</H1>
            <Emptycard />
          </section>
          <Section info={this.state.card[0]}/>
        </div>
      </div>
    );
  }
}

export default Empty;
