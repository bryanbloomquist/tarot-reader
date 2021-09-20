import React from "react";

const TarotCard = props => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className={
                props.delay || props.delay === 0
                    ? "tarot-card animated flipInY delay-" + props.delay + "s"
                    : "tarot-card animated fadeIn"
            }
            value={props.id}
            onClick={props.onClick}
        />
    );
};

export default TarotCard;
