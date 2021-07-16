import * as React from "react";

const CardItem = ({ label, link, text }) => {
    return (
        <div className="card-item">
            {label && <div className="label">{label}:</div>}
            <a className="link" href={link}>
                {text || link}
            </a>
        </div>
    );
};

export default CardItem;
