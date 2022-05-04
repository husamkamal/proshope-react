import React, { Component } from "react";
import "./style.css";
import H1 from "../../H1";
import Contain from "../../ReviewOrder";
import OrderCard from "../../orederCard";
import Header from "../../Header";
import Subtotal from "../../subtotal";
import Button from "../../Button";
class Place extends Component {
  state = {
    contain: [
      {
        id: 1,
        h1: "Shipping Address",
        placeholder: ["Turkey", "Philippines", 62502, "56051 jones fails"],
        label: ["Country", "City", "Zip Code", " Street Address"],
        type: ["text", "text", "number", "address"],
      },
      {
        id: 2,
        h1: "Payment Details",
        placeholder: ["Amy Mayer", 4716 - 4548 - 8244 - 1245, "03-25", 657],
        label: ["Name on Card", "Card Number", "Expiration Date", "CVC"],
        type: ["text", "number", "date", "number"],
      },
    ],
    orderDetails: [
      {
        src: "",
        h1: "iPhone 11 Pro 256GB Memory",
        cost: "$499.99 x1",
        cost2: "$499.99",
      },
      {
        src: "",
        h1: "Apple Airpods Wireless Bluetooth Headset",
        cost: "$89.99 x1",
        cost2: "$89.99",
      },
    ],
  };
  render() {
    return (
      <main className="Review-Order flex">
        <Header />
        <div className=" container">
          <section className="section-container flex">
            <H1>Review Order</H1>
            <div className="shipping flex">
              <div className="payment flex">
                <span>1</span>
                <H1>Shipping and Payment</H1>
              </div>
              <hr />
              <div className="payment2Place flex">
                <span>2</span>
                <H1>Place an Order</H1>
              </div>
            </div>
          </section>
          <div className="details flex">
            <section className="AddressPlace flex">
              <section className="John-rose flex">
                <H1>Shipping Address</H1>
                <span>John rose</span>
                <p>56051 Jones Falls, Philippines, Turkey - 62502</p>
              </section>
              <H1>Order Details</H1>
              {this.state.orderDetails.map((item) => {
                return <OrderCard info={item} />;
              })}
            </section>
            <section className="orderDetailsPlace flex">
              <H1>Order Details</H1>
              <hr
                style={{
                  width: "100%",
                }}
              />
              <Subtotal />
              <Button>Review order</Button>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Place;
