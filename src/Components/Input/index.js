import "./style.css";

const Input = (props) => {
  return (
    <div className="inputLabel flex">
      <input
        className="input"
        type={props.type}
        placeholder={props.placeholder}
      />
      <label className="label flex">{props.children}</label>
    </div>
  );
};
export default Input;
