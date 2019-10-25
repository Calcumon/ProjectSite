import React from 'react';
import './styles.scss';
import blackLogo from '../../../../assets/logo/black.png';
import purpleLogo from '../../../../assets/logo/purple.png';

// TODO: What will be in our LoginInterface?
interface NavbarInterface {
    selected: string;
}

const Navbar : React.FC<NavbarInterface> = ({ selected }) => {
    const logo = selected === 'landing' ? purpleLogo : blackLogo;
    return (
        <div className="navbar-container">
            <ul className="navbar">
                {/* <li> Milestones </li> */}
                {/* <li> FAQ </li> */}
                {/* <li> Team </li> */}
                {/* <li> Story </li> */}
                <li> <img src={ logo } alt="our logo" /></li>
            </ul>
        </div>
    )
}

export default Navbar;