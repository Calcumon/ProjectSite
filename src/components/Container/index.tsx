import React from 'react';
import classnames from 'classnames';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.scss';

// TODO: What will be in our LoginInterface?
interface ContainerInterface {
    currentPage: string,
    bgColor: string,
}

const Container : React.FC<ContainerInterface> = ({ currentPage, bgColor, children }) => {
    return (
        <div className={ classnames(bgColor, "full-height") }>
            <Navbar selected={ currentPage }/>
            <div className="container">{ children }</div>
            <Footer />
        </div>
    )
}

export default Container;