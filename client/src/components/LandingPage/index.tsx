import React, { useState } from "react";
import "./styles.scss";
import kidIcon from "../../assets/features/kid-icon.png";
import multiPlayerIcon from "../../assets/features/multi-player-icon.png";
import analyticsIcon from "../../assets/features/analytics-icon.png";
import mobileIcon from "../../assets/features/mobile-icon.png";
import bannerImage from "../../assets/banner/banner.png";
import appButton from "../../assets/buttons/goToApp.png";
import webButton from "../../assets/buttons/goToWeb.png";
import Container from "../Container";
import LandingPageFeature, {
  LandingPageFeatureProps
} from "./components/LandingPageFeature";
import BannerWrapper from "../BannerWrapper";

import * as smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const LandingPage: React.FC = () => {
  const [scrollToBottom, setScrollToBottom] = useState(false);

  const LandingPageFeatureData: LandingPageFeatureProps[] = [
    {
      title: "Kids love it.",
      description:
        "The gamified experience excites kids as they solve math problems to rescue different calcumon creatures.",
      image: kidIcon,
      i: 0
    },
    {
      title: "Together, we learn",
      description:
        "Kids feel motivated to play when competing with their friends using our multiplayer option!",
      image: multiPlayerIcon,
      i: 1
    },
    {
      title: "Moniter Growth",
      description:
        "Parents recieve weekly progress updates and learning growth analytics for their child.",
      image: analyticsIcon,
      i: 2
    },
    {
      title: "Play on the GO",
      description:
        "On a long car ride? Download our mobile app to play on the GO!",
      image: mobileIcon,
      i: 3
    }
  ];

  if (scrollToBottom) {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <Container currentPage="landing" bgColor="whitebg">
      <BannerWrapper image={bannerImage}>
        <h1 className="heading-top">
          <b>math</b>, but in a
        </h1>
        <h1>PLAYGROUND</h1>
        <button
          onClick={() => setScrollToBottom(true)}
          className="banner-button"
        >
          join the waitlist
        </button>
      </BannerWrapper>
      <div className="content-wrapper">
        <div className="intro">
          <h2>Creative learning is our future.</h2>
          <p>
            Calcumon is an interactive learning platform designed for kids.
            Calcumon guides them through simple math topics like addition and
            subtraction all the way up to college level algebra. Calcumon
            employs a dynamic and engaging gamification model to encourage
            self-motivation and instill a passion for solving real world
            problems with math.
          </p>
          <div className="landing-buttons">
            <a
              target="blank"
              href="https://apps.apple.com/us/app/calcumon/id1455381436"
            >
              <img src={appButton} />
            </a>
            <a target="blank" href="http://calcumongame.herokuapp.com/">
              <img src={webButton} />
            </a>
          </div>
        </div>
        {LandingPageFeatureData.map(({ title, description, image, i }) => (
          <LandingPageFeature
            title={title}
            description={description}
            image={image}
            i={i}
            key={i}
          />
        ))}
      </div>
    </Container>
  );
};

export default LandingPage;
