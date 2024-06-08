import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

const QuestionComponent = () => {
    const [question, setQuestionInput] = useState("");
    const dispatch = useDispatch();

    const handleQuestionSubmit = () => {
        dispatch(setQuestion(question));
        setQuestionInput("");
    };

    return (
        <div>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestionInput(e.target.value)}
                placeholder="Ställ en fråga"
            />
            <button onClick={handleQuestionSubmit}>Skicka fråga</button>
        </div>
    );
};

export default QuestionComponent;
