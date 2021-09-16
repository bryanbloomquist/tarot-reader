import React, { useContext } from "react";
import tarotJSON from "../../Assets/Data/tarot.json";
import { Context } from "../../AppContext";
import TarotCard from "../TarotCard/TarotCard";

const ExploreSuit = () => {
    const { displaySuit, showTarotModal } = useContext(Context);
    const tarot = [...tarotJSON];

    if (displaySuit.length === 0) {
        return null;
    }
    return (
        <div className="row--center">
            <h2>{displaySuit.name}</h2>
            {tarot.slice(displaySuit.min, displaySuit.max).map((card) => (
                <TarotCard
                    key={card.id}
                    className="tarot-card"
                    src={card.image}
                    alt={card.name}
                    value={card.id}
                    onClick={() => showTarotModal(card)}
                />
            ))}      
        </div>
    );
};

export default ExploreSuit;
