import "./style.css"

function H1 (props){
    return (
        <h1 className={props.isTrue?"h1Another":"h1"}>{props.children}</h1>
    )
}
export default H1