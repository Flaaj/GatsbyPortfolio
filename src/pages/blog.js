import * as React from "react";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import PostThumbnail from "../components/post-thumbnail";

export const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/pages/blog.md/" }) {
            frontmatter {
                posts {
                    title
                    slug
                    featured {
                        childImageSharp {
                            gatsbyImageData(quality: 10)
                        }
                    }
                    featured_alt
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

const BlogPage = ({ data }) => {
    const posts = data.markdownRemark.frontmatter.posts;

    return (
        <Layout pageTitle="blog page">
            <BlogPageTemplate posts={posts} />
        </Layout>
    );
};

export default BlogPage;
