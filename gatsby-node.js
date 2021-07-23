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
    const { createPage } = actions;

    const postMarkdownsFolderUrl = `${__dirname}/content/posts`;

    const postsQuery = await graphql(`
        query {
            markdownRemark(fileAbsolutePath: { regex: "/pages/blog.md/" }) {
                frontmatter {
                    posts {
                        title
                        slug
                        author
                        featured {
                            name
                            extension
                        }
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
        const mdFilePath = `${postMarkdownsFolderUrl}/${mdFileName}.md`;

        fs.openSync(mdFilePath, "w+");

        fs.writeFileSync(mdFilePath, ``);
        fs.appendFileSync(mdFilePath, `---\n`);

        Object.entries(post).forEach(([key, value]) => {
            if (key === "body") return;
            if ((key === "tags" || key === "categories") && value) {
                const list = value.map(item => item.name);
                const line = `${key}: ${list}\n`;
                fs.appendFileSync(mdFilePath, line);
            } else if (key === "featured") {
                const { name, extension } = value;
                const image = `./${name}.${extension}`;
                const line = `${key}: ${image}\n`;
                fs.appendFileSync(mdFilePath, line);
            } else {
                const line = `${key}: ${value}\n`;
                fs.appendFileSync(mdFilePath, line);
            }
        });

        fs.appendFileSync(mdFilePath, `---\n\n`);
        fs.appendFileSync(mdFilePath, post.body);
    });

    const result = await graphql(`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/posts/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            featured {
                                name
                                extension
                            }
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
        const { name, extension } = node.frontmatter.featured;
        const featured = `/${name}.${extension}/`;
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: node.fields.slug,
                pageType: "post",
                featured,
            },
        });
    });
};
