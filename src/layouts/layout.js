/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";
import Header from "../components/header";
import Main from "../components/main";
import ThreeJsCanvas from "../components/threeJsCanvas";
import Head from "../components/head";
import Footer from "../components/footer";

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Head />
            <ThreeJsCanvas />
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
