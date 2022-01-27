import React from "react";
import logo from "../images/misodope_logo_169.png";
import "./MainHeader.scss";


const MainHeader = () => {
  return (
    <div className="header">
      <div className="mobile-header">
        <img className="w-30 h-30" src={logo} alt="logo" />
        <div className="text-xl tracking-wider">@MisoDope</div>
        <div className="text-sm flex flex-col items-center">
          <p>Digital Creator</p>
          <p>Full Stack Engineer</p>
        </div>
        <div className="flex flex-col items-center text-sm my-4">
          <p>E-mail for all business inquiries</p>
          <a>jerry@misodope.com</a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
