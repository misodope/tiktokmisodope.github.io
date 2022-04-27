import React from "react"

import logo from "@images/misodope_logo_169.png"

const Footer = () => {
  return (
    <footer className="p-5 flex items-center justify-center">
      <img className="w-12 h-12" src={logo} alt="profile picture" />
      <div className="text-sky-400 text-sm tracking-wider">
        Code, Careers, Cringe.
      </div>
    </footer>
  )
}

export default Footer
