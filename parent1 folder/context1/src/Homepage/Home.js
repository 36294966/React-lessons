import React from 'react';
import { useBackgroundColor } from '../BackgroundColorContext';
import './Home.css'; 
const Home = () => {
    const { backgroundColor, setBackgroundColor } = useBackgroundColor();

    return (
        <div style={{ backgroundColor, height: '100vh' }}>
            <h1>Home Page</h1>
            <button onClick={() => setBackgroundColor('red')}>Change Background to red</button>
            <p>The current background color is {backgroundColor}.</p>
        </div>
    );
};

export default Home;
