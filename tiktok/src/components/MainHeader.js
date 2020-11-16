import React from "react";
import logo from "../images/head@3x.png";
import { Social } from "./Social";
import "./MainHeader.scss";


const MainHeader = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__username">@misodope</div>
      <Social />
    </div>
  );
};

export default MainHeader;
