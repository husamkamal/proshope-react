import "./style.css";
import Img from "../Img";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Button from "../Button";
import Images from "../../Assets";
import { FaBookmark } from "react-icons/fa";
import Cost from "../Cost";
import { Link } from "react-router-dom";
const CardImg = (props) => {
  return (
    <div className="cardImg flex">
      {props.src === Images.Img14 ? (
        <Link to="/iphon" replace={true}>
          <Img src={props.src} alt="" />
        </Link>
      ) : props.src === Images.Img23 ? (
        <Link to="/airpods" replace={true}>
          <Img src={props.src} alt="" />
        </Link>
      ) : props.src === Images.Img6? (
        <Link to="/ps4" replace={true}>
          <Img src={props.src} alt="" />
        </Link>
      ): 
      props.src === Images.Img11 ? (
        <Link to="/cam" replace={true}>
          <Img src={props.src} alt="" />
        </Link>
      ) : props.src === Images.Img10 ? (
        <Link to="/mouse" replace={true}>
          <Img src={props.src} alt="" />
        </Link>
      ) : props.src === Images.Img9 ? (
        <Link to="/amazon" replace={true}>
          <Img src={props.src} alt="" />
        </Link>
      ) 
      : (
        <Img src={props.src} alt="" />
      )}

      <span>{props.children}</span>
      {props.children !== "LAPTOP" &&
      props.children !== "COMPUTER COMPONENTS" &&
      props.children !== "DEVICES" &&
      props.children !== "ACCESSORIES" ? (
        <div className="icons-star flex">
          <div className="star flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </div>
          <Cost>{props.cost[props.index]}</Cost>
          <div className="icon-button flex    ">
            <FaBookmark></FaBookmark>
            <Button style={{ color: "#F2F2F2" }}>Add To Cart</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardImg;
