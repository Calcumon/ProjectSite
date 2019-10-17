import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles.scss';

// TODO: What will be in our LoginInterface?
interface LandingInterface {
    currentPage: string,
    bgColor: string,
}

const Container : React.FC<LandingInterface> = ({ currentPage, bgColor }) => {
    return (
        <div className={ classnames(bgColor, styles.container) }>
            <Navbar selected={ currentPage }/>
            <Footer />
        </div>
    )
}

export default Container;