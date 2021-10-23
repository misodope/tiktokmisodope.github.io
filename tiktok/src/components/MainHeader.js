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
        <div className="text-lg flex flex-col items-center">
          E-mail for all business inquiries:
          <a className="flex items-center font-bold" href="mailto:jerry@misodope.com">
            <img className="w-8 h-8 mr-2" src="https://img.icons8.com/color/48/000000/message-squared.png"/>
            jerry@misodope.com
          </a>
        </div>
      </div>
      <div className="desktop-header">
        <img className="desktop-header__logo" src={misodope}/>
        <Social />
      </div>
    </div>
  );
};

export default MainHeader;
