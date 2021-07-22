import * as React from "react";
import Layout from "../layouts/layout";
import { graphql, useStaticQuery, Link } from "gatsby";

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

const BlogPageTemplate = () => {
    const results = useStaticQuery(query);
    const posts = results.markdownRemark.frontmatter.posts;
    console.log(posts);
    return (
        <div className="page blog-page">
            <div className="posts">
                {posts.map(post => (
                    <article className="post-thumbnail">
                        <Link
                            className="post-thumbnail__link"
                            to={`${__dirname}${post.slug}`}
                        >
                            <div className="post-thumbnail__content">
                                <h1 className="post-thumbnail__title">
                                    {post.title}
                                </h1>
                            </div>
                            <img src={post.featured} alt="" />
                        </Link>
                    </article>
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
