import "./style.css";
import H1 from "../H1";
import Button from "../Button";
import Img from "../Img";
import { Link } from "react-router-dom";
const Slider = (props) => {
  return (
    <section key={props.info[props.index].id} className="slider flex">
      <div className="container flex">
        <div className="description flex">
          <span>{props.info[props.index].span}</span>
          <H1 isTrue={"true"}>{props.info[props.index].h1}</H1>
          <p>{props.info[props.index].p}</p>
          {props.index === 0 ? (
            <Link className="linkSlider" to="/ps4">
              <Button>{props.info[props.index].button}</Button>
            </Link>
          ) : props.index === 1 ? (
            <Link className="linkSlider" to="/airpods">
              <Button>{props.info[props.index].button}</Button>
            </Link>
          ) : props.index === 2 ? (
            <Link className="linkSlider" to="/iphon">
              <Button>{props.info[props.index].button}</Button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="images">
          <Img src={props.info[props.index].src} />
        </div>
      </div>
    </section>
  );
};

export default Slider;
