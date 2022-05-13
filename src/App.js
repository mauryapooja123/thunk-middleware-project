import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Registration from "./components/home/Registration";
import User from "./components/home/User";
import AllData from "./components/home/AllData";
import View from "./components/home/View";
//import Data from "./components/home/Data";
//import Home from "./components/home/Home";
import GetData from "./components/home/GetData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/getdata" element={<GetData />}
        {/* <Route path="/" element={<Registration />} /> */}

        {/* <Route path="/" element={<Registration />}></Route> */}
        {/* <Route path="/" element={<User />}></Route>
        <Route path="/alldata" element={<AllData />}></Route>
        <Route path="/viewdata" element={<View />}></Route> */}
        {/* <Route path="/data" element={<Data />}></Route> */}
        <Route path="/getdata" element={<GetData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
