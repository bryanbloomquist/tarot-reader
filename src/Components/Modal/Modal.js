import React from "react";
import {Modal, Container, Row, Col, Button} from "react-bootstrap";

const TarotModal = (props) => {
  const bodyStyle = {
    color: "#ffffff",
    textAlign: "center",
    backgroundColor: "#222222",
    border: "5px solid #222222"
  }

  const imgStyle = {
    width: "100%"
  }

  const hrStyle = {
    backgroundColor: "#ffffff"
  }
  
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Body style={bodyStyle}>
        <Container>
          <Row>
            <Col xs={8} sm={4} className="mx-auto p-0">
              <img src={props.src} alt={props.name} style={imgStyle} />            
            </Col>
            <Col xs={12} sm={8}>
              <h1>{props.name}</h1>
              <hr style={hrStyle} />
              <p>{props.keywords}</p>
              <hr style={hrStyle} />
              <p>{props.general}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={bodyStyle}>
        <Button variant="secondary" onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TarotModal;