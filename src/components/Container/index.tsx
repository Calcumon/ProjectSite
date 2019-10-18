import React from 'react';
import classNames from 'classnames';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles.scss';

// TODO: What will be in our LoginInterface?
interface ContainerInterface {
    currentPage: string,
    bgColor: string,
}

const Container : React.FC<ContainerInterface> = ({ currentPage, bgColor, children }) => {
    return (
        <div className={ classNames(bgColor, styles.container) }>
            <Navbar selected={ currentPage }/>
            { children }
            <Footer />
        </div>
    )
}

export default Container;