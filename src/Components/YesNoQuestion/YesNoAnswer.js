import React, { useContext } from "react";
import { Context } from "../../AppContext";
import TarotCard from "../TarotCard/TarotCard";

const YesNoAnswer = () => {
    const { showYNA, tarotDeck, showTarotModal, userQuestion } = useContext(
        Context
    );

    if (!showYNA) {
        return null;
    }

    return (
        <div className="container">
            <div className="row row--answer">
                <TarotCard
                    src={tarotDeck[0].image}
                    alt={tarotDeck[0].name}
                    delay={0}
                    value={tarotDeck[0].id}
                    onClick={() => showTarotModal(tarotDeck[0])}
                />
                <div className="tarot-read animated fadeIn delay-1s slower">
                    <p>Your question: <em>{userQuestion}</em></p>
                    <hr />
                    <p>{tarotDeck[0].yesno}</p>
                </div>
            </div>
        </div>
    );
};

export default YesNoAnswer;
