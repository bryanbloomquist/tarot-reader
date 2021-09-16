import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../AppContext";
import TarotCard from "../TarotCard/TarotCard";

const ThreeCardDraw = () => {
    const { showTCD, tarotDeck, showTarotModal } = useContext(Context);
    const [td, setTD] = useState(tarotDeck);

    useEffect(() => {
        setTD(tarotDeck);
    }, [tarotDeck]);

    if (!showTCD) {
        return null;
    }

    return (
        <div className="container">
            <div className="row row--cards">
                {td.slice(0, 3).map((tarot, i) => (
                    <TarotCard
                        key={tarot.id}
                        className="tarot-card"
                        src={tarot.image}
                        alt={tarot.name}
                        delay={i}
                        value={tarot.id}
                        onClick={() => showTarotModal(tarot)}
                    />
                ))}
            </div>
            <div className="row row--reading animated fadeIn delay-3s slower">
                <p>
                    <span>The Past:</span> ({tarotDeck[0].name}) {tarotDeck[0].past}
                </p>
                <p>
                    <span>The Present:</span> ({tarotDeck[1].name}) {tarotDeck[1].present}
                </p>
                <p>
                    <span>The Future:</span> ({tarotDeck[2].name}) {tarotDeck[2].future}
                </p>
            </div>
        </div>
    );
};

export default ThreeCardDraw;
