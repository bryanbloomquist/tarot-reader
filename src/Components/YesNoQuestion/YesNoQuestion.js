import React, { useContext } from "react";
import { Context } from "../../AppContext";

const YesNoQuestion = () => {
    const { showYNQ, handleInputChange, userQuestion, yesNoAnswer } = useContext(Context);

    if (!showYNQ) {
        return null;
    }

    return (
        <div className="container">
            <div className="row">
                <input
                    autoFocus
                    placeholder="Enter your Yes/No question here...."
                    aria-label="User's Question"
                    aria-describedby="User's Question Input"
                    value={userQuestion}
                    onChange = { handleInputChange }
                    onKeyPress = {(event) => {
                        if (event.key === "Enter") {
                            yesNoAnswer()
                        }
                    }}
                />
                <button 
                    variant="outline-light"
                    onClick={yesNoAnswer}  
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default YesNoQuestion;
