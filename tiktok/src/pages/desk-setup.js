import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const setup = {
  Desk: {
    name: "Wayfair Standing Desk",
    link: <a href="http://google.com">Get this product here</a>,
    img: null,
  },
  Monitor: {
    name: "LG UC80 34 Inch Ultrawide",
    link: <a href="http://google.com">Get this product here</a>,
    img: null,
  },
  Computer: {
    name: "Macbook Pro",
    link: <a href="http://google.com">Get this product here</a>,
    img: null,
  },
  Keyboard: {
    name: "Apple Keyboard 2",
    link: <a href="http://google.com">Get this product here</a>,
    img: null,
  },
  Mouse: {
    name: "Apple Mouse 2",
    link: <a href="http://google.com">Get this product here</a>,
    img: null,
  },
  Sound: {
    name: "Logitech Sound System",
    link: <a href="http://google.com">Get this product here</a>,
    img: null,
  },
}

const setupElements = Object.entries(setup).map(([key, item]) => {
  return (
    <div className="setup-item" key={key}>
      <div className="setup-item__header">
        {key} - {item.name}
      </div>
      <div className="setup-item__link">{item.link}</div>
      <div className="setup-item__image">{item.img}</div>
    </div>
  )
})

const DeskSetup = () => {
  return (
    <Layout>
      <SEO title="desk setup affiliate links" />
      {setupElements}
    </Layout>
  )
}

export default DeskSetup
