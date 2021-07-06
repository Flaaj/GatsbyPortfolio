import React, { useEffect, useState } from "react";

const Project = ({
    name,
    thumbnail,
    link,
    githubLink,
    description,
    technologies,
}) => {
    return (
        <div className="project">
            <div className="project__col">
                <a href={link} target="_blank" className="project__link">
                    <img
                        width="200"
                        height="200"
                        src={thumbnail}
                        className="project__thumbnail"
                        alt=""
                    />
                </a>
            </div>
            <div className="project__col">
                <h3 className="project__name">{name}</h3>
                <p className="project__description">{description}</p>
                <div className="project__row">
                    <span className="project__label">Technologies: </span>
                    <p className="project__technologies">{technologies}</p>
                </div>
                <div className="project__row">
                    <span className="project__label">Github: </span>
                    <a
                        href={githubLink}
                        target="_blank"
                        className="project__github"
                    >
                        {githubLink.split("://")[1]}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
