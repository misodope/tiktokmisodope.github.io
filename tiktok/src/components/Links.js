import React from "react";

import classNames from "classnames";

import "./Links.scss";
import zipRecruiterIcon from "../images/ZipRecruiter.png";
import blind from "../images/Blind.png";
import aa from "../images/AppAcademy.png";
import FlexiSpot from "../images/FlexiSpot.png";
import replit from "../images/ReplitLogo.png";
import excel from "../images/excellogo.jpeg";
import aws from "../images/aws.png";

const linkData = [
  {
    icon: aws,
    title: "Amazon Web Services - Architecture Center",
    url: "https://viraln.link/JC_AWS_TT2",
    className: "w-10 h-10 mr-2",
  },
  {
    icon: aws,
    title: "Amazon Web Services - Observability",
    url: "https://viraln.link/JC_AWS_TT1",
    className: "w-10 h-10 mr-2",
  },
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
    icon: excel,
    title: "Job Search Template",
    url: "https://docs.google.com/spreadsheets/d/1ipEvKRYzXIS3ERa9FE5Iw7appsNLAfJpelDEE4r9nus",
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
  const linkElements = linkData.map((link, i) => {
    const imgClass = classNames("rounded-full mr-5 w-8 h-8", { [link.className]: Boolean(link.className) });

    return (
      <a className="flex items-center link link__button cursor-pointer" href={link.url} key={i}>
        <img className={imgClass} src={link.icon} />
        {link.title}
      </a>
    );
  });

  return <div className="links w-full">{linkElements}</div>;
};
