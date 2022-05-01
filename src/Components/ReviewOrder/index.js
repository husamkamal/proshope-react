import "./style.css";
import H1 from "../H1";
import React from "react";
import Input from "../Input";
const Contain = (props) => {
  return (
    <div className="Contain flex">
      <H1>{props.h1}</H1>
      <div className="addressContain flex">
        {props.type.map((item, index) => {
          return (
            <Input
              type={item}
              placeholder={props.placeholder[index]}
            >
              {props.label[index]}
            </Input>
          );
        })}
      </div>
    </div>
  );
};

export default Contain;
