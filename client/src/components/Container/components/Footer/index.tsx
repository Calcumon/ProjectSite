import React from 'react';

import './styles.scss';
const Footer : React.FC = () => {
    return (
        <div className="footer-container">
            <h2>WE'RE LAUNCHING SOON!</h2>
            <div>
                <input placeholder="enter your email"></input>
                <button>join the waitlist</button>
            </div>
        </div>
    )
}

export default Footer;