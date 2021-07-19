import * as React from "react";
import { Link } from "gatsby";
import Layout from "../layouts/layout";

const AboutPage = () => (
    <Layout pageTitle="About Page">
        <div className="page about-page">
            <h1 className="title">About me</h1>
            <p className="presentation">
                My name is Michał Wołek. I am a junior front-end developer,
                focused on mastering React.js and related technologies, although
                at work I mainly work in WordPress. Im engineer in control
                automatics and robotics, gratuated from WUT, MEiL department.
                Currenlty I study Computational Engineering at Warsaw
                University, where my masters thesis will be focusing on
                big-scale data visualisation with OpenGL. My goal as a developer
                is to be able to create reliable software that meets individual
                peoples' needs. My second goal is to learn some graphic design,
                because I am absolutely awful at it, as you can see on this page
                which I have "designed". 
            </p>
        </div>
    </Layout>
);

export default AboutPage;
