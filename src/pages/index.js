import * as React from "react";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { SpotLight } from "three";

const IndexPage = () => (
    <Layout pageTitle="Home Page">
        <div className="big-letters">
            {"Portfolio".split("").map(letter => (
                <div className="big-letter">{letter}</div>
            ))}
        </div>
    </Layout>
);

export default IndexPage;
