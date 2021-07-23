import React from "react";
import Layout from "../layouts/layout";
import Project from "../components/project";
import { graphql } from "gatsby";

export const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/pages/projects.md/" }) {
            frontmatter {
                project_list {
                    link
                    description
                    github
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    technologies
                    name
                }
                projects_page_title
                projects_page_description
            }
        }
    }
`;
const AboutPage = ({
    data: {
        markdownRemark: {
            frontmatter: {
                project_list,
                projects_page_title,
                projects_page_description,
            },
        },
    },
}) => {
    return (
        <Layout pageTitle="My projects">
            <div className="page projects-page">
                <h2 className="title">{projects_page_title}</h2>
                <p className="page__description">{projects_page_description}</p>
                <ul className="projects__list">
                    {project_list.map(
                        ({
                            name,
                            description,
                            thumbnail,
                            link,
                            github,
                            technologies,
                        }) => (
                            <li className="project__single" key={name}>
                                <Project
                                    name={name}
                                    thumbnail={thumbnail.childImageSharp.gatsbyImageData}
                                    link={link}
                                    github={github}
                                    description={description}
                                    technologies={technologies}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </Layout>
    );
};
export default AboutPage;
