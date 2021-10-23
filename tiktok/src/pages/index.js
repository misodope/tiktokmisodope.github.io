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
      </div>
      <div className="main__container animated fadeIn">
        <Links/>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
