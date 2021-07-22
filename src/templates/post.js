import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/layout";
import Img from "gatsby-image";

export const queryThisPostData = graphql`
    query BlogQuery($slug: String!, $featured: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                slug
                featured
                author
                date
            }
        }
        file(relativePath: { regex: $featured }) {
            childImageSharp {
                fluid(maxWidth: 1400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const PostTemplate = ({ post }) => {
    return (
        <div className="page post-page">
            <article className="blog-post">
                <h1 className="title">{post.title}</h1>
                <Img fluid={post.fluid} alt="Hello Responsive Pic" />
                <div className="post-info">
                    <small>Author: {post.author}</small>
                    <small>Published: {post.date}</small>
                </div>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                />
            </article>
        </div>
    );
};
const Post = ({ data }) => {
    console.log(data);
    const body = data.markdownRemark.html;
    const fluid = data.file.childImageSharp.fluid;
    const post = { ...data.markdownRemark.frontmatter, body, fluid };
    return (
        <Layout pageTitle="Post Page">
            <PostTemplate post={post} />
        </Layout>
    );
};

export default Post;
