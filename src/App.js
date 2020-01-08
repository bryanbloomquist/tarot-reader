import React from "react";
import { Provider } from "./AppContext";
import "./App.css";
import Header from "./Components/Header/Header";
import ThreeCardDraw from "./Components/ThreeCardDraw/ThreeCardDraw";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <Provider>
      <Header />
      <ThreeCardDraw />
      <Modal />
    </Provider>
  );
}

export default App;
