import React from "react";
import {Jumbotron} from "react-bootstrap";

const Header = (props) => {
  const style = {
    backgroundColor: "#22222211"
  }
  return (
    <Jumbotron fluid
      className="text-center p-3"
      style={style}
    >
      <h1 className="display-4 text-light">
        Get your Tarot reading!
      </h1>
      {props.children}
    </Jumbotron>
  );
}

export default Header;