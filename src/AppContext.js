import React, { useState } from "react";
import tarotJSON from "./Components/tarot.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [tarotDeck, setTarotDeck] = useState([...tarotJSON]);
  const [showTCD, setShowTCD] = useState(false);
  const [showYNQ, setShowYNQ] = useState(false);
  const [showYNA, setShowYNA] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalCard, setModalCard] = useState([]);

  const shuffle = array => {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const threeCardDraw = () => {
    setTarotDeck(shuffle(tarotDeck));
    setShowYNQ(false);
    setShowYNA(false);
    setShowTCD(true);
  };

  const yesNoQuestion = () => {
    setTarotDeck(shuffle(tarotDeck));
    setShowTCD(false);
    setShowYNA(false);
    setShowYNQ(true);
  };

  const yesNoAnswer = () => {
    console.log("Yes/No Answer");
    setShowTCD(false);
    setShowYNQ(false);
    setShowYNA(true);
  }

  const handleInputChange = event => {
    setUserQuestion(event.target.value);
    console.log(userQuestion);
  };

  const exploreTheTarot = () => {
    console.log("Explore the Tarot");
    setShowTCD(false);
  };

  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  const showTarotModal = displaycard => {
    setModalCard(displaycard);
    handleShow();
  };

  return (
    <Context.Provider
      value={{
        tarotDeck,
        showTCD,
        showYNQ,
        showYNA,
        userQuestion,
        modalShow,
        modalCard,
        threeCardDraw,
        yesNoQuestion,
        yesNoAnswer,
        handleInputChange,
        exploreTheTarot,
        handleClose,
        handleShow,
        showTarotModal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
