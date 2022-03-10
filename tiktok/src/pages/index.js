import "./index.scss";

import React from "react";

import MainHeader from "@components/MainHeader";
import Layout from "@components/layout";
import SEO from "@components/seo";
import { Links } from "@components/Links";
import { Social } from "@components/Social";

const IndexPage = () => (
  <Layout>
    <MainHeader />
    <Social />
    <SEO title="Home" />
    <div className="flex justify-center animated fadeIn">
      <Links/>
    </div>
  </Layout>
);

export default IndexPage;
