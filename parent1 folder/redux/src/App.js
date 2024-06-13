import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import './App.css'; 

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <nav className="sidebar">
                        <Link to="/">Home</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/profile">Profile</Link>
                    </nav>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

export default App;

