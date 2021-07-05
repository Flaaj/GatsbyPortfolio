/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../styles/main.scss";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
// import ThreeJsCanvas from "./threeJsCanvas";
import Head from "./head";
import Footer from "./footer";
const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Head />
            {/* <ThreeJsCanvas /> */}
            <div className="page-wrapper">
                <Header pageTitle={pageTitle} />
                <div className="container">
                    <Main>{children}</Main>
                    {/* <Sidebar /> */}
                </div>
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
