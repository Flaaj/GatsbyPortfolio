import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/layout";
import { GatsbyImage } from "gatsby-plugin-image";

export const queryThisPostData = graphql`
    query BlogQuery($slug: String!, $featured: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                slug
                author
                date
            }
        }
        file(relativePath: { regex: $featured }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const PostTemplate = ({ post }) => {
    return (
        <div className="page post-page">
            <article className="blog-post">
                <h1 className="title">{post.title}</h1>
                <GatsbyImage image={post.image} alt="Hello Responsive Pic" />
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
    const body = data.markdownRemark.html;
    const image = data.file.childImageSharp.gatsbyImageData;
    const post = { ...data.markdownRemark.frontmatter, body, image };
    return (
        <Layout pageTitle="Post Page">
            <PostTemplate post={post} />
        </Layout>
    );
};

export default Post;
