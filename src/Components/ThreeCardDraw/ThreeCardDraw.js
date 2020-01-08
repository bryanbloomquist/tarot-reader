import React from "react";
import {Row, Col} from "react-bootstrap";

const ThreeCardDraw = (props) => {
  const style = {
    border: "2px solid #ffffff",
    borderRadius: "10px",
    backgroundColor: "#22222288",
    padding: "25px",
    color: "#ffffff",
    fontSize: "1.3em"
  }
  return (
    <Row className="justify-content-center animated mb-4">
      {props.children}
      <Col xs={10} style={style} className="animated fadeIn delay-3s">
        <p><b>The Past:</b> ({props.past}) {props.pastDescription} </p>
        <p><b>The Present:</b> ({props.present}) {props.presentDescription} </p>
        <p><b>The Future:</b> ({props.future}) {props.futureDescription} </p>
      </Col>
    </Row>
  );
}

export default ThreeCardDraw;