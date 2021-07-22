import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/layout";

export const queryThisPostData = graphql`
    query BlogQuery($slug: String!) {
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
    }
`;

const PostTemplate = ({ post }) => {
    return (
        <div className="page post-page">
            <article className="blog-post">
                <h1 className="title">{post.title}</h1>
                <img
                    className="featured-image"
                    // TODO: add featured image alt to netlify
                    alt=""
                    src={post.featured}
                />
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
    const post = { ...data.markdownRemark.frontmatter, body };
    return (
        <Layout pageTitle="Post Page">
            <PostTemplate post={post} />
        </Layout>
    );
};

export default Post;
