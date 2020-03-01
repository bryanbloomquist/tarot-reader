import React from "react";

const TarotCard = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={"card animated flipInY delay-" + props.delay + "s"}
      value={props.id}
      onClick={props.onClick}
    />
  );
};

export default TarotCard;
