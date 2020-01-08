import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const TarotModal = () => {
  const { modalCard, modalShow, handleClose } = useContext(Context);
  const bodyStyle = {
    color: "#ffffff",
    textAlign: "center",
    backgroundColor: "#222222",
    border: "none"
  };

  const imgStyle = {
    width: "100%"
  };

  const hrStyle = {
    backgroundColor: "#ffffff"
  };

  return (
    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Body style={bodyStyle}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1>{modalCard.name}</h1>
              <hr style={hrStyle} />
              <p>{modalCard.keywords}</p>
              <hr style={hrStyle} />
            </Col>
            <Col xs={8} sm={4} className="mx-auto p-0">
              <img src={modalCard.image} alt={modalCard.name} style={imgStyle} />
            </Col>
            <Col xs={12} sm={8}>
              <p>{modalCard.general}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={bodyStyle}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TarotModal;
