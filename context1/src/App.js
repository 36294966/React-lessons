import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BackgroundColorProvider } from "./BackgroundColorContext";
import Contact from "./Contactpage/Contact";
import Home from "./Homepage/Home";
import Profile from "./Profilepage/Profile";
import Users from "./Userpage/Users";

const App = () => {
  return (
    <BackgroundColorProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </BackgroundColorProvider>
  );
};

export default App;
