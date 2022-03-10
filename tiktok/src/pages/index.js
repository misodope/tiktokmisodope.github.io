import React from "react";

import "./index.scss";

import MainHeader from "@components/MainHeader";
import Layout from "@components/layout";
import Seo from "@components/seo";
import Footer from "@components/Footer";
import { Links } from "@components/Links";
import { Social } from "@components/Social";

import logo from "@images/misodope_logo_169.png";


const IndexPage = () => (
  <Layout>
    <MainHeader />
    <Social />
    <Seo title="Home" />
    <div className="flex justify-center animated fadeIn">
      <Links />
    </div>
    <Footer />
    <img className="fixed bottom-0 right-0 w-20 h-20" src={logo} alt="profile picture" />
  </Layout>
);

export default IndexPage;
