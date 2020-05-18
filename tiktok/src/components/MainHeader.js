import React from "react";
import logo from "../images/misodope_black_logo.png";
import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
    </div>
  );
};

export default MainHeader;
