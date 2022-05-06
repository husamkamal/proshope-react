import "./style.css";

const Input = (props) => {
  return (
    <div className="inputLabel flex">
      <input
      id={props.id}
        className="input"
        type={props.type}
        placeholder={props.placeholder}
      />
      <label for={props.id} className="label flex">{props.children}</label>
    </div>
  );
};
export default Input;
