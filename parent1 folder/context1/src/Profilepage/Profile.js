import React from 'react';
import { useBackgroundColor } from '../BackgroundColorContext';
import './Profile.css'; 
const Profile = () => {
    const { backgroundColor, setBackgroundColor } = useBackgroundColor();

    return (
        <div style={{ backgroundColor, height: '100vh' }}>
            <h1>Profile Page</h1>
            <button onClick={() => setBackgroundColor('purple')}>Change Background to Purple</button>
            <p>The current background color is {backgroundColor}.</p>
        </div>
    );
};

export default Profile;
