import React from 'react';
import { useSelector } from 'react-redux';
import './Page.css';

const Contact = () => {
    const backgroundColor = useSelector((state) => state.background.backgroundColor);

    return (
        <div className="page" style={{ backgroundColor }}>
            <div className="content-box">
                <h1>Contact Page</h1>
                <img src="picture1.jpg" alt="" />
                <p>The current background color is {backgroundColor}.</p>
            </div>
        </div>
    );
};

export default Contact;
