import React from 'react';
import Container from '../Container'
import styles from './styles.scss'

const LandingPage : React.FC = () => {
    return (
        <Container bgColor={ styles.green } currentPage="landing">
            <p> Hello World </p>
        </Container>
    )
}

export default LandingPage;