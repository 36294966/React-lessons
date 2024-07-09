import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MoreInfo from "./Pages/SignMint/MoreInfo";
import Marketplace from "./Pages/SignMint/Marketplace";
import MarketplaceMint from "./Pages/MINT/MarketplaceMint";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/MarketplaceMint" element={<MarketplaceMint/>} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/more-info" element={<MoreInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
