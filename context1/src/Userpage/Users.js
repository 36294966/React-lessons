import React from 'react';
import { useBackgroundColor } from '../BackgroundColorContext';
import './Users.css'; 
const Users = () => {
    const { backgroundColor, setBackgroundColor } = useBackgroundColor();

    return (
        <div style={{ backgroundColor, height: '100vh' }}>
            <h1>Users Page</h1>
            <button onClick={() => setBackgroundColor('green')}>Change Background to Green</button>
            <p>The current background color is {backgroundColor}.</p>
        </div>
    );
};

export default Users;
