import "./MainHeader.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import profile from "@images/Head2022.png";
import boop from "@images/misodope_logo_169.png";

const MainHeader = () => {
  return (
    <div className="header">
      <div className="mobile-header">
        <img className="w-32 h-32 mb-5" src={boop} alt="profile picture" />
        <p className="text-xl tracking-wider flex justify-center items-center">@MisoDope</p>
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
