import "./style.css";
import H1 from "../H1";
import Button from "../Button";
import Img from "../Img";
const Slider = (props) => {
  
  return (
    <section key={props.info[props.index].id} className="slider flex">
      <div className="container flex">
        <div className="description flex">
          <span>{props.info[props.index].span}</span>
          <H1 isTrue={"true"}>{props.info[props.index].h1}</H1>
          <p>{props.info[props.index].p}</p>
          <Button >{props.info[props.index].button}</Button>
        </div>
        <div className="images">
            
          <Img src={props.info[props.index].src} />
        </div>
      </div>
    </section>
  );
};

export default Slider;
