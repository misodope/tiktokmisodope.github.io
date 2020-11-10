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
        <div className="main__join">
          Join our family and subscribe for more content.
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
