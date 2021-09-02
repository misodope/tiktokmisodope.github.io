import "./index.scss";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Emails from "../components/Emails";
import { Links } from "../components/Links";

const IndexPage = () => (
  <Layout>
    <div className="main">
      <SEO title="Home" />
      <div className="main__container animated fadeIn">
        <div className="desktop-title desktop-title-miso">MISO</div>
        <div className="main__header">
          <h1 className="main__description">
            Full Stack<br />Developer
          </h1>
          <h1 className="main__description">
            TikTok<br />Content Creator
          </h1>
        </div>
      </div>
      <div className="main__container animated fadeIn">
        <div className="desktop-title desktop-title-dope">DOPE</div>
        <Links/>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
