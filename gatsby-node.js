/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fs = require("fs");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const postMarkdownsUrl = `${__dirname}/src/blog`;
    const postsQuery = await graphql(`
        query {
            markdownRemark(fileAbsolutePath: { regex: "/pages/blog.md/" }) {
                frontmatter {
                    posts {
                        title
                        slug
                        author
                        featured
                        featured_alt
                        date
                        body
                        tags {
                            name
                        }
                        categories {
                            name
                        }
                    }
                }
            }
        }
    `);

    const posts = postsQuery.data.markdownRemark.frontmatter.posts;

    posts.forEach(post => {
        const mdFileName = post.title.toLowerCase().replace(/ /g, "-");
        const mdFilePath = `${postMarkdownsUrl}/${mdFileName}.md`;

        fs.openSync(mdFilePath, "w+");

        fs.writeFileSync(mdFilePath, ``);
        fs.appendFileSync(mdFilePath, `---\n`);

        Object.entries(post).forEach(([key, value]) => {
            if (key === "body") return;
            if (key === "tags" || key === "categories") {
                console.log(value);
            } else {
                const line = `${key}: ${value}\n`;
                fs.appendFileSync(mdFilePath, line);
            }
        });

        fs.appendFileSync(mdFilePath, `---\n\n`);
        fs.appendFileSync(mdFilePath, post.body);
    });

    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/src/blog/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            featured
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: node.fields.slug,
                featured: `${node.frontmatter.featured}/`,
            },
        });
    });
};
