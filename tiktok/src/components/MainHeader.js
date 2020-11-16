import React from "react";
import logo from "../images/head@3x.png";
import misodope from "../images/misodope_black_logo.png";
import { Social } from "./Social";
import "./MainHeader.scss";


const MainHeader = () => {
  return (
    <div className="header">
      <div className="mobile-header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__username">@misodope</div>
        <Social />
      </div>
      <div className="desktop-header">
        <img className="desktop-header__logo" src={misodope}/>
      </div>
    </div>
  );
};

export default MainHeader;
