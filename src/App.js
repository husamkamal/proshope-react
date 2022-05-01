import "./App.css";
import {Component} from "react";
import Home from "./Components/Screens/Home"
import { Routes, Route } from "react-router-dom"
import Shopping from "./Components/Screens/Shopping";
class App extends Component {
  render(){
  return (
    <div className="App">
      <Routes >
        < Route path="/" element={<Home />} />
        < Route path="/shopping" element={<Shopping />} />
      </Routes>
      
    </div>
  )};
}

export default App;
