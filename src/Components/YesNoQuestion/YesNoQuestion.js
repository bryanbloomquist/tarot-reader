import React, { useContext } from "react";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const YesNoQuestion = () => {
    const { showYNQ, handleInputChange, userQuestion, yesNoAnswer } = useContext(Context);

    if (!showYNQ) {
        return null;
    }

    return (
        <div className="container">
            <div className="row--center">
                <input
                    autoFocus
                    className="input input--question"
                    placeholder="Enter your Yes/No question here...."
                    aria-label="User's Question"
                    aria-describedby="User's Question Input"
                    value={userQuestion}
                    onChange={handleInputChange}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            yesNoAnswer()
                        }
                    }}
                />
                <Button
                    classes="button button--submit"
                    name="Submit"
                    onClick={yesNoAnswer}
                />
            </div>
        </div>
    );
};

export default YesNoQuestion;
