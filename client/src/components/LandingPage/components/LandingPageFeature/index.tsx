import React from 'react';
import './styles.scss';

export interface LandingPageFeatureProps {
    title: string;
    description: string;
    image: string;
    i: number;
}

const LandingPageFeature: React.FC<LandingPageFeatureProps> = ({ title, description, image, i }) => {
    if (i % 2 === 0) {
        return <div className="feature">
            <div className="featureText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} />
        </div>
    }

    return (
        <div className="feature">
            <img src={image} alt={title} />
            <div className="featureText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default LandingPageFeature;