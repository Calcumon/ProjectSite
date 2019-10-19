import React from 'react';

import './styles.scss';
// TODO: What will be in our LoginInterface?
interface FooterInterface {
}

const Footer : React.FC<FooterInterface> = () => {
    return (
        <div className="footer-container">
            <h2>WE'RE LAUNCHING SOON!</h2>
            <div>
                <input placeholder="Enter your email"></input>
                <button>JOIN THE WAITLIST</button>
            </div>
        </div>
    )
}

export default Footer;