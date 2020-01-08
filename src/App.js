import React, {useState} from "react";
import {Col, Container} from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Header/Button";
import tarotJSON from "./Components/tarot.json";
import TarotCard from "./Components/TarotCard/TarotCard";
import ThreeCardDraw from "./Components/ThreeCardDraw/ThreeCardDraw";
import Modal from "./Components/Modal/Modal";

function App() {
  const [tarotDeck, setTarotDeck] = useState([...tarotJSON]);
  const [showTCG, setShowTCG] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalCard, setModalCard] = useState([]);

  const shuffle = (array) => {
    let i=0, j=0, temp=null
    for (i = array.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const threeCardDraw = () => {
    console.log("Past, Present, Future");
    setTarotDeck(shuffle(tarotDeck));
    setShowTCG(true);
    console.log(tarotDeck[0].name);
  }

  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  const showTarotModal = (displaycard) => {
    console.log(displaycard.name, displaycard.value);
    setModalCard(displaycard);
    handleShow();
  }

  const yesNoQuestion = () => {
    console.log("Yes/No Question");
    setShowTCG(false);
  }

  const exploreTheTarot = () => {
    console.log("Explore the Tarot")
    setShowTCG(false);
  }

  return (
    <div>
      
      <Header>
        <Button name="Past, Present, Future" click={threeCardDraw} />
        <Button name="Yes/No Question" click={yesNoQuestion} />
        <Button name="Explore the Tarot" click={exploreTheTarot} />
      </Header>

      { showTCG ?
        <Container>
          <ThreeCardDraw
            past={tarotDeck[0].name}
            pastDescription={tarotDeck[0].past}
            present={tarotDeck[1].name}
            presentDescription={tarotDeck[1].present}
            future={tarotDeck[2].name}
            futureDescription={tarotDeck[2].future}
          >
            <Col xs={3} md={3} lg={2}>
              <TarotCard src={tarotDeck[0].image} alt={tarotDeck[0].name} delay={0} value={tarotDeck[0].id} click={()=>showTarotModal(tarotDeck[0])} />          
            </Col>
            <Col xs={3} md={3} lg={2}>
              <TarotCard src={tarotDeck[1].image} alt={tarotDeck[1].name} delay={1} value={tarotDeck[1].id} click={()=>showTarotModal(tarotDeck[1])} />
            </Col>
            <Col xs={3} md={3} lg={2}>
              <TarotCard src={tarotDeck[2].image} alt={tarotDeck[2].name} delay={2} value={tarotDeck[2].id} click={()=>showTarotModal(tarotDeck[2])} />
            </Col>
          </ThreeCardDraw>
        </Container> : null
      }

      <Modal 
        show={modalShow}
        close={handleClose}
        src={modalCard.image}
        name={modalCard.name}
        keywords={modalCard.keywords}
        general={modalCard.general}
      />

    </div>

  );
}

export default App;
