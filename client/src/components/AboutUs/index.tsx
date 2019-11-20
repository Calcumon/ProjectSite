import React from 'react';
import Container from '../Container';
import Banner from './components/Banner';
import Story from './components/Story';
import Team from './components/Team';

const AboutUs : React.FC = () => {
    return (
        <Container currentPage="aboutus" bgColor="whitebg">
            <Banner />
            <Story />
            <Team />
        </Container>
    )
}

export default AboutUs;
