import React from "react";
import {Button} from "react-bootstrap";

const Btn = (props) => {
  return (
    <Button 
      variant="outline-light"
      className="m-1"
      onClick={props.click}
    >
      {props.name}
    </Button>
  );
}

export default Btn;