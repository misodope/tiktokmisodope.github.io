import "./index.scss";

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Social } from "../components/Social"
import logo from "../images/misodope_black_logo.png";
import logo2 from "../images/misodope_logo_yellow.png";

const IndexPage = () => (
  <Layout>
    <div className="main">
      <SEO title="Home" />
      <div className="main__container animated fadeIn">
        <div className="main__header">
          <h1 className="main__name">
            <span> I'm</span><span>Jerri</span>
          </h1>
        </div>
        <div className="main__logo" />
        <div className="main__about">
          I like to make video content on TikTok and build Software.
        </div>
        <div className="main__about-2">
          Feel free to stop by my other social platforms and say hi.
        </div>
        <div className="main__social-footer">
          <Social/>
        </div>
      </div>
    </div>
  </Layout>
)


export default IndexPage
