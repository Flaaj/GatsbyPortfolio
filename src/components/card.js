import * as React from "react";
import CardItem from "./card-item";

const Card = ({ items }) => (
    // <div className="wrapper">
    <div className="card">
        {items.map(({ label, link, text }) => (
            <CardItem label={label} link={link} text={text} />
        ))}
    </div>
    // </div>
);

export default Card;
