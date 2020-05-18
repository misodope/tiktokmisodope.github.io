import "./Social.scss";
import React from "react";

const socialObject = {
  tiktok: {
    icon: <img src="https://img.icons8.com/ios/50/000000/tiktok.png" alt="Tiktok Icon" />,
    name: <a href="https://www.tiktok.com/@misodope/">@misodope</a>,
  },
  instagram: {
    icon: <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Instgram Icon" />,
    name: <a href="https://www.instagram.com/jerrrychen/">@jerrrychen</a>,
  },
  github: {
    icon: <img src="https://img.icons8.com/ios/50/000000/github.png" alt="Github Icon" />,
    name: <a href="https://github.com/misodope">@misodope</a>,
  },
};

export const Social = () => {
  const socials = Object.keys(socialObject).map((social, index) => (
    <div key={social} className={`social__icon animated fadeIn`}>
      {socialObject[social].icon} {socialObject[social].name}
    </div>
  ));

  return <div className="social">{socials}</div>;
};
