import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/seo/metadata.md/" }) {
            frontmatter {
                author
                title
                tags
                keywords {
                    keyword
                }
                description
                logo {
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

const Head = () => {
    const results = useStaticQuery(query);
    const meta = results.markdownRemark.frontmatter;
    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta charset="utf-8"></meta>
            <meta name="robots" content="index, follow"/>
            <meta name="author" content={meta.author} />
            <meta name="description" content={meta.description} />
            <meta
                name="keywords"
                content={meta.keywords.map(({ keyword }) => keyword).join(", ")}
            />
        </Helmet>
    );
};

export default Head;
