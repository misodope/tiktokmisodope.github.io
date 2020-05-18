import "./index.scss";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Social } from "../components/Social";
import MainHeader from "../components/MainHeader";
import TikTok from "../components/TikTok";

const IndexPage = () => (
  <Layout>
    <div className="main">
      <SEO title="Home" />
      <div className="main__container animated fadeIn">
        <div className="main__header">
          <h1 className="main__description">
            Hi I'm Jerri,
            <br />
            I like to make video <br />
            content on{" "}
            <a className="main__tiktok-link" href="https://www.tiktok.com/@misodope/">
              TikTok
            </a>{" "}
            <br />& build Software.
          </h1>
        </div>
        <div className="main__about">
          Don't forget to check out new videos daily!
          <br />
          Site is still under construction
        </div>
        <div className="main__social-footer">
          <Social />
        </div>
      </div>

      <div className="main__video">
        <TikTok />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
