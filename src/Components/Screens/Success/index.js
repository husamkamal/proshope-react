import "./style.css";
import H1 from "../../H1";
import React, { Component } from "react";
import Header from "../../Header";
import Section from "../../Section";
import Button from "../../Button";
import Images from "../../../Assets";
class Success extends Component {
  state = {
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
  };
  render() {
    return (
      <div className="empty flex">
        <Header />
        <div className="container suc flex">
          <section className="emptySectionSuccess flex">
            <H1>Payment Success !</H1>
            <div className="successContain flex">
              <div className="rightSuccess flex">
                <span>Order number</span>
                <span>Shipping Address</span>
                <span>Order Items</span>
              </div>
              <div className="leftSuccess flex">
                  <span>65AS1D56ASD156DS</span>
                  <span>56051 Jones Falls, Philippines, Turkey - 62502</span>
                  <span>1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth Headset</span>
              </div>
            </div>
            <p style={{
                width:"100%",
                textAlgin:"right",
                color:"#242424"
            }}>
              An email will be sent to your email address contains order
              confirmation and tacking code.
            </p>
          </section>
          <Button>Keep Shopping</Button>
          <Section info={this.state.card[0]} />
        </div>
      </div>
    );
  }
}

export default Success;
