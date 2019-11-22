import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';



interface ContainerInterface {
    currentPage: string,
    bgColor: string,
}

interface IState {
    width: number,
    height: number,
    mobileMenuIsOpen: boolean,
  }
  

class Container extends React.Component<ContainerInterface, IState> {

    constructor(props:ContainerInterface) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0,
            mobileMenuIsOpen: false,
         };

         
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        
        const { currentPage, bgColor, children } = this.props
        return (<div className={ bgColor }>
            { (this.state.width < 950) ? (<MobileNavbar/>) : (<Navbar selected={ currentPage }/>)}
            
            { children }
            <Footer />
        </div>
        )
    }
}

export default Container;