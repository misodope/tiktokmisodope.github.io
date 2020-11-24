import React from "react";
import "./Links.scss";

const linkData = [
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
