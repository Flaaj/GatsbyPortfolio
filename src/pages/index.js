import * as React from "react";

import Layout from "../components/layout";

const IndexPage = () => (
    <Layout pageTitle="Home Page">
        <div className="page landing-page">
            <span className="landing-text">Hello.</span>
            <span className="landing-text">My name is Michał.</span>
            <span className="landing-text">This is my personal</span>
            <div className="big-letters">
                {"Portfolio".split("").map(letter => (
                    <div className="big-letter">{letter}</div>
                ))}
            </div>
        </div>
    </Layout>
);

export default IndexPage;
