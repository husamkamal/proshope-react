import "./style.css";
import H1 from "../H1";
import CardImg from "../Card-img";

const Section = (props) => {
  // {console.log(props.info.span)}
  return (
    <section className="section flex">
      <div className="container flex">
        <div className="head">
          <div className="h1-point">
            <H1 isTrue="true">{props.info.h1}</H1>
          </div>
          <div className="range flex">
            <span></span>
          </div>
        </div>
        <div className="cards flex">
          {console.log(props.info)}
            {props.info.span.map((item,index)=>{
                return <CardImg index={index} cost={props.info.cost} h1={props.info.h1} src={props.info.src}>{item}</CardImg>
            })}
            {/* {props.info.isTrue?(props.info.cost.map((item)=>{
                console.log(props.info.cost)
                return <CardImg cost={item} ></CardImg>
            })):""} */}
        </div>
      </div>
    </section>
  );
};

export default Section;
