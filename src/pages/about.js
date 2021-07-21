import * as React from "react";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";

export const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/pages/about.md/" }) {
            frontmatter {
                about_text
                about_page_title
            }
        }
    }
`;
const AboutPage = ({
    data: {
        markdownRemark: {
            frontmatter: { about_text, about_page_title },
        },
    },
}) => {
    return (
        <Layout pageTitle="About Page">
            <div className="page about-page">
                <h1 className="title">{about_page_title}</h1>
                <p className="presentation">{about_text}</p>
            </div>
        </Layout>
    );
};

export default AboutPage;
