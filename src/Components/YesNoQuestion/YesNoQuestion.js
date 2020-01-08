import React from "react";

const YesNoQuestion = (props) => {
  return (
    <input 
      type="text" 
      name="userInput" 
      onChange={props.onchange}
      value={props.name}
    />
  );
}

export default YesNoQuestion;