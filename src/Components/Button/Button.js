import React from "react";
import { Button } from "react-bootstrap";

const Btn = props => {
  return (
    <Button variant="outline-light" className="m-1 mb-3" onClick={props.onClick}>
      {props.name}
    </Button>
  );
};

export default Btn;
