import Swiper1 from "../../Swiper/";
import Header from "../../Header";
// import Slider from "../../Slider"
import React, { Component } from "react";
// import Section from "../../Section";
// import { Card } from "reactstrap";

class Home extends Component {
  state = {
    slider: [
      {
        id: 1,
        span: "Save up to $39.99",
        h1: "PlayStation 5",
        p: "Lightning-fast download speed with super-fast SSD storage",
        button: "Shop now",
        src:"../../Assets/img1.PNG"
      },
      {
        id: 2,
        span: "Save up to $49.99",
        h1: "APPLE AIRPODS",
        p: "AirPods are the best-selling headphones in the world",
        button: "Shop now",
        src:"../../Assets/img44.PNG",
      },
      {
        id: 3,
        span: "Save up to $99.99",
        h1: "iPhone 11 PRO",
        p: "Pro cameras.Pro display. Pro performance.",
        button: "Shop now",
        src:"../../Assets/img14.PNG",
      },
    ],
    card: [
      {
        h1: "Featured Categoriesh",
        span: ["LAPTOP", "COMPUTER COMPONENTS", "DEVICES", "ACCESSORIES"],
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
      {
        isStar: "true",
        h1: "Featured Products",
        span: [
          "Apple iPhone 11 Pro 256GB Memory",
          "Apple Airpods Wireless Bluetooth Headset",
          "Sony Playstation 4 Pro White Version",
        ],
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        cost: ["$499.99", "$89.99", "$399.99"],
      },
      {
        isStar: "true",
        h1: "Featured Products",
        span: [
          "Apple iPhone 11 Pro 256GB Memory",
          "Apple Airpods Wireless Bluetooth Headset",
          "Sony Playstation 4 Pro White Version",
        ],
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        cost: ["$499.99", "$89.99", "$399.99"],
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
        <Swiper1 isSlider="true" items={this.state.slider} />
        <Swiper1 isSlider="" items={this.state.card} />
      </div>
    );
  }
}

export default Home;
