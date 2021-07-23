import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Project = ({
    name,
    thumbnail,
    link,
    github,
    description,
    technologies,
}) => {
    return (
        <div className="project">
            <h3 className="project__name">"{name}"</h3>
            <div className="project__row">
                <div className="project__description">
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="project__link"
                    >
                        <GatsbyImage
                            image={thumbnail}
                            className="project__thumbnail"
                            alt={name + " app screenshot"}
                        />
                    </a>
                    {description}
                </div>
            </div>
            <div className="project__row">
                <span className="project__label">Technologies: </span>
                <p className="project__technologies">{technologies}</p>
            </div>
            <div className="project__row">
                <span className="project__label">Project link: </span>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="project__github"
                >
                    {link.split("://")[1]}
                </a>
            </div>
            <div className="project__row">
                <span className="project__label">Github: </span>
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="project__github"
                >
                    {github.split("://")[1]}
                </a>
            </div>
        </div>
    );
};

export default Project;
