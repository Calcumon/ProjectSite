import React from 'react';
import './styles.scss';
import cutie from '../../assets/cuties/cutie3.png';
import Container from '../Container';


const LandingPage : React.FC = () => {

    return (
        <Container currentPage="landing" bgColor="whitebg">
            <div className="banner">
                <img src={ cutie } alt="A cute little monster"/>
                <div>
                    <h1>MATH, BUT IN A</h1>
                    <h1>PLAYGROUND</h1>
                    <button>TRY THE APP > </button>
                </div>
            </div>
            <div className="banner-divider"></div>
        </Container>
    )
}

export default LandingPage;