import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./DownArrow.scss"

export const DownArrow = () => {
  return (
    <div className="down-arrow animated fadeIn slower infinite delay-2s">
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  )
}
