import "./Social.scss";
import React from "react";

const socialObject = {
  discord: {
    icon: <img src="https://img.icons8.com/ios/50/FFFFFF/discord-logo.png" alt="Discord"/>,
    name: <a href="https://discord.gg/2FS5rsM"><img src="https://img.icons8.com/ios/24/13509d/discord-logo.png" alt="Discord"/></a>
  },
  tiktok: {
    icon: <img src="https://img.icons8.com/ios/50/FFFFFF/tiktok.png" alt="Tiktok" />,
    name: <a href="https://www.tiktok.com/@misodope/"><img src="https://img.icons8.com/ios/24/13509d/tiktok.png" alt="Tiktok" /></a>,
  },
  instagram: {
    icon: <img src="https://img.icons8.com/ios/50/FFFFFF/instagram-new.png" alt="Instgram" />,
    name: <a href="https://www.instagram.com/jerrrychen/"><img src="https://img.icons8.com/ios/24/13509d/instagram-new.png" alt="Instgram" /></a>,
  },
  github: {
    icon: <img src="https://img.icons8.com/ios/50/FFFFFF/github.png" alt="Github" />,
    name: <a href="https://github.com/misodope"><img src="https://img.icons8.com/ios/24/13509d/github.png" alt="Github" /></a>,
  },
};

export const Social = () => {
  const socials = Object.keys(socialObject).map((social, _) => (
    <div key={social} className={`social__icon animated fadeIn`}>
      {socialObject[social].name}
    </div>
  ));

  return <div className="social">{socials}</div>;
};
