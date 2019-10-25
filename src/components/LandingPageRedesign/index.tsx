import React from 'react';
import './styles.scss';
import cutie from '../../assets/cuties/cutie3.png';
import playIcon from '../../assets/features/play.png';
import friendsIcon from '../../assets/features/play-with-friends.png';
import shopingIcon from '../../assets/features/shop.png';

import Container from '../Container';


interface LandingPageFeatureProps {
    title: string;
    description: string;
    image: string;
    i: number;
}

export const LandingPageFeature : React.FC<LandingPageFeatureProps> = ({ title, description, image, i }) => {
    if (i%2 === 0) {
        return <div className="feature hardwhitebg">
            <div className="featureText">
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
            <img src={ image } alt={ title }/>
        </div>
    }
    
    return (
        <div className="feature hardwhitebg">
            <img src={ image } alt={ title }/>
            <div className="featureText">
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    )
}


const LandingPage : React.FC = () => {
    const LandingPageFeatureData: LandingPageFeatureProps[] = [
        {
            title: "Kids love it.",
            description: "They steer their car into the right answer while speed racing in our app!",
            image: "",
            i: 0,
        },
        {
            title: "Play on the GO",
            description: "On a long car ride? Download our mobile app to play on the GO!",
            image: playIcon,
            i: 1,
        },
        {
            title: "Together, we learn",
            description: "Kids can compete with their friends with our multiplayer option! (Coming soon)",
            image: friendsIcon,
            i: 2,
        },
        {
            title: "Shopping? Ooh.",
            description: "Kids can customize their characters using game currency! (Coming Soon)",
            image: shopingIcon,
            i: 3,
        }
    ]

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
            <div className="intro">
                <h2>Creative learning is our future.</h2>
                <p>some phrase here about stuff you got this oo.h.agwrg awgwa
                    wagrawgawrga wagwefw wagwf wgwfwa wefgwfweagwag waawgwarg 
                    wagrwa
                </p>
            </div>
            { LandingPageFeatureData.map(({ title, description, image, i }) => <LandingPageFeature title={ title } 
                                                                                                   description={ description } 
                                                                                                   image={ image }
                                                                                                   i={ i } 
                                                                                                   key={ i } /> )}
        </Container>
    )
}

export default LandingPage;