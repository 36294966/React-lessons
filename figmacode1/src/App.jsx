import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MoreInfo from "./Pages/SignMint/MoreInfo";
import Marketplace from "./Pages/SignMint/Marketplacesignmint";
import MarketplaceMint from "./Pages/MINT/MarketplaceMint";
import MarketplaceMinted from "./Pages/MINTED/MarketplaceMinted";
import MoreInfoMinted from "./Pages/MINTED/MoreInfoMinted";
import MarketplaceCongratulation from "./Pages/Congratulation/MarketplaceCongratulation";
import Marketplacenoteligible from  "./Pages/MINTnoteligible/Marketplacenoteligible";
import Marketplacesignmint from  "./Pages/SignMint/Marketplacesignmint";
import Marketplacesignup  from "./Pages/Signupmint/Marketplacesignup";
import Marketplaceverifyopt from "./Pages/Marketplaceverifyopt/Marketplaceverifyopt";
import Marketplaceuserdetails from "./Pages/UserDetails/Marketplaceuserdetails";
import  Marketplacebindwallet from  "./Pages/Bindwallet/Marketplacebindwallet";
const App = () => {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path ="Marketplacebindwallet" element ={<Marketplacebindwallet/>}/>
        <Route path="Marketplaceuserdetails" element ={<Marketplaceuserdetails/>}/>
        <Route path="Marketplaceverifyopt" element ={<Marketplaceverifyopt/>}/>
        <Route path ="/Marketplacesignup" element ={<Marketplacesignup/>}/>
        <Route path ="/Marketplacesignmint" element={<Marketplacesignmint/>}/>
        <Route path="/Marketplacenoteligible" element={< Marketplacenoteligible/>}/>
        <Route path="/MarketplaceCongratulation" element ={<MarketplaceCongratulation/>}/>
      <Route path="/MoreInfoMinted" element ={<MoreInfoMinted/>}/>
        <Route path="/MarketplaceMinted" element ={<MarketplaceMinted/>}/>
        <Route path ="/MarketplaceMint" element={<MarketplaceMint/>} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/more-info" element={<MoreInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
