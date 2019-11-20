import React from 'react';
import Container from '../Container';
import Banner from './components/Banner';
import Story from './components/Story';

const AboutUs : React.FC = () => {
    return (
        <Container currentPage="aboutus" bgColor="whitebg">
            <Banner />
            <Story />
        </Container>
    )
}

export default AboutUs;
