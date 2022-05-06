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
import Signup from "./Components/Screens/signup";
import Iphon from "./Components/Screens/Iphon";
import Airpods from "./Components/Screens/Airpods";
import Ps4 from "./Components/Screens/Ps4";
import Mouse from "./Components/Screens/Mouse";
import Cam from "./Components/Screens/Cam";
import Amazon from "./Components/Screens/Amazon";
import Profile from "./Components/Screens/Profile";
import ProductscRUD from "./Components/Screens/ProductsCRUD";
import Productcreat from "./Components/Screens/Productcreat";
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
        < Route path="/signup" element={<Signup />} />
        < Route path="/iphon" element={<Iphon />} />
        < Route path="/airpods" element={<Airpods />} />
        < Route path="/ps4" element={<Ps4 />} />
        < Route path="/mouse" element={<Mouse />} />
        < Route path="/cam" element={<Cam />} />
        < Route path="/amazon" element={<Amazon />} />
        < Route path="/profile" element={<Profile />} />
        < Route path="/tabel" element={<ProductscRUD />} />
        
      </Routes>
      
    </div>
  )};
}

export default App;
