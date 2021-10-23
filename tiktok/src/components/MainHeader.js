import React from "react";
import logo from "../images/head@3x.png";
import "./MainHeader.scss";


const MainHeader = () => {
  return (
    <div className="header">
      <div className="mobile-header">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <div className="">@misodope</div>
        <div className="text-lg flex flex-col items-center">
          E-mail for all business inquiries:
          <a className="flex items-center font-bold" href="mailto:jerry@misodope.com">
            <img className="w-8 h-8 mr-2" src="https://img.icons8.com/color/48/000000/message-squared.png"/>
            jerry@misodope.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
