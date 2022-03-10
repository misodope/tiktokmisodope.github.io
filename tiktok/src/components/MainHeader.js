import React from "react";
import logo from "@images/Head2022.png";
import "./MainHeader.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MainHeader = () => {
  return (
    <div className="header">
      <div className="mobile-header">
        <img className="w-32 h-32 mb-5" src={logo} alt="logo" />
        <div className="text-xl tracking-wider">@MisoDope</div>
        <div className="text-sm flex flex-col items-center">
          <p>Digital Creator</p>
          <p>Full Stack Engineer</p>
        </div>
        <div className="flex flex-col items-center text-sm my-4">
          <p>E-mail for all business inquiries</p>
          <a className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-base" />
            <p>jerry@misodope.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
