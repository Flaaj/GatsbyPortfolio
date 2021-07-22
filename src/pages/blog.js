import * as React from "react";
import Layout from "../layouts/layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import PostThumbnail from "../components/post-thumbnail";

const query = graphql`
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

const BlogPageTemplate = () => {
    const results = useStaticQuery(query);
    const posts = results.markdownRemark.frontmatter.posts;

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

const BlogPage = () => {
    return (
        <Layout pageTitle="blog Page">
            <BlogPageTemplate />
        </Layout>
    );
};

export default BlogPage;
