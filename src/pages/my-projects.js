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
            }
        }
    }
`;
const AboutPage = ({
    data: {
        markdownRemark: {
            frontmatter: { project_list, projects_page_title },
        },
    },
}) => {
    return (
        <Layout pageTitle="About Page">
            <div className="page projects-page">
                <h2 className="title">{projects_page_title}</h2>
                <p className="page__description">
                    Below I present some of the things I built to let you know
                    about the level of my current abilities. These projects are
                    made purely for the purpose of training.
                </p>
                <ul className="projects__list">
                    <li className="project__single">
                        <Project
                            name={project_list[0].project_name}
                            thumbnail={project_list[0].thumbnail}
                            link={project_list[0].project_link}
                            githubLink={project_list[0].github_link}
                            description={project_list[0].project_description}
                            technologies={project_list[0].technologies}
                        />
                    </li>
                    <li className="project__single">
                        <Project
                            name="Watch Tuna"
                            thumbnail="watchtuna.png"
                            link="https://watch-tuna.web.app/tune"
                            githubLink="https://github.com/flaaj/watch-tuna-react"
                            description="This is Watch Tuna, a web app that helps watch owners with no professional tools to tune their watches or at least determine how much their watches miss the actual time. It uses microphone to record the soundwave of balance wheel, then seeks for peaks in the soundwave, calculates frequency of ticking as accurately as possible, then compares it to actual required frequency of a watch and calculates how many seconds per day will the watch lose or gain."
                            technologies="JavaScript, React, Sass, Firebase, sound wave filtering, peak finding algorithm"
                        />
                    </li>
                    <li className="project__single">
                        <Project
                            name="Image search app"
                            thumbnail="imagesearch.png"
                            link="https://flaaj-angularimagesearch.netlify.app/"
                            githubLink="https://github.com/Flaaj/AngularImageSearch"
                            description="This is the applet made while learning Angular, without following any tutorial, using just offical Angular documentation and Stack Overflow. I used Unsplash api to search for images, get the total amount of pages with the search results, display clickable related searches and display images in way that the next picture is always placed in the shortest of 3 columns. Although It wasn't necessary here, because the app is small and uncomplicated, I used Ngrx store for storing image addresses and the informations about last query and amount of pages, for the purpose of getting to know how to use Angular store."
                            technologies="JavaScript, Angular, Ngrx, sass, interacting with REST API"
                        />
                    </li>
                    <li className="project__single">
                        <Project
                            name="Best Shop"
                            thumbnail="bestshop.png"
                            link="https://flaaj-bestshop.netlify.app/"
                            githubLink="https://github.com/flaaj/bestshop"
                            description="
                        A responsive web page written using HTML, Sass for styling and a little JavaScript. The page was recreated based on AdobeXD project with almost pixel-perfect precision"
                            technologies="HTML, Sass, Responsive Web Design, JavaScript"
                        />
                    </li>
                    <li className="project__single">
                        <Project
                            name="Pathfinder"
                            thumbnail="pathfinder.png"
                            link="https://flaaj-pathfinder.netlify.app"
                            githubLink="https://github.com/flaaj/pathfinder"
                            description="
                        A mini-game, where you can draw and remove walls on the grid
                        using your mouse to create a labirynth. Then, a
                        demonstration of breadth first search alrogithm in work is
                        displayed and using this algorithm, the shortest path
                    between entrance (top left corner) and exit (bottom right
                        corner) is found. The elements are displayed using CSS Grid"
                            technologies="HTML, CSS, CSS Grid, JavaScript (ES6), Depth first search algorithm"
                        />
                    </li>
                    <li className="project__single">
                        <Project
                            name="Tetris"
                            thumbnail="tetris.png"
                            link="https://flaaj-tetris.netlify.app/"
                            githubLink="https://github.com/flaaj/tetris"
                            description="A simple tetris game written in ES6, using canvas to display the blocks. The game's little 'engine' was written by myself"
                            technologies="HTML Canvas, Javascript"
                        />
                    </li>
                </ul>
            </div>
        </Layout>
    );
};
export default AboutPage;
