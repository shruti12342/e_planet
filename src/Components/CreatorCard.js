// components/CreatorCard.js
import React from "react";

const CreatorCard = ({ name, title, image }) => {
    return (
        <div className="creator-card">
            <img src={image} alt={name} className="creator-image" />
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
};

export default CreatorCard;
