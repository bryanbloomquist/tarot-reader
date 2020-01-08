import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import TarotCard from "../TarotCard/TarotCard";

const ThreeCardDraw = () => {
  const { showTCD, tarotDeck, showTarotModal } = useContext(Context);
  const [td, setTD] = useState(tarotDeck);

  useEffect(() => {
    setTD(tarotDeck);
  }, [tarotDeck]);

  const style = {
    border: "2px solid #ffffff",
    borderRadius: "10px",
    backgroundColor: "#22222288",
    padding: "25px",
    color: "#ffffff",
    fontSize: "1.3em"
  };

  if (!showTCD) {
    return null;
  }
  
  return (
    <Container>
      <Row className="justify-content-center animated mb-4">
        {td.slice(0, 3).map((tarot, i) => (
          <Col xs={3} md={3} lg={2} key={tarot.id}>
            <TarotCard
              src={tarot.image}
              alt={tarot.name}
              delay={i}
              value={tarot.id}
              onClick={() => showTarotModal(tarot)}
            />
          </Col>
        ))}
        <Col xs={10} style={style} className="animated fadeIn delay-3s slower">
          <p>
            <b>The Past:</b> ({tarotDeck[0].name}) {tarotDeck[0].past}
          </p>
          <p>
            <b>The Present:</b> ({tarotDeck[1].name}) {tarotDeck[1].present}
          </p>
          <p>
            <b>The Future:</b> ({tarotDeck[2].name}) {tarotDeck[2].future}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeCardDraw;
