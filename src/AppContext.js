import React, { useState } from "react";
import tarotJSON from "./Components/JSON/tarot.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [tarotDeck, setTarotDeck] = useState([...tarotJSON]);
  const [showTCD, setShowTCD] = useState(false);
  const [showYNQ, setShowYNQ] = useState(false);
  const [showYNA, setShowYNA] = useState(false);
  const [showETT, setShowETT] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalCard, setModalCard] = useState([]);
  const [displaySuit, setDisplaySuit] = useState([]);


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
    if (showTCD === false) {
      setShowYNQ(false);
      setShowYNA(false);
      setShowETT(false);
      setShowTCD(true);  
    } else {
      setShowTCD(false);
      setTimeout(()=> { // this is a hack to set state to false to force a re-render
        setShowTCD(true)
      }, 0);
    };
  };

  const yesNoQuestion = () => {
    setTarotDeck(shuffle(tarotDeck));
    setUserQuestion("");
    setShowTCD(false);
    setShowYNA(false);
    setShowETT(false);
    setShowYNQ(true);
  };

  const yesNoAnswer = () => {
    setShowTCD(false);
    setShowYNQ(false);
    setShowETT(false);
    setShowYNA(true);
  };

  const handleInputChange = event => setUserQuestion(event.target.value);

  const exploreTheTarot = () => {
    setShowTCD(false);
    setShowYNQ(false);
    setShowYNA(false);
    setShowETT(true);
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
        showETT,
        userQuestion,
        modalShow,
        modalCard,
        displaySuit,
        setDisplaySuit,
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
