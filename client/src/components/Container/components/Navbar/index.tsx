import React from 'react';
import './styles.scss';
import blackLogo from '../../../../assets/logo/black.png';

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
                {/* <li> Story </li> */}
                <li> <img src={ blackLogo } alt="our logo" /></li>
            </ul>
        </div>
    )
}

export default Navbar;