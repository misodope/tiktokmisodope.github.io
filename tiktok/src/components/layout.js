/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Container";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
