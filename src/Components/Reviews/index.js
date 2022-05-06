import "./style.css";
import React from "react";
import H1 from "../H1";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Reviews = (props) => {
  return (
    <div className="reviews">
        {props.info.map((item)=>{
            return(<div className="reviewsContain flex">
            <H1>{item.h1}</H1>
            <div className="iphonStar">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
            </div>
            <div className="pa ">
              <p>
                {item.p}
              </p>
            </div>
          </div>)
        })}
      
    </div>
  );
};

export default Reviews;
