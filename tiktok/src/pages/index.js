import "./index.scss";

import React from "react";

import MainHeader from "@components/MainHeader";
import Layout from "@components/layout";
import Seo from "@components/seo";
import Footer from "@components/Footer";
import { Links } from "@components/Links";
import { Social } from "@components/Social";
import Emails from "@components/Emails";

const IndexPage = () => (
  <Layout>
    <MainHeader />
    <Social />
    {/* <Emails /> */}
    <Seo title="Home" />
    <div className="flex justify-center animated fadeIn">
      <Links />
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
