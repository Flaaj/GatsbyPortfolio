import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/layout";
// import Markdown from "react-markdown";

export const queryThisPostData = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date
            }
        }
    }
`;

const PostTemplate = ({ post }) => {
    return (
        <div className="page blog-page">
            <article className="blog-post">
                <h1 className="title">{post.title}</h1>
                <div className="post-info">
                    <small>Author: {post.author}</small>
                    <small>Published: {post.date}</small>
                </div>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                />
                {/* <Markdown children={body} allowDangerousHtml /> */}
            </article>
        </div>
    );
};
const Post = ({ data }) => {
    const body = data.markdownRemark.html;
    const post = { ...data.markdownRemark.frontmatter, body };
    return (
        <Layout pageTitle="blog Page">
            <PostTemplate post={post} />
        </Layout>
    );
};

export default Post;
