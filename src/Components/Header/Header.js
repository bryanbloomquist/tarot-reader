import React, { useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import Button from "./Button";
import { Context } from "../../AppContext";

const Header = () => {
  const { threeCardDraw, yesNoQuestion, exploreTheTarot } = useContext(Context);

  return (
    <Jumbotron fluid className="jumbotron text-center p-3">
      <h1 className="display-4 text-light">Get your Tarot reading!</h1>
      <Button name="Past, Present, Future" onClick={threeCardDraw} />
      <Button name="Yes/No Question" onClick={yesNoQuestion} />
      <Button name="Explore the Tarot" onClick={exploreTheTarot} />
    </Jumbotron>
  );
};

export default Header;
