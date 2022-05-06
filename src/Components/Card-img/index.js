import "./style.css"
import Img from "../Img";
import {AiFillStar } from "react-icons/ai";
import {BsStarHalf } from "react-icons/bs";
import Button from "../Button";
import {
    FaBookmark
  } from "react-icons/fa";
import Cost from "../Cost";
const CardImg = (props) => {
    return (
        <div className="cardImg flex" > 
            <Img src={props.src}    alt="" />
            <span>{props.children}</span>
            {props.children!=="LAPTOP"&&props.children!=="COMPUTER COMPONENTS"&&props.children!=="DEVICES"&&props.children!=="ACCESSORIES" ?(<div className="icons-star flex" >
            <div className="star flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
            </div>
            <Cost  >{props.cost[props.index]}</Cost>
            <div className="icon-button flex    ">
            <FaBookmark></FaBookmark>
                <Button style={{color:"#F2F2F2" }}>Add To Cart</Button>
            </div>
            </div>):("")
            }
        </div>
    );
}

export default CardImg;
