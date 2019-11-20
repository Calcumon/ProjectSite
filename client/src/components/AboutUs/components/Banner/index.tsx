import React from 'react';
import './styles.scss';
import BannerWrapper from '../../../BannerWrapper'
import cutie from '../../../../assets/cuties/cutie3.png'

const Banner : React.FC = () => {
    return (
        <BannerWrapper image={cutie}>
            <h1 className="mission">Our mission is to creatively reshape the learning process.</h1>
        </BannerWrapper>
    )
}

export default Banner;
