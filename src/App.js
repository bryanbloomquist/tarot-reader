import React from 'react';
import { Provider } from "./AppContext";
import Header from "./Components/Header/Header";
import ThreeCardDraw from "./Components/ThreeCardDraw/ThreeCardDraw";
import YesNoQuestion from "./Components/YesNoQuestion/YesNoQuestion";
import YesNoAnswer from "./Components/YesNoQuestion/YesNoAnswer";
import ExploreTarot from "./Components/ExploreTarot/ExploreTarot";
import Modal from "./Components/Modal/Modal";
import Logo from "./Components/Logo/Logo";
import "./SCSS/main.scss";

const App = () => {
    return (
        <Provider>
            <Header />
            <ThreeCardDraw />
            <YesNoQuestion />
            <YesNoAnswer />
            <ExploreTarot />
            <Modal />
            <Logo />
        </Provider>
    )
};

export default App;