import React, { useContext } from "react";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const Header = () => {
    const { threeCardDraw, yesNoQuestion, exploreTheTarot } = useContext(Context);

    return (
        <div className="hero">
            <h1 className="hero__title">Get your Tarot reading!</h1>
            <Button classes="button" name="Past, Present, Future" onClick={threeCardDraw} />
            <Button classes="button" name="Yes/No Question" onClick={yesNoQuestion} />
            <Button classes="button" name="Explore the Tarot" onClick={exploreTheTarot} />
        </div>
    );
};

export default Header;
