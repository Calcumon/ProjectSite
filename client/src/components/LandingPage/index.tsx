import React from 'react';
import './styles.scss';
import playIcon from '../../assets/features/play.png';
import friendsIcon from '../../assets/features/play-with-friends.png';
import shopingIcon from '../../assets/features/shop.png';
import cutie from './images/calcumon.png';

import Container from '../Container';
import LandingPageFeature, {LandingPageFeatureProps} from './components/LandingPageFeature'


const LandingPage : React.FC = () => {
    const LandingPageFeatureData: LandingPageFeatureProps[] = [
        {
            title: "Kids love it.",
            description: "They steer their car into the right answer while speed racing in our app!",
            image: friendsIcon,
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
            description: "Kids can compete with their friends with our multiplayer option!",
            image: friendsIcon,
            i: 2,
        },
        {
            title: "Shopping? Ooh.",
            description: "Kids can customize their characters using game currency!",
            image: shopingIcon,
            i: 3,
        }
    ]
    return (
        <Container currentPage="landing" bgColor="whitebg">
            <div className="wrapper">
            <div className="banner">
                <img src={ cutie } alt="A cute little monster"/>
                <div>
                    <h1 className="heading-top"><b>math</b>, but in a</h1>
                    <h1>PLAYGROUND</h1>
                    <button>try the app > </button>
                </div>
            </div>
            </div>
            {/* <div className="banner-divider"></div> */}
            <div className="content-wrapper">
                <div className="intro">
                    <h2>Creative learning is our future.</h2>
                    <p>Calcumon is an interactive learning platform designed for children and teens. 
                        It covers a wide range of mathematical topics from simple addition and 
                        subtraction to complex linear equations. Calcumon employs classic gamification 
                        techniques to encourage self-motivation and promote math practice outside of the classroom.
                    </p>
                </div>
                { LandingPageFeatureData.map(({ title, description, image, i }) => <LandingPageFeature title={ title } 
                                                                                                    description={ description } 
                                                                                                    image={ image }
                                                                                                    i={ i } 
                                                                                        key={ i } /> )}
            </div>
        </Container>
    )
}

export default LandingPage;