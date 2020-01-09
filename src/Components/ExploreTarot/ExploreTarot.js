import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import exploreJSON from "../JSON/exploreTarot.json";
import Button from "../Button/Button";
import ExploreSuit from "./ExploreSuit";
import { Context } from "../../AppContext";

const ExploreTarot = () => {
  const { showETT, setDisplaySuit } = useContext(Context);
  const exploreData = exploreJSON;

  if (!showETT) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        {exploreData.map((data, i) => (
          <Button 
            onClick={() => setDisplaySuit(exploreData[data.id])}
            name = {data.name}
            key={i}
          />
        ))}
      </Row>
      <ExploreSuit />
    </Container>
  );
};

export default ExploreTarot;
