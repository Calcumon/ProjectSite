import React from 'react';
import Container from '../Container'
import './styles.scss'
import cutie from '../../assets/cuties/cutie3.png'

const LandingPage : React.FC = () => {
    return (
        <Container bgColor={ "greenbg" } currentPage="landing">
            <div className="banner">
                <img className={"bannerMonster"} src={ cutie } alt="A cute little monster"/>
                <div>
                    <h1>MATH, BUT IN A</h1>
                    <h1>PLAYGROUND</h1>
                    <button>TRY THE APP > </button>
                </div>
            </div>
        </Container>
    )
}

export default LandingPage;