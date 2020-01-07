import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Button from "./Components/Header/Button";

function App() {
  const threeCardDraw = () => {
    console.log("Past, Present, Future");
  }
  const yesNoQuestion = () => {
    console.log("Yes/No Question");
  }
  const exploreTheTarot = () => {
    console.log("Explore the Tarot")
  }
  return (
    <Header>
      <Button 
        name="Past, Present, Future"
        click={threeCardDraw} />
      <Button
        name="Yes/No Question"
        click={yesNoQuestion} />
      <Button
        name="Explore the Tarot"
        click={exploreTheTarot} />
    </Header>
  );
}

export default App;
