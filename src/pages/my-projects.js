import React from "react";
import Layout from "../layouts/layout";
import Project from "../components/project";
import { graphql } from "gatsby";

export const query = graphql`
    query {
        markdownRemark {
            frontmatter {
                project_list {
                    github_link
                    project_description
                    project_link
                    thumbnail
                    technologies
                    project_name
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
    console.log(project_list);
    return (
        <Layout pageTitle="About Page">
            <div className="page projects-page">
                <h2 className="title">{projects_page_title}</h2>
                <p className="page__description">{projects_page_description}</p>
                <ul className="projects__list">
                    {project_list.map(
                        ({
                            project_name,
                            project_description,
                            thumbnail,
                            project_link,
                            github_link,
                            technologies,
                        }) => (
                            <li className="project__single" key={project_name}>
                                <Project
                                    name={project_name}
                                    thumbnail={thumbnail}
                                    link={project_link}
                                    githubLink={github_link}
                                    description={project_description}
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
