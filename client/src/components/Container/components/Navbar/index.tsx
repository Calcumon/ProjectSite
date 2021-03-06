import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import blackLogo from '../../../../assets/logo/black.png';
import purpleLogo from '../../../../assets/logo/purple.png';

interface NavbarInterface {
    selected: string;
}

const Navbar : React.FC<NavbarInterface> = ({ selected }) => {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                {/* <li> Milestones </li> */}
                {/* <li> FAQ </li> */}
                {/* <li> Team </li> */}
                <li><Link to="/"> <img src={ blackLogo } alt="our logo" 
                onMouseOver={(e) => e.currentTarget.src = purpleLogo}
                onMouseOut={(e) => e.currentTarget.src = blackLogo}
                
                /> </Link></li>
                <li><Link to="/about"> ABOUT US </Link> </li>
            </ul>
        </div>
    )
}

export default Navbar;