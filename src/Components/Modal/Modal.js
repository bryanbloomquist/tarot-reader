import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const TarotModal = () => {
  const { modalCard, modalShow, handleClose } = useContext(Context);


  return (
    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>{modalCard.name}</h1>
              <hr />
              <p>{modalCard.keywords}</p>
              <hr />
            </Col>
            <Col xs={8} sm={4} className="mx-auto p-0">
              <img src={modalCard.image} alt={modalCard.name} />
            </Col>
            <Col xs={12} sm={8}>
              <p>{modalCard.general}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TarotModal;
