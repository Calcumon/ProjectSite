import React from 'react';
import Container from '../Container'
import './styles.scss'
import cutie from '../../assets/cuties/cutie3.png'

const LandingPageFeatureData: LandingPageFeatureProps[] = [
    {
        title: "Kids love it.",
        description: "They steer their car into the right answer while speed racing in our app!",
        image: "",
    },
    {
        title: "Play on the GO",
        description: "On a long car ride? Download our mobile app to play on the GO!",
        image: "",
    },
    {
        title: "Together, we learn",
        description: "Kids can compete with their friends with our multiplayer option! (Coming soon)",
        image: "",
    },
    {
        title: "Shopping? Ooh.",
        description: "Kids can customize their characters using game currency! (Coming Soon)",
        image: "",
    }
]

interface LandingPageFeatureProps {
    title: string;
    description: string;
    image: string;
}

const LandingPageFeature : React.FC<LandingPageFeatureProps> = ({ title, description, image }) => {
    return (
        <div>
            <div>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
            <img src={ image } alt={ title }/>
        </div>
    )
}

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