import React from 'react';
import './styles.scss';
import Container from '../Container';
import Banner from './components/Banner'
const AboutUs : React.FC = () => {
    return (
        <Container currentPage="aboutus" bgColor="whitebg">
            <Banner />
        </Container>
    )
}

export default AboutUs;
