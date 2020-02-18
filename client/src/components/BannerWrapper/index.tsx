import React from "react";
import "./styles.scss";

interface BannerWrapperInterface {
  image: string;
}

const BannerWrapper: React.FC<BannerWrapperInterface> = ({
  image,
  children
}) => {
  return (
    <div className="wrapper">
      <div className="banner">
        <img src={image} alt="Banner Image" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BannerWrapper;
