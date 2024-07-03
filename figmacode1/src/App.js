
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Marketplace from "./Pages/Marketplace";
import MoreInfo from "./Pages/MoreInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/more-info" element={<MoreInfo />} />
      </Routes>
    </Router>
  );
};

export default App;

