import * as React from "react";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import Markdown from "react-markdown";

// export const query = graphql`
//     query {
//         markdownRemark(fileAbsolutePath: { regex: "/pages/blog.md/" }) {
//             frontmatter {
//                 posts {
//                     post_title
//                     body
//                 }
//             }
//         }
//     }
// `;

// const BlogPageTemplate = ({ title, body }) => {
//     return (
//         <div className="page blog-page">
//             <h1 className="title">{title}</h1>
//             <article className="blog-post">
//                 <Markdown children={body} allowDangerousHtml />
//             </article>
//         </div>
//     );
// };

const BlogPage = () => {
    return (
        <Layout pageTitle="blog Page">
            {/* <BlogPageTemplate
                title={posts[0].post_title}
                body={posts[0].body}
            /> */}
        </Layout>
    );
};

export default BlogPage;
