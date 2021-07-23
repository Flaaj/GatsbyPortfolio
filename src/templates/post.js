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
                featured_alt
            }
        }
        file(relativePath: { regex: $featured }) {
            childImageSharp {
                gatsbyImageData(quality: 100, jpgOptions: { progressive: true })
            }
        }
    }
`;

const PostTemplate = ({ post }) => {
    return (
        <div className="page post-page">
            <article className="blog-post">
                <h1 className="title">{post.title}</h1>
                <GatsbyImage image={post.image} alt={post.featured_alt} />
                <div className="post-info-wrapper">
                    <small className="post-info publish-date">
                        Published: {post.date.split("T")[0]}
                    </small>
                    <span className="divider">|</span>
                    <small className="post-info author">
                        Author: {post.author}
                    </small>
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
