import React from "react";

const TarotCard = (props) => {
  const style = {
    width: "100%",
    marginBottom: "20px"
  }
  return (
    <img 
      src={props.src}
      alt={props.alt}
      style={style}
      className={"animated flipInY delay-"+props.delay+"s"}
      value={props.id}
    />
  )
}

export default TarotCard;