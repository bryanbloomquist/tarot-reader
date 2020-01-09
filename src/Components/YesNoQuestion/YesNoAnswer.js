import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import TarotCard from "../TarotCard/TarotCard";

const YesNoAnswer = () => {
  const { showYNA, tarotDeck, showTarotModal, userQuestion } = useContext(
    Context
  );

  if (!showYNA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} md={3}>
          <TarotCard
            src={tarotDeck[0].image}
            alt={tarotDeck[0].name}
            delay={0}
            value={tarotDeck[0].id}
            onClick={() => showTarotModal(tarotDeck[0])}
          />
        </Col>
        <Col xs={12} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>Your question: {userQuestion}</p>
          <hr />
          <p>{tarotDeck[0].yesno}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default YesNoAnswer;
