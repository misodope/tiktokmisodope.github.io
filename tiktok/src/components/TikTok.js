import React, { useState } from "react"
import classNames from "classnames"
import tiktok from "../images/tiktok.png"
import "./TikTok.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faSpinner,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons"
import TikTokVideo from "./TikTokVideo"

const TikTok = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [playClicked, setPlayClicked] = useState(false)

  const onClick = () => {
    setPlayClicked(true)
    setTimeout(() => {
      setShowVideo(true)
    }, 2000)
  }

  const onExit = () => {
    setShowVideo(false)
    setPlayClicked(false)
  }

  const containerClass = classNames("tiktok__container", {
    "tiktok__container--hide": showVideo,
  })

  const closeIconClass = classNames("tiktok__close", {
    "tiktok__close--show": showVideo,
  })

  const playClass = classNames("tiktok__play", {
    "tiktok__play--hide": playClicked,
  })

  const loaderClass = classNames("tiktok__loader", {
    "tiktok__loader--show": playClicked,
  })

  return (
    <div className="tiktok">
      <div className={containerClass}>
        <img className="tiktok__image" src={tiktok} alt="tiktok" />
        <div className="tiktok__background" />
        <FontAwesomeIcon
          onClick={onClick}
          className={playClass}
          icon={faPlayCircle}
          size="4x"
          color="#fece09"
        />
        <FontAwesomeIcon
          className={loaderClass}
          icon={faSpinner}
          size="4x"
          color="#fece09"
          rotation={90}
        />
      </div>
      <FontAwesomeIcon
        className={closeIconClass}
        icon={faTimes}
        onClick={onExit}
      />
      <TikTokVideo showVideo={showVideo} />
    </div>
  )
}

export default TikTok
