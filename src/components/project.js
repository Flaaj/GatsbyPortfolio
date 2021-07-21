import React from "react";

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
                <p className="project__description">
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="project__link"
                    >
                        <img
                            width="200"
                            height="200"
                            src={thumbnail}
                            className="project__thumbnail"
                            alt=""
                        />
                    </a>
                    {description}
                </p>
            </div>
            <div className="project__row">
                <span className="project__label">Technologies: </span>
                <p className="project__technologies">{technologies}</p>
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
