import * as React from "react";
import Layout from "../layouts/layout";
import { graphql, useStaticQuery } from "gatsby";
import PostThumbnail from "../components/post-thumbnail";
import { CompressedPixelFormat } from "three";

export const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/pages/blog.md/" }) {
            frontmatter {
                posts {
                    title
                    slug
                    featured
                }
            }
        }
    }
`;

const BlogPageTemplate = ({ posts }) => {
    return (
        <div className="page blog-page">
            <div className="posts">
                {posts.map(post => (
                    <PostThumbnail post={post} />
                ))}
            </div>
        </div>
    );
};

const BlogPage = ({ data, pageContext }) => {
    const posts = data.markdownRemark.frontmatter.posts;

    return (
        <Layout pageTitle="blog page">
            <BlogPageTemplate posts={posts} />
        </Layout>
    );
};

export default BlogPage;
