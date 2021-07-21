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

const AboutPageTemplate = props => {
    const { title, text } = props;
    return (
        <div className="page about-page">
            <h1 className="title">{title}</h1>
            <p className="presentation">{text}</p>
        </div>
    );
};

const AboutPage = ({
    data: {
        markdownRemark: {
            frontmatter: { about_text, about_page_title },
        },
    },
}) => {
    return (
        <Layout pageTitle="About Page">
            <AboutPageTemplate title={about_page_title} text={about_text} />
        </Layout>
    );
};

export default AboutPage;
