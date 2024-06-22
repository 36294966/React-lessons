import React, { useState } from "react";
import "./App.css";
import Login from "./Components/login";
import Profile from "./Components/profile";
import { loginContext } from "./Contexts/loginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <loginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </loginContext.Provider>
    </div>
  );
}

export default App;
