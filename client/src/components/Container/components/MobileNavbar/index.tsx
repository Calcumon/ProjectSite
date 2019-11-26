import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import './styles.scss';
import blackLogo from '../../../../assets/logo/black.png';
import purpleLogo from '../../../../assets/logo/purple.png';

class MobileNavbar extends Component {
    render() {
        return (
        <div>
        <div className="block">

        
        <div className="logo"><Link to="/"> <img src={ blackLogo } alt="our logo" width="200px"/> </Link></div>
        </div>
        
        <Menu right>
            <ul className="navbar-mobile">
            
            
            
            <li><Link to="/"> HOME </Link> </li>
        <li><Link to="/about"> ABOUT US </Link> </li>
        
        </ul>
        </Menu>
        
        
        </div>
        )
    }
  }

export default MobileNavbar 