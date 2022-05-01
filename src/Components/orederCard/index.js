import "./style.css";
import Img from "../Img";
import React from "react";
import H1 from "../H1";
import Cost from "../Cost";
const OrderCard = (props) => {
  {
    console.log(props);
  }
  return (
    <div>
      <hr
        style={{
          width: "100%",
        }}
      />

      <div className="orderCard flex">
        <Img />
        <div className="memory flex">
          <H1>{props.info.h1}</H1>
          <div className="costs flex">
            <Cost>{props.info.cost}</Cost>
            <Cost>{props.info.cost2}</Cost>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
