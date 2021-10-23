import React from "react";
import "./Links.scss";
import zipRecruiterIcon from "../images/ZipRecruiter.png";
import blind from "../images/Blind.png";
import aa from "../images/AppAcademy.png";
import FlexiSpot from "../images/FlexiSpot.png";

const linkData = [
  {
    icon: zipRecruiterIcon,
    title: 'Join ZipRecruiter and get employed',
    url: 'https://www.ziprecruiter.com/misodope',
  },
  {
    icon: blind,
    title: 'Download the Blind App',
    url: 'https://teamblind.onelink.me/enIS/misodope',
  },
  {
    icon: "https://img.icons8.com/color/48/000000/tiktok--v1.png",
    title: `Going for 500K LETS GOOO!!`,
    url: 'https://www.ziprecruiter.com/misodope',
  },
  {
    icon: "https://img.icons8.com/color/48/000000/instagram-new--v1.png",
    title: "see a more daily part of my life",
    url: 'https://www.instagram.com/miso.dope/',
  },
  {
    icon: "https://img.icons8.com/color/48/000000/youtube-play.png",
    title: "Checkout my YouTube!!",
    url: 'https://www.youtube.com/misodope',
  },
  {
    icon: aa,
    title: 'App Academy Open to learn code',
    url: 'https://open.appacademy.io/signup/free?utm_source=partner&utm_medium=tiktok&utm_campaign=miso-dope&utm_content=open',
  },
  {
    icon: FlexiSpot,
    title: 'FlexiSpot Standing Desks',
    url: 'http://flexispot.refr.cc/misodope',
  },
];

export const Links = () => {
  const linkElements = linkData.map((link) => {
    return (
        <a className="flex items-center link link__button" href={link.url}>
          <img className="rounded-full mr-5 w-8 h-8" src={link.icon}/>
          {link.title}
        </a>
    )
  });

  return (
    <div className="links">
      {linkElements}
    </div>
  );
};
