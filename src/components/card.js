import * as React from "react";
import CardItem from "./card-item";

const Card = ({ items }) => (
    <div className="card">
        {items.map(({ label, contact_link_url, contact_link_text }) => (
            <CardItem
                key={contact_link_url}
                label={label}
                link={contact_link_url}
                text={contact_link_text}
            />
        ))}
    </div>
);

export default Card;
