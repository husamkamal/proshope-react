import "./style.css";
import Img from "../Img";
import H1 from "../H1";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
const LoginSignup = (props) => {
  return (
    <div className="LoginSignup flex">
      <div className="LoginSignupContains flex">
        <H1>{props.info.h1}</H1>
        <p
          style={{
            color: "#707070",
          }}
        >
          {props.info.p}
        </p>
        <form className="LoginSignupForm flex">
          {props.info.type.map((item, index) => {
            return <Input type={item}>{props.info.label[index]}</Input>;
          })}
          {/* <Input type={"email"}>Enter your email address</Input>
                    <Input  type={"password"} placeholder={""}>Enter your password</Input> */}
          <Button>{props.info.button}</Button>
          {props.isTrue ? (
            <div
              className="flex"
              style={{
                width: " 100%",
                flexDirection: "column",
              }}
            >
              <div className="newInpu flex">
                <input type={"checkbox"} checked />
                <label> Remember me</label>
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <span>Forgot your password?</span>
                <hr />
              </div>
              <Link className="loginLink" to={"/Signup"} replace={true}>
                <Button>Sign up now</Button>
              </Link>
            </div>
          ) : (
            <div className="loginAcc">
              <hr />
              <Link className="signupLink" to={"/login"} replace={true}>
                <H1>Have an account ? Login</H1>
              </Link>
            </div>
          )}
        </form>
      </div>
      <Img src={props.info.src} />
    </div>
  );
};

export default LoginSignup;
