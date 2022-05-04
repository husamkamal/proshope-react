import "./App.css";
import {Component} from "react";
import Home from "./Components/Screens/Home"
import { Routes, Route } from "react-router-dom"
import Shopping from "./Components/Screens/Shopping";
import ReviewOrder from "./Components/Screens/Revieworder";
import Empty from "./Components/Screens/Empty";
import Place from "./Components/Screens/PlacePage";
import Success from "./Components/Screens/Success";
import Search from "./Components/Screens/Search";
import Login from "./Components/Screens/login";
class App extends Component {
  render(){
  return (
    <div className="App">
      <Routes >
        < Route path="/" element={<Home />} />
        < Route path="/shopping" element={<Shopping />} />
        < Route path="/revieworder" element={<ReviewOrder />} />
        < Route path="/empty" element={<Empty />} />
        < Route path="/place" element={<Place />} />
        < Route path="/success" element={<Success />} />
        < Route path="/search" element={<Search />} />
        < Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )};
}

export default App;
