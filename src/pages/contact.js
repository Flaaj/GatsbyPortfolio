import * as React from "react";
import Layout from "../layouts/layout";
import Card from "../components/card";
import { graphql } from "gatsby";

export const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/pages/contact.md/" }) {
            frontmatter {
                contact_fields {
                    label
                    contact_link_url
                    contact_link_text
                }
                contact_page_title
            }
        }
    }
`;

const Contact = ({
    data: {
        markdownRemark: {
            frontmatter: { contact_fields, contact_page_title },
        },
    },
}) => {
    return (
        <Layout>
            <h1 className="title">{contact_page_title}</h1>
            <Card items={contact_fields} />
        </Layout>
    );
};

export default Contact;

