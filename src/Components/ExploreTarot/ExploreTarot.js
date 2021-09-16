import React, { useContext } from "react";
import exploreJSON from "../../Assets/Data/exploreTarot.json";
import Button from "../Button/Button";
import ExploreSuit from "./ExploreSuit";
import { Context } from "../../AppContext";

const ExploreTarot = () => {
    const { showETT, setDisplaySuit } = useContext(Context);
    const exploreData = exploreJSON;

    if (!showETT) {
        return null;
    }

    return (
        <div className="container">
            <div className="row--center">
                {exploreData.map((data, i) => (
                    <Button 
                        onClick={() => setDisplaySuit(exploreData[data.id])}
                        name = {data.name}
                        key={i}
                    />
                ))}
            </div>
            <ExploreSuit />
        </div>
    );
};

export default ExploreTarot;
