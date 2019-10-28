import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface ContainerInterface {
    currentPage: string,
    bgColor: string,
}

const Container : React.FC<ContainerInterface> = ({ currentPage, bgColor, children }) => {
    return (
        <div className={ bgColor }>
            <Navbar selected={ currentPage }/>
            { children }
            <Footer />
        </div>
    )
}

export default Container;