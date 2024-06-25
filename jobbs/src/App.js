import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import About from "./Pages/About";
import Dream from "./Components/Dream";

const App = () => {
  return (
  
      <Router>
      
        <Navbar />
        <Dream/>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </Router>
    
  );

};

export default App;

