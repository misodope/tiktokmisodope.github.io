import React from "react";
import "./Links.scss";
import zipRecruiterIcon from "../images/ZipRecruiter.png";
import blind from "../images/Blind.png";
import aa from "../images/AppAcademy.png";
import FlexiSpot from "../images/FlexiSpot.png";
import replit from "../images/ReplitLogo.png";

const linkData = [
  {
    icon: blind,
    title: "Download Blind - An open space for professionals to talk about ANYTHING",
    url: "https://teamblind.onelink.me/enIS/misodope",
  },
  {
    icon: replit,
    title: "Try Replit the best free online code editor",
    link: "https://repl.it/@misodope/",
  },
  {
    icon: zipRecruiterIcon,
    title: "Join ZipRecruiter and get employed",
    url: "https://www.ziprecruiter.com/misodope",
  },
  {
    icon: aa,
    title: "App Academy Open to learn code",
    url: "https://open.appacademy.io/signup/free?utm_source=partner&utm_medium=tiktok&utm_campaign=miso-dope&utm_content=open",
  },
  {
    icon: FlexiSpot,
    title: "FlexiSpot Standing Desks",
    url: "http://flexispot.refr.cc/misodope",
  },
];

export const Links = () => {
  const linkElements = linkData.map((link) => {
    return (
      <a className="flex items-center link link__button cursor-pointer" href={link.url}>
        <img className="rounded-full mr-5 w-8 h-8" src={link.icon} />
        {link.title}
      </a>
    );
  });

  return <div className="links w-full">{linkElements}</div>;
};
