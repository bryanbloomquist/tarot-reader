import React, { useContext } from "react";
import {Row, Col} from "react-bootstrap"
import tarotJSON from "../JSON/tarot.json";
import { Context } from "../../AppContext";

const ExploreSuit = () => {
  const { displaySuit, showTarotModal } = useContext(Context);
  const tarot = [...tarotJSON];

  if (displaySuit.length === 0) {
    return null;
  }
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="explore-title">
        <h1>{displaySuit.name}</h1>
      </Col>
      {tarot.slice(displaySuit.min, displaySuit.max).map((card) => (
        <Col xs={4} md={3} lg={2} key={card.id} className="p-1">
          <img
            src={card.image}
            alt={card.name}
            onClick={() => showTarotModal(card)}
            className="explore-card"
          />
        </Col>
      ))}      
    </Row>

  );
};

export default ExploreSuit;
