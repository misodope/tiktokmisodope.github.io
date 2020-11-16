import "./index.scss";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Social } from "../components/Social";
import TikTok from "../components/TikTok";
import Emails from "../components/Emails";

const IndexPage = () => (
  <Layout>
    <div className="main">
      <SEO title="Home" />
      <div className="main__container animated fadeIn">
        <div className="main__header">
          <h1 className="main__description">
            Full Stack<br />Developer
          </h1>
          <h1 className="main__description">
            TikTok<br />Content Creator
          </h1>
        </div>
<<<<<<< HEAD
        <div className="main__about">
          Don't forget to check out new videos daily.
          <br />
          Join our family and don't forget to follow for more content.
          <br />
          <a className="main__asus" href="https://bit.ly/tt-ASUSxmisodope">ASUS ProArt Monitors</a>
        </div>
        <Emails />
        <div className="main__social-footer">
          <Social />
=======
        <div className="main__join">
          Join our family and subscribe for more content.
>>>>>>> fe0991f230243a0cb33196e57671536de4efde2c
        </div>
        <Emails />
      </div>
      <div className="main__video">
        <TikTok />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
