import "./Social.scss"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTiktok,
  faYoutube,
  faDiscord,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const socialObject = {
  tiktok: {
    icon: (
      <a href="https://www.tiktok.com/@misodope/">
        <FontAwesomeIcon
          icon={faTiktok}
          className="h-10 w-10"
          role="button"
          aria-label="Link to TikTok"
        />
      </a>
    ),
  },
  instagram: {
    icon: (
      <a href="https://www.instagram.com/miso.dope/">
        <FontAwesomeIcon
          icon={faInstagram}
          className="h-10 w-10"
          role="button"
          aria-label="Link to Instagram"
        />
      </a>
    ),
  },
  youtube: {
    icon: (
      <a href="https://www.youtube.com/misodope/">
        <FontAwesomeIcon
          icon={faYoutube}
          className="h-10 w-10"
          role="button"
          aria-label="Link to YouTube"
        />
      </a>
    ),
  },
  github: {
    icon: (
      <a href="https://github.com/misodope">
        <FontAwesomeIcon
          icon={faGithub}
          className="h-10 w-10"
          role="button"
          aria-label="Link to Github"
        />
      </a>
    ),
  },
  discord: {
    icon: (
      <a href="https://discord.gg/2FS5rsM">
        <FontAwesomeIcon
          icon={faDiscord}
          className="h-10 w-10"
          role="button"
          aria-label="Link to Discord"
        />
      </a>
    ),
  },
}

export const Social = () => {
  const socials = Object.keys(socialObject).map((social, _) => (
    <div key={social} className="mx-3">
      {socialObject[social].icon}
    </div>
  ))

  return <div className="flex justify-center items-center my-6">{socials}</div>
}
