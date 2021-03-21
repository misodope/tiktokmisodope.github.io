import React from "react";
import "./Links.scss";

const linkData = [
  {
    title: 'App Academy Open',
    url: 'https://open.appacademy.io/signup/free?utm_source=partner&utm_medium=tiktok&utm_campaign=miso-dope&utm_content=open',
  },
  {
    title: 'Candor',
    url: 'https://candor.co/offers',
  },
  {
    title: 'Lepow Portable Monitor',
    url: 'https://tiktech.com/products/15-6-inch-lepow-full-hd-1080p-portable-led-monitor-with-hdmi-type-c',
  },
  {
    title: 'ASUS ProArt Monitors',
    url: 'https://bit.ly/tt-ASUSxmisodope',
  },
  {
    title: 'FlexiSpot Standing Desks',
    url: 'http://flexispot.refr.cc/misodope',
  },
];

export const Links = () => {
  const linkElements = linkData.map((link) => {
    return (
        <a className=" link link__button" href={link.url}>{link.title}</a>
    )
  });

  return (
    <div className="links">
      {linkElements}
    </div>
  );
};
