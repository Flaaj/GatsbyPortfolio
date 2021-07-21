import * as React from "react";
import CardItem from "./card-item";

const Card = ({ items }) => (
    <div className="card">
        {items.map(({ label, link, text }) => (
            <CardItem label={label} link={link} text={text} />
        ))}
    </div>
);

export default Card;
