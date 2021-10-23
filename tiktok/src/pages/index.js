import "./index.scss";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Emails from "../components/Emails";
import { Links } from "../components/Links";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex justify-center animated fadeIn">
      <Links/>
    </div>
  </Layout>
);

export default IndexPage;
