import React from "react";
import tiktok from "../images/tiktok.png";
import "./TikTok.scss";

const TikTok = () => {
  return (
    <div className="tiktok">
      <img className="tiktok__image" src={tiktok} alt="tiktok image" />
      <div className="tiktok__background" />
    </div>
  );
};

export default TikTok;
