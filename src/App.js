import "./App.css";
import {Component} from "react";
import Home from "./Components/Screens/Home"
// import Home from "./Screens/Home";
class App extends Component {
  state={
    cardImg:[{id:"1",name:"ACCESSORIES",url:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},{id:"2",name:"LAPTOP",url:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},{id:"3",name:"COMPUTER COMPONENTS",url:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},{id:"4",name:"DEVICES",url:'https://cdn.pixabay.com/photo/2015'}]
  }
  render(){
  return (
    <div className="App">
      <Home />
    </div>
  )};
}

export default App;
